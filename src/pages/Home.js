import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUsers, loadUsers } from "../redux/Actions";
import { Button, ButtonGroup } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Home = () => {
  let dispatch = useDispatch();

  let navigate = useNavigate();
  //navigtae instead of history
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
    console.log("dataaa", users);
  }, []);
  //   const classes = useStyles();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to remove the warehouse?")) {
      dispatch(deleteUsers(id));
      dispatch(loadUsers());
    }
  };
  return (
    <div className="home__body">
      <div className="home__heading">
        <h1>Warehouse Data Table</h1>
        <p>Add new Warehouse Details</p>
        <Button
          className="home__addButton"
          variant="contained"
          onClick={() => navigate("/addWarehouse")}
          // navigate.push
        >
          Add Your Warehouse
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Warehouse</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Space Available</StyledTableCell>
              <StyledTableCell align="center">Type</StyledTableCell>
              <StyledTableCell align="center">
                More Info and Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.city}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.space_available}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.type}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteOutlinedIcon />
                      </Button>
                      <Button
                        onClick={() => navigate(`/readWarehouse/${user.id}`)}
                      >
                        KNOW MORE AND EDIT
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
