import React from "react";
import { RandomKey } from "../../utils/helpers";
import TableCell from "@mui/material/TableCell";
import { Checkbox, Chip } from "@mui/material";
import avatar from "../../assets/images/image.png";
import { Dropdown } from "react-bootstrap";
import TableRow from "@mui/material/TableRow";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RatingUsersRowsTable() {
  return (
    <TableRow
      key={RandomKey()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Checkbox {...label} className="def-checkbox" />
      </TableCell>
      <TableCell align="left">
        <div className="d-flex justify-content-start align-items-center TitleName">
          <img src={avatar} alt="user avatar" className="rounded-circle me-2" />
          Иванов Иван Иванович
        </div>
      </TableCell>
      <TableCell align="center">
        <Chip label="999" variant="outlined" className="status-block" />
      </TableCell>
      <TableCell align="center">
        <span className="Title2">Олимпиада</span>{" "}
      </TableCell>
      <TableCell align="right">
        <Dropdown>
          <Dropdown.Toggle variant="outline-light" className="nav-dropdown">
            <i className="fa-solid fa-ellipsis-vertical c-black fs-5" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Изменить</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Удалить</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </TableCell>
    </TableRow>
  );
}

export default RatingUsersRowsTable;
