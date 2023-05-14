import React from "react";
import "./ratingusers.css";
import MainTemplate from "../../features/main-template/main-template";
import Fade from "react-reveal/Fade";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox, TableHead } from "@mui/material";
import RatingUsersRowsTable from "./ratingusers-rows-table";
import { RandomKey } from "../../utils/helpers";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

/**
 * This page for Rating users
 * @returns {JSX.Element}
 * @constructor
 */
function RatingUsers() {
  return (
    <MainTemplate>
      <Fade>
        <div className="def-content mb-5">
          <h3 className="content-title mb-5">Рейтинг участников</h3>
          <TableContainer component={Paper} className="shadow-none">
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <Checkbox {...label} className="def-checkbox" />
                  </TableCell>
                  <TableCell>
                    <div className="head mt-3">
                      <b>Студент</b>
                      <input type="text" placeholder="Поиск" />
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <b>Рейтинг</b>
                  </TableCell>
                  <TableCell align="center" className="flex-wrap">
                    <div className="head2 mt-4">
                      <b>Сортировка</b>
                      <span className="">Все</span>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <b>Действия</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: 10 }).map(() => (
                  <RatingUsersRowsTable key={RandomKey()} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Fade>
    </MainTemplate>
  );
}

export default RatingUsers;
