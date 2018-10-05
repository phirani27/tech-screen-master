/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import { hasWindow } from '../../app/utils';

const Html = ({
  js, css, markup,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      {hasWindow ? null : DocumentMeta.renderAsReact()}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </head>
    <body>
      <div id="stylesheets" dangerouslySetInnerHTML={{ __html: css.join('') }} />
      <div id="html" dangerouslySetInnerHTML={{ __html: markup }} />
      <div id="scripts" dangerouslySetInnerHTML={{ __html: js.join('') }} />
    </body>
  </html>
);

Html.propTypes = {
  markup: PropTypes.string.isRequired,
  js: PropTypes.arrayOf(PropTypes.string).isRequired,
  css: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Html;
