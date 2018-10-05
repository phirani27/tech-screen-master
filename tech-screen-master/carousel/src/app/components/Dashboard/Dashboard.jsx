import React from 'react';

import bemHelper from '../../utils/bem';
import './dashboard.scss';
import ScoreIndicator from "../../containers/ScoreIndicator/ScoreIndicator";

const cn = bemHelper({ block: 'content' });
export default () => (
  <div className={cn(null,'main')}>
    <ScoreIndicator/>
  </div>
);
