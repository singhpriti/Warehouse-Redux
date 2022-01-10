import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/Actions";

const AddWarehouse = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [detail, setDetail] = useState({
    name: "",
    city: "",
    space_available: undefined,
    type: "",
    contact: "",
  });

  const { name, city, space_available, type, contact } = detail;
  //for user can't submit the empty form
  const [error, setError] = useState("");
  //store the value in state that's why we need handle input change
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
    console.log(detail);
  };
  const handleSubmit = (e) => {
    console.log("heyyyy");
    e.preventDefault();
    if (!name || !city || !space_available || !type || !contact) {
      setError("Please Fill the Detail, You are Missing something");
    } else {
      dispatch(addUsers(detail));
      console.log("heyyyyyyyyy");
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="add__body">
      <h1>Add The detail</h1>
      {error && <h3 className="add__error">{error}</h3>}

      <div className="add__bodyTextField">
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name Of warehouse"
            variant="standard"
            value={name}
            name="name"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Location"
            variant="standard"
            value={city}
            name="city"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Space Available"
            variant="standard"
            value={space_available}
            name="space_available"
            type="number"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Type Of Warehouse"
            variant="standard"
            type="text"
            value={type}
            name="type"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Conatct Number"
            variant="standard"
            value={contact}
            name="contact"
            type="number"
            onChange={handleInputChange}
          />

          <div className="add__button">
            <Button
              className="add__bodyButton"
              variant="contained"
              type="submit"
            >
              Add Your Warehouse
            </Button>

            <Button
              className="add__bodyButton"
              variant="contained"
              onClick={() => navigate("/")}
            >
              go back to home page
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWarehouse;
