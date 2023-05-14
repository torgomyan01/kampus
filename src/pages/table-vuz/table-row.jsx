import React from "react";
import "./table-vuz.css";
import { RandomKey } from "../../utils/helpers";
import TableCell from "@mui/material/TableCell";
import { Checkbox, Chip } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import TableRow from "@mui/material/TableRow";

/**
 *
 * @type {{inputProps: {'aria-label': string}}}
 */
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TableRowVuz({ item }) {
  return (
    <TableRow
      key={RandomKey()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Checkbox {...label} className="def-checkbox" />
      </TableCell>
      <TableCell align="left">
        <span className="table-text">{item.name}</span>
      </TableCell>
      <TableCell align="center">
        <Chip
          label={item.status}
          color={item.status}
          variant="outlined"
          className="status-block"
        />
      </TableCell>
      <TableCell align="center">
        <Chip label={item.count} variant="outlined" className="status-block" />
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

export default TableRowVuz;
