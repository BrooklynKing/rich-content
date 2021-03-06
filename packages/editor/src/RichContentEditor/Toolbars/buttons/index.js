export const DesktopTextButtonList = [
  'Bold',
  'Italic',
  'Underline',
  'Title',
  'Blockquote',
  'Separator',
  'Alignment',
  'OrderedList',
  'UnorderedList',
  // 'Indent',
];

export const MobileTextButtonList = [
  'Bold',
  'Italic',
  'Underline',
  'Title',
  'Blockquote',
  // TODO: Link here
  'AddPlugin',
  'AlignLeft',
  'AlignCenter',
  'AlignRight',
  'AlignJustify',
  'OrderedList',
  'UnorderedList',
];

export { default as TextAlignmentButton } from './TextAlignmentButton';
export { default as AddPluginButton } from './AddPluginButton';
export {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  IndentButton,
  BlockquoteButton,
  AlignTextLeftButton,
  AlignTextCenterButton,
  AlignTextRightButton,
  AlignTextJustifyButton,
  OrderedListButton,
  UnorderedListButton,
} from './TextButtons';
