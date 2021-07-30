import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const rows = [
  {
    index: 1,
    kks: '10LCB11CT307',
    date: '2021-07-22 13:49:35',
    value: 78.0,
    inactive: 'True',
    remarks: 'All Okay',
  },
  {
    index: 2,
    kks: '10LCB11CT307',
    date: '2021-07-22 13:49:35',
    value: 78.0,
    inactive: 'True',
    remarks: 'All Okay',
  },
  {
    index: 3,
    kks: '10LCB11CT307',
    date: '2021-07-22 13:49:35',
    value: 78.0,
    inactive: 'True',
    remarks: 'All Okay',
  },
];

const DataPage = () => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      method: 'GET',
      //mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('https://dataloggingapp.herokuapp.com/get_input_data', options)
      .then((resp) => resp.json())
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   fetch('https://dataloggingapp.herokuapp.com/get_input_data', options)
  //     .then((resp) => console.log(resp.json()))
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div style={{ margin: 5 }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">#</StyledTableCell>
              <StyledTableCell align="left">KKS</StyledTableCell>
              <StyledTableCell align="left">DATE</StyledTableCell>
              <StyledTableCell align="left">VALUE</StyledTableCell>
              <StyledTableCell align="left">INACTIVE</StyledTableCell>
              <StyledTableCell align="left">REMARKS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.index}>
                <StyledTableCell align="left">{row.index}</StyledTableCell>
                <StyledTableCell align="left">{row.kks}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>
                <StyledTableCell align="left">{row.value}</StyledTableCell>
                <StyledTableCell align="left">{row.inactive}</StyledTableCell>
                <StyledTableCell align="left">{row.remarks}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataPage;
