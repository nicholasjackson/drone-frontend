import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';

import IconBk from 'material-ui-icons/ArrowUpward';
import IconFwd from 'material-ui-icons/ArrowDownward';
import IconLeft from 'material-ui-icons/ArrowBack';
import IconRight from 'material-ui-icons/ArrowForward';

import IconUp from 'material-ui-icons/ExpandLess';
import IconDn from 'material-ui-icons/ExpandMore';
import RotateLeft from 'material-ui-icons/SubdirectoryArrowLeft';
import RotateRight from 'material-ui-icons/SubdirectoryArrowRight';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
  },
  griditem: {
    textAlign: 'center',
  },
});

class FullWidthGrid extends React.Component{
  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  };


  render() {
   const { classes } = this.props;
   const { alignItems, direction, justify } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <Grid container className={classes.grid}
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={12} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Up">
                <IconUp></IconUp>
              </IconButton>
            </Grid>
          </Grid>

          <Grid container className={classes.grid}
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={6} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Left">
                <RotateLeft></RotateLeft>
              </IconButton>
            </Grid>
            <Grid item xs={6} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Right">
                <RotateRight></RotateRight>
              </IconButton>
            </Grid>
          </Grid>

          <Grid container 
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={12} className={classes.griditem}> 
              <IconButton aria-label="Down">
                <IconDn></IconDn>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container className={classes.grid}
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={12} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Up">
                <IconBk></IconBk>
              </IconButton>
            </Grid>
          </Grid>

          <Grid container className={classes.grid}
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={6} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Left">
                <IconLeft></IconLeft>
              </IconButton>
            </Grid>
            <Grid item xs={6} className={classes.griditem}>
              <IconButton className={classes.button} aria-label="Right">
                <IconRight className={classes.button}></IconRight>
              </IconButton>
            </Grid>
          </Grid>

          <Grid container 
                alignItems={alignItems}
                direction={direction}
                justify={justify} 
                spacing={2}>
            <Grid item xs={12} className={classes.griditem}> 
              <IconButton aria-label="Down">
                <IconFwd></IconFwd>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
