import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
  },
  progress: {
    display: 'flex',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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

//Component START=======================================================================================
const ReportPage = () => {
  const classes = useStyles();
  const [isloading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([
    {
      date: '2021-07-20',
      shift: 'Night Shift',
      kks_reading_percentage: 52.76,
      max_value_breached: 28,
      min_value_breached: 19,
      kks_inactive_count: 186,
    },
  ]);

  //Fetching Data--------------------------------------------------START
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('http://dataloggingapp.herokuapp.com/get_report_data/', options)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        setRows(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  //Fetching Data-----------------------------------------------------END
  return (
    <div style={{ marginTop: 50 }}>
      <Container>
        <Typography variant="h3"> Data Log Summary</Typography>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography variant="button" className={classes.text}>
                Morning Shift :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="button">0800 Hrs to 2000 Hrs</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="button" className={classes.text}>
                Night Shift :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="button">2000 Hrs to 0800 Hrs</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="button" className={classes.text}>
                Data Recorded % :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="button">
                Total Non Null Readings X 100 / Total KKS in Database - Total
                inactive KKS in Database
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="button" className={classes.text}>
                Total KKS :
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="button">620</Typography>
            </Grid>
          </Grid>
        </div>
        {isloading ? (
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">DATE</StyledTableCell>
                  <StyledTableCell align="left">SHIFT</StyledTableCell>
                  <StyledTableCell align="center">
                    DATA RECORDED %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    MAX VALUE BREACHED
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    MIN VALUE BREACHED
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    KKS INACTIVE COUNT
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.index}>
                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                    <StyledTableCell align="left">{row.shift}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.kks_reading_percentage}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.max_value_breached}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.min_value_breached}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.kks_inactive_count}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
};

export default ReportPage;
