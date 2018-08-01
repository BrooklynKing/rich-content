// @flow
/* global PluginMapping */import VideoViewer from './video-viewer';
import { VIDEO_TYPE_LEGACY, VIDEO_TYPE } from './types';
import { containerClassName } from './classNameStrategies';

const pluginMapping : PluginMapping = { component: VideoViewer, classNameStrategies: { container: containerClassName } };

export const typeMapper = () => ({
  [VIDEO_TYPE_LEGACY]: pluginMapping,
  [VIDEO_TYPE]: pluginMapping,
});
