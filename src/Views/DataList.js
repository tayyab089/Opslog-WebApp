import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Typography, Divider, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Table from '@material-ui/core/Table';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

const DataList = () => {
  let { section } = useParams();
  const classes = useStyles();
  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);

  const [areaList, setAreaList] = useState({
    'Main Turbine': [
      {
        id: 1,
        kks: '10KBH10AA001',
        description: 'LOAD',
        unit: 'MW',
        value1: 100,
        value2: 150,
        value3: 80,
      },
      {
        id: 2,
        kks: '10KBH10AA001',
        description: 'LOAD',
        unit: 'MW',
        value1: 100,
        value2: 150,
        value3: 80,
      },
      {
        id: 2,
        kks: '10KBH10AA001',
        description: 'LOAD',
        unit: 'MW',
        value1: 100,
        value2: 150,
        value3: 80,
      },
    ],
    'Turbine Oil System': [],
    'Turbine TSI': [],
    'Circulating Water System': [],
    'Main Generator': [],
  });

  const [sectionList, setSectionList] = useState([
    { id: 1, area: 'Main Turbine' },
    { id: 2, area: 'Turbine Oil System' },
    { id: 3, area: 'Turbine TSI' },
    { id: 4, area: 'Circulating Water System' },
    { id: 5, area: 'Main Generator' },
  ]);

  // useEffect(() => {
  //   const temp = [];
  //   const len = Object.keys(areaList).length;
  //   for (let i = 0; i < len; i++) {
  //     temp.push(false);
  //   }
  //   setOpen(temp);
  // }, []);

  const handleClick = (index) => {
    // const temp = open;
    // temp[index] = !temp[index];
    // setOpen(temp);
    // console.log(open[0]);
    eval(`setOpen${index}`)(!eval(`open${index}`));
  };

  return (
    <div>
      <Paper className="list-container">
        <Typography>Section: {section}</Typography>
        {sectionList.map((item, index) => {
          return (
            <div key={index}>
              <Button className="list-item" onClick={() => handleClick(index)}>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{ flexBasis: '2.5%' }}
                >
                  {item.id} :
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{ flexBasis: '96%', textAlign: 'left' }}
                >
                  {item.area}
                </Typography>
                <ArrowForwardIosIcon />
              </Button>
              {eval(`open${index}`) && (
                <div className="sublist-container">
                  {/* {areaList[item.area].map((item) => {
                    return (
                      <div key={item.id} className="sublist-item">
                        <text>{item.id}</text>
                        <text>{item.kks}</text>
                        <text>{item.description}</text>
                        <text>{item.unit}</text>
                      </div>
                    );
                  })} */}
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
                          <StyledTableCell align="left">
                            DESCRIPTION
                          </StyledTableCell>
                          <StyledTableCell align="left">UNIT</StyledTableCell>
                          {/* <StyledTableCell align="left">TIME</StyledTableCell> */}
                          <StyledTableCell align="left">VALUE</StyledTableCell>
                          <StyledTableCell align="left">VALUE</StyledTableCell>
                          <StyledTableCell align="left">VALUE</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {areaList[item.area].map((row, index) => (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell align="left">
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.kks}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.description}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.unit}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.value1}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.value2}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {row.value3}
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
              <Divider />
            </div>
          );
        })}
      </Paper>
    </div>
  );
};

export default DataList;
