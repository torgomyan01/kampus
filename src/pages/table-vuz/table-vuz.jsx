import React from "react";
import "./table-vuz.css";
import MainTemplate from "../../features/main-template/main-template";
import Fade from "react-reveal/Fade";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { RandomKey } from "../../utils/helpers";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TableRowVuz from "./table-row";

// error
// info
// success
// warning

/**
 * Data for table
 * @type {[{name: string, count: number, status: string}, {name: string, count: number, status: string}, {name: string, count: number, status: string}, {name: string, count: number, status: string}, {name: string, count: number, status: string}, null]}
 */
const data = [
  {
    name: "УрФУ",
    status: "error",
    count: 9177,
  },
  {
    name: "УрГЭУ-СИНХ",
    status: "info",
    count: 3064,
  },
  {
    name: "РГППУ",
    status: "success",
    count: 3064,
  },
  {
    name: "УРГПУ",
    status: "warning",
    count: 3128,
  },
  {
    name: "УрГУПС",
    status: "info",
    count: 9892,
  },
  {
    name: "УрГЮУ",
    status: "error",
    count: 9011,
  },
];

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function TableVuz() {
  /**
   * Hook for pagination
   */
  const [page, setPage] = React.useState(10);

  /**
   * Change pagination count
   * @param event
   */
  const handleChange = (event) => {
    setPage(event.target.value);
  };

  return (
    <MainTemplate>
      <Fade>
        <div className="def-content">
          <h3 className="content-title mb-5">Список ВУЗов</h3>
          <hr />

          <TableContainer component={Paper} className="shadow-none">
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableBody>
                {data.map((item) => (
                  <TableRowVuz key={RandomKey()} item={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/*PAGINATION BLOCK*/}
          <div className="d-flex justify-content-end justify-content-sm-between align-items-end align-items-sm-center flex-column flex-sm-row mt-5">
            <Stack spacing={2}>
              <Pagination count={2} variant="outlined" shape="rounded" />
            </Stack>
            <div className="table-page-change mt-4 mt-sm-0">
              Кол-во строк
              <FormControl className="ms-2">
                <InputLabel>Page</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={page}
                  label="Page"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/*PAGINATION BLOCK*/}
        </div>
      </Fade>
    </MainTemplate>
  );
}

export default TableVuz;
