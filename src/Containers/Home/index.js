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

import ProductCard from '../../Components/ProductCard';

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

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* <Grid container>
        <Grid item>
          <Card>
            <CardContent>akldjflakdfj</CardContent>
          </Card>
        </Grid>
      </Grid> */}

      <Grid container>
        <Grid item xs={12}>
          NewsCenter
          <hr />
          <Card>
            <img src="https://source.unsplash.com/random/100x100" alt="something" />
            <CardContent>
              Bedroom
            </CardContent>
          </Card>
          <hr />
        </Grid>
        <Grid item xs={12} sm={6}>
          HJÄRTELIG
          Complete your perfect set

          lakdjsfldsakfjals kjfsladkjf sdalkjsad lkdjas flkdsjafk lasdjklfjasd lfjasdf lkasddjfkl ajsdlkj asdflkjsad

          Collection Video
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://source.unsplash.com/random/400x300" alt="something" />
        </Grid>
        <Grid item xs={12}>
          <Grid container>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </Grid>
        </Grid>
      </Grid>

      {/* <img src="https://source.unsplash.com/random/1920x1080" alt="something" /> */}
      
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);










// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import MobileStepper from 'material-ui/MobileStepper';
// import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';

// const tutorialSteps = [
//   {
//     label: 'How to be happy :)',
//     imgPath: '/static/images/steppers/1-happy.jpg',
//   },
//   {
//     label: '1. Work with something that you like, like…',
//     imgPath: '/static/images/steppers/2-work.jpg',
//   },
//   {
//     label: '2. Keep your friends close to you and hangout with them',
//     imgPath: '/static/images/steppers/3-friends.jpg',
//   },
//   {
//     label: '3. Travel everytime that you have a chance',
//     imgPath: '/static/images/steppers/4-travel.jpg',
//   },
//   {
//     label: '4. And contribute to Material-UI :D',
//     imgPath: '/static/images/steppers/5-mui.png',
//   },
// ];

// const styles = theme => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing.unit * 4,
//     marginBottom: 20,
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%',
//   },
// });

// class SwipeableTextMobileStepper extends React.Component {
//   state = {
//     activeStep: 0,
//   };

//   handleNext = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep + 1,
//     }));
//   };

//   handleBack = () => {
//     this.setState(prevState => ({
//       activeStep: prevState.activeStep - 1,
//     }));
//   };

//   handleStepChange = activeStep => {
//     this.setState({ activeStep });
//   };

//   render() {
//     const { classes, theme } = this.props;
//     const { activeStep } = this.state;

//     const maxSteps = tutorialSteps.length;

//     return (
//       <div className={classes.root}>
//         <Paper square elevation={0} className={classes.header}>
//           <Typography>{tutorialSteps[activeStep].label}</Typography>
//         </Paper>
//         <SwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={this.state.activeStep}
//           onChangeIndex={this.handleStepChange}
//           enableMouseEvents
//         >
//           {tutorialSteps.map(step => (
//             <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
//           ))}
//         </SwipeableViews>
//         <MobileStepper
//           variant="text"
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//           className={classes.mobileStepper}
//           nextButton={
//             <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
//               Next
//               {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//             </Button>
//           }
//           backButton={
//             <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
//               {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//               Back
//             </Button>
//           }
//         />
//       </div>
//     );
//   }
// }

// SwipeableTextMobileStepper.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);
















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
