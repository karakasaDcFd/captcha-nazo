import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import HintAccordion from '../components/HintAccordion.js';
import Footer from '../components/Footer.js'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 6),
  },
  imgbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

export default function Hint() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.root}>
        <HintAccordion
          head="5問目で画像が表示されない"
          body={<Typography>5問目の画像が全てNO IMAGEとなっているのは仕様です。</Typography>}
        />
        <HintAccordion
          head="5問目ヒント1"
          body={<img className={classes.img} src={`${process.env.PUBLIC_URL}/images/hint1.png`} alt="hint1" />}
          style={classes.imgbox}
        />
        <HintAccordion
          head="5問目ヒント2"
          body={<img className={classes.img} src={`${process.env.PUBLIC_URL}/images/hint2.png`} alt="hint2" />}
          style={classes.imgbox}
        />
        <HintAccordion
          head="5問目ヒント3"
          body={<img className={classes.img} src={`${process.env.PUBLIC_URL}/images/hint3.png`} alt="hint3" />}
          style={classes.imgbox}
        />
        <HintAccordion
          head="5問目ヒント4"
          body={<Typography>画像選択の問題自体は毎回ランダムに選ばれていますが、画像の配置は変わっていません。</Typography>}
        />
        <HintAccordion
          head="5問目ヒント5"
          body={<Typography>この謎はスマートフォン推奨であるということが重要です。</Typography>}
        />
        <HintAccordion
          head="5問目ヒント6"
          body={<Typography>多くの方は最後に必要な情報をもう何度も目にしているでしょう。例えばそう、1問目で……。</Typography>}
        />
      </Container>
      <Container maxWidth="sm" component="main">
        <Typography variant="subtitle1" align="center" component="p">
          個別に聞きたいことのある方は
          <a href="https://twitter.com/KarakasaDcFd" target="_blank">
            制作者のTwitter
          </a>
          のDMまでどうぞ
        </Typography>
      </Container>
      <Footer />
    </React.Fragment>
  )
}