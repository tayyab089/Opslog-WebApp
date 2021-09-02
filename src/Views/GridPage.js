import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const GridPage = () => {
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
  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 90,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'kks',
      headerName: 'KKS',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    { field: 'description', headerName: 'DESCRIPTION', width: 300 },
    {
      field: 'date',
      headerName: 'DATE',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'time',
      headerName: 'TIME',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'value',
      headerName: 'VALUE',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'inactive',
      headerName: 'INACTIVE',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    { field: 'remarks', headerName: 'REMARKS', width: 400 },
  ];

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://dataloggingkeapp.herokuapp.com/get_input_data/', options)
      .then((resp) => resp.json())
      .then((response) => {
        const responseWithID = response.map((item, index) => {
          return { id: index + 1, ...item };
        });
        console.log(responseWithID);
        setRows(responseWithID);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isloading ? (
        <div className="progress">
          <CircularProgress />
        </div>
      ) : (
        <div style={{ height: '92vh', width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridPage;
