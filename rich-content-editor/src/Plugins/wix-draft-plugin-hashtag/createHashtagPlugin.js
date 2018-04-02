import createBasePlugin from '../base/basePlugin';
import { HASHTAG_TYPE } from './types';
import { Strategy, Component } from './decorator.jsx';
import decorateComponentWithProps from 'decorate-component-with-props';

const createHashtagPlugin = (config = {}) => {
  const type = HASHTAG_TYPE;
  const { decorator, helpers, theme, isMobile, t, anchorTarget, hashtag } = config;
  const plugin = { decorators: [] };

  const hashtagConfig = hashtag || {};
  const hashtagTheme = {
    hashtag: theme && theme.hashtag,
    hashtag_hover: theme && theme.hashtag_hover, //eslint-disable-line camelcase
  };
  const hashtagProps = Object.assign({}, hashtagConfig, { theme: hashtagTheme });

  plugin.decorators.push({
    strategy: Strategy,
    component: decorateComponentWithProps(Component, hashtagProps)
  });

  return createBasePlugin({
    decorator,
    theme,
    type,
    helpers,
    isMobile,
    anchorTarget,
    t
  }, plugin);
};

export { createHashtagPlugin, HASHTAG_TYPE };
