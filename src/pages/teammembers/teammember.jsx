import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Button, IconButton, TablePagination, Chip
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import './teammembers.css'; // Import your CSS

const data = [
  { name: 'George Fernandes', designation: 'Visual Designer', department: 'Design', signals: ['C', 'E', 'T', 'D', 'U'], overallPerformance: 60, report: 'John Doe' },
  { name: 'Emilie Clarke', designation: 'Visual Designer', department: 'Design', signals: ['C', 'E', 'T', 'D', 'U'], overallPerformance: 40, report: 'Jane Smith' },
  { name: 'Jason Dominic', designation: 'Full Stack Developer', department: 'Engineering', signals: ['C', 'E', 'T', 'D', 'U'], overallPerformance: 90, report: 'Mark Lee' },
  { name: 'Bruce Banner', designation: 'Front End Developer', department: 'Engineering', signals: ['C', 'E', 'T', 'D', 'U'], overallPerformance: 20, report: 'Alice Brown' },
];

function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Signals</TableCell>
            <TableCell>Overall Performance</TableCell>
            <TableCell>Report</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="table-name-cell">
                  <Avatar alt={row.name} src={`/static/images/avatar/${index + 1}.jpg`} />
                  {row.name}
                </div>
              </TableCell>
              <TableCell>{row.designation}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>
                {row.signals.map((signal, i) => (
                  <Chip
                    key={i}
                    label={signal}
                    className={`signal-chip ${signal === 'C' ? 'green' : signal === 'E' ? 'yellow' : signal === 'T' ? 'orange' : signal === 'D' ? 'lightgreen' : 'red'}`}
                  />
                ))}
              </TableCell>
              <TableCell>
                <div className="performance-meter" style={{ '--performance': row.overallPerformance * 1.8 }}>
                  <div className="semi-circle"></div>
                  <div className="performance-meter-fill"></div>
                </div>
              </TableCell>
              <TableCell>
                <Avatar alt={row.report} src={`/static/images/report/${index + 1}.jpg`} />
              </TableCell>
              <TableCell>
                <Button variant="contained" color="success">Add Feedback</Button>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
      sx={{marginTop:'300px'}}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default CustomTable;
