const presetEnvESM =  [
  '@babel/preset-env',
  {
    modules: false,
    loose: true
  }
];

const presetEnvCommonJS =  [
  '@babel/preset-env',
  {
    loose: true
  }
];

const commonPresets = [
  ['@babel/preset-stage-2', { decoratorsLegacy: true }],
  '@babel/preset-react'
];

const commonPlugins = [
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/transform-runtime'
];

const testPlugins = [
  '@babel/plugin-transform-modules-commonjs'
];

module.exports = {
  presets: [presetEnvESM, ...commonPresets, "flow"],
  plugins: [...commonPlugins],
  env: {
    commonjs: {
      presets: [presetEnvCommonJS, ...commonPresets],
      plugins: [...commonPlugins]
    },
    test: {
      presets: [presetEnvCommonJS, ...commonPresets],
      plugins: [...testPlugins]
    }
  }
};
