// @flow
/* global PluginMapping */
import { EXTERNAL_LINK_TYPE, LINK_TYPE } from './types';
import LinkViewer from './LinkViewer';

const pluginMapping : PluginMapping = { component: LinkViewer, elementType: 'inline' };

export const typeMapper = () => ({
  [EXTERNAL_LINK_TYPE]: pluginMapping,
  [LINK_TYPE]: pluginMapping,
});

