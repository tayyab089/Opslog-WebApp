import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  progress: {
    display: 'flex',
    width: '100%',
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '92vh',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 15,
    fontWeight: 'bold',
    borderBottomColor: 'black',
  },
  body: {
    fontSize: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DataPage = () => {
  const classes = useStyles();
  const [isloading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([
    {
      '#': 1,
      kks: '10LCB11CT307',
      description: 'Helloowww',
      date: '2021-07-22 13:49:35',
      value: 78.0,
      inactive: 'True',
      remarks: 'All Okay',
    },
  ]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://dataloggingkeapp.herokuapp.com/get_input_data/', options)
      .then((resp) => resp.json())
      .then((response) => {
        setRows(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isloading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">#</StyledTableCell>
                  <StyledTableCell align="left">KKS</StyledTableCell>
                  <StyledTableCell align="left">DESCRIPTION</StyledTableCell>
                  <StyledTableCell align="left">DATE</StyledTableCell>
                  {/* <StyledTableCell align="left">TIME</StyledTableCell> */}
                  <StyledTableCell align="left">VALUE</StyledTableCell>
                  <StyledTableCell align="left">INACTIVE</StyledTableCell>
                  <StyledTableCell align="left">REMARKS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={row['#']}>
                    <StyledTableCell align="left">{index + 1}</StyledTableCell>
                    <StyledTableCell align="left">{row.kks}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                    {/* <StyledTableCell align="left">{row.time}</StyledTableCell> */}
                    <StyledTableCell align="left">{row.value}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.inactive}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.remarks}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
};

export default DataPage;
