import { combineReducers } from 'redux';

import {defReducer} from './tasks.js';

export default combineReducers ({ tasks: defReducer })