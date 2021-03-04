import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  image: {
    position: 'relative',
  },
  img: {
    maxWidth: '100%',
  },
  img2: {
    maxWidth: '100%',
    transform: 'scale(0.8, 0.8)',
  },
  check: {
    maxWidth: '100%',
    transform: 'scale(0.2, 0.2)',
    position: 'absolute',
    top: '-37%',
    left: '-37%',
  }
}));

export default function ImageGridList(props) {
  const classes = useStyles();

  const items = [];
  for (let i = 0; i < 9; i++) {
    if (props.isChecked[i]) {
      items.push(
        <GridListTile key={props.question + i} cols={1}>
          <ButtonBase className={classes.image} onClick={() => props.handleClickTile(i)}>
            <img className={classes.img2} src={'images/' + props.question + '/' + i + props.extension} alt={i} />
            <img className={classes.check} src={'images/check.png'} alt={'check'} />
          </ButtonBase>      
        </GridListTile>
      )
    } else {
      items.push(
        <GridListTile key={props.question + i} cols={1}>
          <ButtonBase onClick={() => props.handleClickTile(i)}>
            <img className={classes.img} src={'images/' + props.question + '/' + i + props.extension} alt={i} />
          </ButtonBase>
        </GridListTile>
      )
    }
  }

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={'auto'} cols={3}>
        {items}
      </GridList>
    </div>
  );
}