// @flow
/* global PluginMapping */
import { ImageViewer } from './image-viewer';
import { IMAGE_TYPE_LEGACY, IMAGE_TYPE } from './types';
import { sizeClassName, alignmentClassName } from './classNameStrategies';

const pluginMapping : PluginMapping = {
  component: ImageViewer,
  classNameStrategies: {
    size: sizeClassName,
    alignment: alignmentClassName
  }
};

export const typeMapper = () => ({
  [IMAGE_TYPE_LEGACY]: pluginMapping,
  [IMAGE_TYPE]: pluginMapping
});
