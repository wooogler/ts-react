import * as React from 'react';
import { ITryProps } from './types';

const Try: React.FunctionComponent<ITryProps> = ({tryInfo}) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

export default Try;