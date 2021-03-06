import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import Iframe from './Iframe';

class IframeHtml extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.html !== nextProps.html) {
      this.updateIframeContent(nextProps.html);
    }
  }

  updateIframeContent = content => {
    this.shouldIgnoreLoad = true;
    this.iframe.contentWindow.postMessage({
      type: 'htmlPlugin:updateContent',
      content,
    }, '*');
  };

  handleIframeLoad = () => {
    !this.shouldIgnoreLoad && this.updateIframeContent(this.props.html);
  };

  setIframe = iframe => {
    this.iframe = iframe;
  };

  render() {
    return (
      <Iframe
        {...omit(this.props, 'html')}
        iframeRef={this.setIframe}
        onLoad={this.handleIframeLoad}
      />
    );
  }
}

IframeHtml.propTypes = {
  html: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default IframeHtml;
