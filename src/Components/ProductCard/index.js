// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Button from 'material-ui/Button';
// import Tabs, { Tab } from 'material-ui/Tabs';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardActions, CardMedia} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import Tabs, { Tab } from 'material-ui/Tabs';
import Price from "../Price";

// import Grow from 'material-ui/transitions/Grow';
import { Typography } from 'material-ui';

const styles = {
    root: {
      // flexGrow: 1,
      boxShadow: "0 0 1px 0px rgba(0, 0, 0, 0.1)",
      paddingBottom: 50,
      transition: "250ms box-shadow",

      "&:hover": {
        // boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
        boxShadow: "0px 1px 35px 0px rgba(0, 0, 0, 0.1),0px 2px 2px 0px rgba(0, 0, 0, 0.04),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
        zIndex: 1,
      },
    },
    media: {
      maxWidth: "100%",
    },
    
    // menuButton: {
    //     marginLeft: -12,
    //     marginRight: 20,
    // },
};

function ProductCard(props) {
    const { classes } = props;
    return (
      <Grid item xs={3}>
        {/* <Grow in> */}
          <Card elevation={0} className={classes.root} style={{position: "relative"}}>
            {/* <img src="/images/0587179_PE672431_S3.JPG" alt="alkdjf" /> */}
            <CardMedia style={{textAlign: "center"}}>
              <img src="https://source.unsplash.com/random/300x200" alt="alkdjf" className={classes.media} />
            </CardMedia>
            <CardContent>
              <Typography variant="body1" style={{color: "#555"}}>CollectionName</Typography>
              <Typography variant="headline">ProductName</Typography>
              <Price />
            </CardContent>
            <CardActions style={{position: "absolute", bottom: -30, right: 0}}>
              <Button variant="fab" color="primary">Registry</Button>
              {/* <Button variant="fab" color="primary"><MenuIcon />Shopping List</Button> */}
              <Button variant="fab" color="primary">
                <ShoppingBasketIcon />
              </Button>

              {/* <IconButton variant="fab" color="primary">
                <MenuIcon />
              </IconButton> */}

              <Button variant="raised" color="primary">Add to Cart</Button>
            </CardActions>
          </Card>
        {/* </Grow> */}
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
