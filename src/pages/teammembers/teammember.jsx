import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Button, IconButton, TablePagination, Chip
} from '@mui/material';

import './teammembers.css'; 
import Edit from '../../components/icon/edit';
import Performance from '../../components/icon/speedometer';


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
            <TableCell align="left" style={{ marginLeft:'10px',width: '15%' }}> {/* Even width for all columns */}
              Name
            </TableCell>
            <TableCell align="left" style={{ width: '15%' }}>
              Designation
            </TableCell>
            <TableCell align="left" style={{ width: '15%' }}>
              Department
            </TableCell>
            <TableCell align="left" style={{ width: '11%' }}>
              Signals
            </TableCell>
            <TableCell align="center" style={{ width: '15%' }}>
              Overall Performance
            </TableCell>
            <TableCell align="left" style={{ width: '8%' }}>
              Report
            </TableCell>
            <TableCell align="center" style={{ width: '8%' }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody sx={{ marginBottom:'100px'}}>
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
              <TableCell className="table-cell-no-list" sx={{ padding: 0 }}>
  <div style={{ display: 'flex', gap: '4px' }}>
    {row.signals.map((signal, i) => (
      <div
        key={i}
        className={`signal-chip ${signal === 'C' ? 'green' : signal === 'E' ? 'yellow' : signal === 'T' ? 'orange' : signal === 'D' ? 'lightgreen' : 'red'}`}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        {signal}
      </div>
    ))}
  </div>
</TableCell>


              <TableCell sx={{paddingLeft:'120px',paddingBottom:'40px'}}>
            
              <div style={{ transform: 'scale(0.2)', width: 0, height: 0 }}>
  <Performance />
</div>




            
              </TableCell>
              <TableCell>
                <Avatar alt={row.report} src={`/static/images/report/${index + 1}.jpg`} />
              </TableCell>
              <TableCell align="center">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'15px'}}>
                <Button variant="contained"  sx={{width:'150px',backgroundColor:'#49C792'}}>Add Feedback</Button>
                <IconButton color="primary">
             
                  <Edit />
                </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pagination-container">
      <TablePagination
      sx={{marginTop:'440px'}}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    </TableContainer>
  );
}

export default CustomTable;
