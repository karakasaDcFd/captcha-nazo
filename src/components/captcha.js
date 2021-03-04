import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Captcha() {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item alignContent="center" xs={4}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src="images/test.png" />
        </ButtonBase>
      </Grid>
      <Grid item xs={4}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src="images/clear.jpg" />
        </ButtonBase>
      </Grid>
      <Grid item xs={4}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src="images/test.png" />
        </ButtonBase>
      </Grid>
    </Grid>
  );
}