var Speech = require('watson-html5-speech-recognition');
var speech = new Speech.SpeechToText({
  watsonTokenUrl: 'http://localhost:3000/api/speech-to-text/'
});
window.SpeechToText = speech;
