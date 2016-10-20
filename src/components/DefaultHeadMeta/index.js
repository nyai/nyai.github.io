/* eslint max-len: ["warn", 200] */

import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width user-scalable=no initial-scale=1 maximum-scale=1",
      } ] }
    />
    <link rel="icon" type="image/png" href="/Favicon.png"></link>
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
