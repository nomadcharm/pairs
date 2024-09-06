import controlsScreen from './controlsScreen';
import gameScreen from './gameScreen';
import 'normalize.css';
import '../../scss/main.scss';

// eslint-disable-next-line
const { setChildren } = require("redom");
const body = window.document.body;

setChildren(body, [controlsScreen, gameScreen]);
