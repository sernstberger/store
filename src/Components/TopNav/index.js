import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function TopNav(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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
                  <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);





















// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Paper from 'material-ui/Paper';
// import Tabs, { Tab } from 'material-ui/Tabs';
//
// const styles = {
//   root: {
//     flexGrow: 1,
//   },
// };
//
// class CenteredTabs extends React.Component {
//   state = {
//     value: 0,
//   };
//
//   handleChange = (event, value) => {
//     this.setState({ value });
//   };
//
//   render() {
//     const { classes } = this.props;
//
//     return (
//       <Paper className={classes.root}>
//         <Tabs
//           value={this.state.value}
//           onChange={this.handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           centered
//         >
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//         </Tabs>
//       </Paper>
//     );
//   }
// }
//
// CenteredTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(CenteredTabs);
