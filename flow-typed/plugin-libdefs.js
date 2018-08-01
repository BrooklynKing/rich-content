/* eslint-disable no-undef */
declare type ElementType = "inline" | "block";

declare type PluginMapping = {
  component: Function,
  classNameStrategies?: {
    size?: Function,
    alignment?: Function,
    textWrap?: Function
  },
  elementType?: ElementType
};
/* eslint-enable no-undef */
