import { decorateComponentWithProps } from 'wix-rich-content-common';
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  IndentButton,
  BlockquoteButton,
  TextAlignmentButton,
  AlignTextLeftButton,
  AlignTextCenterButton,
  AlignTextRightButton,
  AlignTextJustifyButton,
  UnorderedListButton,
  OrderedListButton,
} from '../index';
import createThemedSeparator from './createThemedSeparator';
import HeadingSwitchButton from '../inline-styling/HeadingSwitchButton';

export default ({ buttons, theme, t, isMobile, pluginButtons }) => {
  const themedSeparator = horizontal => createThemedSeparator({ theme, horizontal });

  const buttonByName = {
    Bold: BoldButton,
    Italic: ItalicButton,
    Underline: UnderlineButton,
    Indent: IndentButton,
    Title: HeadingSwitchButton,
    Blockquote: BlockquoteButton,
    Alignment: TextAlignmentButton,
    AlignLeft: AlignTextLeftButton,
    AlignCenter: AlignTextCenterButton,
    AlignRight: AlignTextRightButton,
    AlignJustify: AlignTextJustifyButton,
    OrderedList: OrderedListButton,
    UnorderedList: UnorderedListButton,
    Separator: themedSeparator(false),
    HorizontalSeparator: themedSeparator(true),
  };

  let buttonMap = buttonByName;
  if (pluginButtons) {
    buttonMap = Object.assign(buttonMap, pluginButtons);
  }

  const structure = buttons.map(buttonName => buttonMap[buttonName]);

  return structure.map(b => decorateComponentWithProps(b, { t, isMobile }));
};
