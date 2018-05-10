// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Tabs, { Tab } from 'material-ui/Tabs';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Tabs, { Tab } from 'material-ui/Tabs';
import Price from "../Price";

const styles = {
    // root: {
    //     flexGrow: 1,
    // },
    // price: {
    //   // color: "green",
    //   display: "inline-block",
    //   position: "relative",
    //   zIndex: 1,

    //   "&:after": {
    //     backgroundColor: "#fdf3ca",
    //     bottom: -5,
    //     content: '""',
    //     height: 20,
    //     position: "absolute",
    //     right: "-5%",
    //     width: "110%",
    //     zIndex: -1,
    //   },
    // },
    // menuButton: {
    //     marginLeft: -12,
    //     marginRight: 20,
    // },
};

function ProductCard(props) {
    const { classes } = props;
    return (
      <Grid item xs={3}>
        <Card>
          {/* <img src="/images/0587179_PE672431_S3.JPG" alt="alkdjf" /> */}
          <img src="https://source.unsplash.com/random/300x200" alt="alkdjf" />
          <CardContent>
            <h1>ProductName</h1>
            <h3 style={{color: "#555"}}>CollectionName</h3>
            <Price />
            <Button variant="fab" color="primary">Registry</Button>
            <Button variant="fab" color="primary">Shopping List</Button>
            <Button variant="raised" color="primary">Add to Cart</Button>
          </CardContent>
        </Card>
      </Grid>
    );
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);





















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
