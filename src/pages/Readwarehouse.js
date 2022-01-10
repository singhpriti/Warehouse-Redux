import React from "react";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
//WE NEED USEPARAMS TO GET THE USERS ID
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/Actions";

const Readwarehouse = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [detail, setDetail] = useState({
    name: "",
    city: "",
    space_available: undefined,
    type: "",
    contact: "",
  });
  //DESTRUCTURE THE ID
  let { id } = useParams();
  const { user } = useSelector((detail) => detail.data);

  const { name, city, space_available, type, contact } = detail;
  //for user can't submit the empty form
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setDetail({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("heyyyy");
    e.preventDefault();
    if (!name || !city || !space_available || !type || !contact) {
      setError("Please Fill the Detail, You are Missing something");
    } else {
      dispatch(updateUser(detail, id));
      console.log("heyyyyyyyyy");
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="add__body">
      <h1>Edit The detail</h1>
      {error && <h3 className="add__error">{error}</h3>}

      <div className="add__bodyTextField">
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name Of warehouse"
            variant="standard"
            value={name || ""}
            name="name"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Location"
            variant="standard"
            value={city || ""}
            name="city"
            type="text"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Space Available"
            variant="standard"
            value={space_available || ""}
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
            value={type || ""}
            name="type"
            onChange={handleInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Conatct Number"
            variant="standard"
            value={contact || ""}
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
              update the detail
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

export default Readwarehouse;
