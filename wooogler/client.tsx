import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GuGuDan from './GuGuDan';
import GuGuDanClass from './GuGuDanClass';
import WordRelay from './WordRelay';
import NumberBaseball from './NumberBaseball';
import ResponseCheck from './ResponseCheckClass';
import RSP from './RSP';
import { hot } from 'react-hot-loader/root';

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));
