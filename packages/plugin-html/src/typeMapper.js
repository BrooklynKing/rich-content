// @flow
/* global PluginMapping */
import { Component as HtmlComponent } from './HtmlComponent';
import { HTML_TYPE } from './types';

const pluginMapping : PluginMapping = { component: HtmlComponent };
export const typeMapper = () => ({
  [HTML_TYPE]: pluginMapping
});
