import React from 'react';

import tileData from '../components/tileData.js';
import MultiCaptcha from '../components/MultiCaptcha.js';
import Footer from '../components/Footer.js'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIndex() {
  let index = [];
  for (let i = 0; i < tileData.length; i++) {
    index.push(getRandomInt(tileData[i].length));
  }
  return index;
}

function generateQuestions(index) {
  let questions = [];
  for (let i = 0; i < index.length; i++) {
    questions.push(tileData[i][index[i]].name);
  }
  return questions;
}

function generateExtensions(index) {
  let extensions = [];
  for (let i = 0; i < index.length; i++) {
    extensions.push(tileData[i][index[i]].extension);
  }
  return extensions;
}

function generateAnswers(index) {
  let answers = [];
  for (let i = 0; i < index.length; i++) {
    answers.push(tileData[i][index[i]].answer);
  }
  return answers;
}

function generateTexts(index) {
  let texts = [];
  for (let i = 0; i < index.length; i++) {
    texts.push(tileData[i][index[i]].text);
  }
  return texts;
}

export default function Main() {
  const index = getRandomIndex();

  return (
    <React.Fragment>
      <MultiCaptcha
        questions={generateQuestions(index)}
        extensions={generateExtensions(index)}
        answers={generateAnswers(index)}
        texts={generateTexts(index)}
      />
      <Footer />
    </React.Fragment>
  )
}