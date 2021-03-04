import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withRouter } from "react-router-dom";

import TextGridList from './TextGridList.js';
import ImageGridList from './ImageGridList.js';
import TransitionsModal from './TransitionsModal.js'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: 10,
    color: '#FFFFFF',
    backgroundColor: '#2196f3',
  },
}));

function MultiCaptcha(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 5;
  const [textValue, setTextValue] = useState("");
  const [isChecked, setIsChecked] = useState(Array(9).fill(false));
  const [open, setOpen] = React.useState(false);

  const handleClickTile = i => {
    const newIsChecked = isChecked.slice();
    newIsChecked[i] = !newIsChecked[i];
    setIsChecked(newIsChecked);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (textValue === props.answers[activeStep]) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTextValue("");
      } else {
        setOpen(true);
      }
    } else if (JSON.stringify(isChecked) == JSON.stringify(props.answers[activeStep])) {
      if (activeStep === maxSteps - 1) {
        props.history.push('/clear');
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setIsChecked(Array(9).fill(false));
      }
    } else {
      setOpen(true);
    }
  };

  const handleChange = value => {
    setTextValue(value);
  };

  const handleClose = () => {
    setOpen(false);
    props.history.push('/');
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" component="main">
        <Box mt={5} className={classes.header}>
          <Typography variant="h3">
            {props.texts[activeStep].main}
          </Typography>
          <Typography variant="subtitle1">
            {props.texts[activeStep].sub}
          </Typography>
        </Box>
        {(activeStep === 0) && <TextGridList handleChange={handleChange} />}
        {(activeStep !== 0) && <ImageGridList
          question={props.questions[activeStep]}
          extension={props.extensions[activeStep]}
          isChecked={isChecked}
          handleClickTile={handleClickTile}
        />}
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps}>
              Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
        />
      </Container>
      <TransitionsModal
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default withRouter(MultiCaptcha);