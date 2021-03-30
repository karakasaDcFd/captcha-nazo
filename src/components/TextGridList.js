import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: '100%',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export default function TextGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={'auto'} cols={1}>
        <GridListTile key={'start-text'} cols={1}>
          <img className={classes.img} src={`${process.env.PUBLIC_URL}/images/start.png`} alt={0} />
        </GridListTile>
        <GridListTile key={'start-form'} cols={1}>
          <TextField id="standard-basic" label="Input" onChange={(e) => props.handleChange(e.target.value)} />
        </GridListTile>
      </GridList>
    </div>
  );
}