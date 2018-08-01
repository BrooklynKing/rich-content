// @flow
/* global PluginMapping */

import DividerComponent from './components/divider-component';
import { DIVIDER_TYPE } from './constants';

const mapper : PluginMapping = { component: DividerComponent };
export const typeMapper = () => ({
  [DIVIDER_TYPE]: mapper
});
