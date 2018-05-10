import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import './App.css';

import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';



import Home from "./Containers/Home"
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";





import { MuiThemeProvider } from 'material-ui/styles';
import defaultTheme from "./assets/styles/theme";











const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    // marginRight: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    borderLeft: "1px solid red",
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <Button color="primary" variant="raised">Login</Button>
        </div>
        Cart
        <Divider />
        Registry
        {/* <List>{mailFolderListItems}</List> */}
        <Divider />
        Shopping List
        {/* <List>{otherMailFolderListItems}</List> */}
        <Button variant="raised" color="primary">Checkout</Button>
      </div>
    );

    return (
      <MuiThemeProvider theme={defaultTheme}>
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                  Store
              </Typography>
              <Tabs
                // value={value}
                // onChange={this.handleChange}
              >
                <Tab label="New" />
                <Tab label="Products" />
                <Tab label="Rooms" href="#basic-tabs" />
                <Tab label="Inspiration" />
              </Tabs>
            </Toolbar>
          </AppBar>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Home />
            <Footer />
          </main>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// export default withStyles(styles, { withTheme: true })(App);
export default withStyles(styles, { withTheme: true })(App);























// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import Footer from "./components/Footer";
// import Header from "./components/Header";

// import Home from "./pages/Home";
// import Teams from "./pages/Teams";
// import Post from "./pages/Post";

// import { MuiThemeProvider } from 'material-ui/styles';
// import defaultTheme from "./assets/styles/theme";

// import { Route } from 'react-router-dom';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <MuiThemeProvider theme={defaultTheme}>
//           <Header />

//           <Route exact path="/" component={ Home } />
//           <Route path="/teams" component={ Teams } />
//           <Route path="/post" component={ Post } />

//           <Footer />
//         </MuiThemeProvider>
//       </div>
//     );
//   }
// }

// export default App;
