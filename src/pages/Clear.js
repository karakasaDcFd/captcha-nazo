import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import TweetButton from '../components/TweetButton.js'
import Footer from '../components/Footer.js'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Clear() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          認証成功
        </Typography>
        <Typography variant="h5" align="center" component="p">
          あなたは人間であることを証明しました
        </Typography>
      </Container>
      <Container maxWidth="sm" align="center">
        <Typography variant="subtitle1" align="center" component="p">
          クリアツイートはこちらからどうぞ
        </Typography>
        <TweetButton />
      </Container>
      <Footer />
    </React.Fragment>
  )
}