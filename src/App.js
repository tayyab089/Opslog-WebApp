import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DataPage from './Views/DataPage';
import HomePage from './Views/HomePage';

import './App.css';

import OpslogLogo from './assets/images/Opslog_logo.png';

const theme = createTheme({
  palette: {
    primary: { main: '#1e784f' },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <nav>
            <AppBar position="static">
              <Toolbar variant="dense">
                <img src={OpslogLogo} className="Opslog-logo" />
                <Typography variant="h6" className={classes.title}>
                  OpsLog
                </Typography>
                <div className="app-bar-links-container">
                  <Typography variant="subtitle1" className={classes.title}>
                    <Link
                      to="/"
                      style={{ textDecoration: 'inherit', color: 'inherit' }}
                    >
                      Home
                    </Link>
                  </Typography>
                  <Typography variant="subtitle1" className={classes.title}>
                    <Link
                      to="/data"
                      style={{ textDecoration: 'inherit', color: 'inherit' }}
                    >
                      Data
                    </Link>
                  </Typography>
                  <Typography variant="subtitle1" className={classes.title}>
                    <Link
                      to="/data"
                      style={{ textDecoration: 'inherit', color: 'inherit' }}
                    >
                      Report
                    </Link>
                  </Typography>
                </div>
                {/* <Button color="inherit">Login</Button> */}
              </Toolbar>
            </AppBar>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/data">
              <DataPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
