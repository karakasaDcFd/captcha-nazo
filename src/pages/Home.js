import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import Footer from '../components/Footer.js'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          CAPTCHA
        </Typography>
      </Container>
      <Container maxWidth="sm" component="main">
        <Typography component="h2" color="textPrimary" gutterBottom>
          注意事項
        </Typography>
        <Box>
          <ol>
            <li>
              推奨環境はスマートフォン、ブラウザは最新版のGoogleChromeです。<br/>
              PCは非推奨です。
            </li>
            <li>
              ソースコードの閲覧を禁止します。
            </li>
            <li>
              URLをいじる必要はありません。
            </li>
          </ol>
        </Box>
        <Box mt={5} textAlign='center'>
          <Button variant="contained" color="primary" component={Link} to="/main">
            私はロボットではありません
          </Button>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  )
}