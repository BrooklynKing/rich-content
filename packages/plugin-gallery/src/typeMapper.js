// @flow
/* global PluginMapping */
import { GalleryViewer } from './gallery-viewer';
import { GALLERY_TYPE } from './types';

const pluginMapping : PluginMapping = { component: GalleryViewer };

export const typeMapper = () => ({
  [GALLERY_TYPE]: pluginMapping,
});
