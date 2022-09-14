import { combineReducers } from 'redux';

import {defReducer} from './tasks.js';
import {defReducerAlt} from './tasks.js';

// export default combineReducers ({ tasks: defReducer });
export default combineReducers ({ tasks: defReducerAlt });
