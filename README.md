# SCSS Map Generator

SASS folders can become tangled and complex. When examining the import-scss structure, it often requires opening each file individually, leading to a cumbersome process. To address this issue, this script visualizes the entire SASS folder structure, generating it to a scssMap.txt file.

In summary, it captures the structure of the component and scss folders and exports it to a text file.

## Usage

Install the package:

```bash

npm install scss-map-generator

npx scss-structure-mapper './your-sass-folder'

```

Export the 'scssmap.txt' file to your root folder. 

It should appear as follows:

```
{
  "abstracts/abstracts/__abstracts-dir.scss": [
    "abstracts/fonts",
    "abstracts/mixins",
    "abstracts/variables"
  ],
  "abstracts/abstracts/_fonts.scss": [
    "(No imports)"
  ],
  "abstracts/abstracts/_mixins.scss": [
    "(No imports)"
  ],
  "abstracts/abstracts/_variables.scss": [
    "(No imports)"
  ],
  "base/base/__base-dir.scss": [
    "base/reset",
    "base/global",
    "base/typography"
  ],
  "base/base/_global.scss": [
    "(No imports)"
  ],
  "base/base/_reset.scss": [
    "(No imports)"
  ],
  "base/base/_typography.scss": [
    "(No imports)"
  ],
  "components/components/__components-dir.scss": [
    "components/container"
  ],
  "components/components/_container.scss": [
    "(No imports)"
  ],
  "layouts/layouts/__layouts-dir.scss": [
    "layouts/footer"
  ],
  "layouts/layouts/_footer.scss": [
    "(No imports)"
  ],
  "vendor/vendor/__vendor-dir.scss": [
    "vendor/bourbon/bourbon",
    "vendor/neat/neat",
    "vendor/fontawesome/font-awesome",
    "vendor/normalize/normalize"
  ],
  "vendor/bourbon/vendor/bourbon/_bourbon-deprecated-upcoming.scss": [
    "(No imports)"
  ],
  "vendor/bourbon/vendor/bourbon/_bourbon.scss": [
    "vendor/bourbon/settings/prefixer",
    "vendor/bourbon/settings/px-to-em",
    "vendor/bourbon/settings/asset-pipeline",
    "vendor/bourbon/functions/assign-inputs",
    "vendor/bourbon/functions/contains",
    "vendor/bourbon/functions/contains-falsy",
    "vendor/bourbon/functions/is-length",
    "vendor/bourbon/functions/is-light",
    "vendor/bourbon/functions/is-number",
    "vendor/bourbon/functions/is-size",
    "vendor/bourbon/functions/px-to-em",
    "vendor/bourbon/functions/px-to-rem",
    "vendor/bourbon/functions/shade",
    "vendor/bourbon/functions/strip-units",
    "vendor/bourbon/functions/tint",
    "vendor/bourbon/functions/transition-property-name",
    "vendor/bourbon/functions/unpack",
    "vendor/bourbon/functions/modular-scale",
    "vendor/bourbon/helpers/convert-units",
    "vendor/bourbon/helpers/directional-values",
    "vendor/bourbon/helpers/font-source-declaration",
    "vendor/bourbon/helpers/gradient-positions-parser",
    "vendor/bourbon/helpers/linear-angle-parser",
    "vendor/bourbon/helpers/linear-gradient-parser",
    "vendor/bourbon/helpers/linear-positions-parser",
    "vendor/bourbon/helpers/linear-side-corner-parser",
    "vendor/bourbon/helpers/radial-arg-parser",
    "vendor/bourbon/helpers/radial-positions-parser",
    "vendor/bourbon/helpers/radial-gradient-parser",
    "vendor/bourbon/helpers/render-gradients",
    "vendor/bourbon/helpers/shape-size-stripper",
    "vendor/bourbon/helpers/str-to-num",
    "vendor/bourbon/css3/animation",
    "vendor/bourbon/css3/appearance",
    "vendor/bourbon/css3/backface-visibility",
    "vendor/bourbon/css3/background",
    "vendor/bourbon/css3/background-image",
    "vendor/bourbon/css3/border-image",
    "vendor/bourbon/css3/calc",
    "vendor/bourbon/css3/columns",
    "vendor/bourbon/css3/filter",
    "vendor/bourbon/css3/flex-box",
    "vendor/bourbon/css3/font-face",
    "vendor/bourbon/css3/font-feature-settings",
    "vendor/bourbon/css3/hidpi-media-query",
    "vendor/bourbon/css3/hyphens",
    "vendor/bourbon/css3/image-rendering",
    "vendor/bourbon/css3/keyframes",
    "vendor/bourbon/css3/linear-gradient",
    "vendor/bourbon/css3/perspective",
    "vendor/bourbon/css3/placeholder",
    "vendor/bourbon/css3/radial-gradient",
    "vendor/bourbon/css3/selection",
    "vendor/bourbon/css3/text-decoration",
    "vendor/bourbon/css3/transform",
    "vendor/bourbon/css3/transition",
    "vendor/bourbon/css3/user-select",
    "vendor/bourbon/addons/border-color",
    "vendor/bourbon/addons/border-radius",
    "vendor/bourbon/addons/border-style",
    "vendor/bourbon/addons/border-width",
    "vendor/bourbon/addons/buttons",
    "vendor/bourbon/addons/clearfix",
    "vendor/bourbon/addons/ellipsis",
    "vendor/bourbon/addons/font-stacks",
    "vendor/bourbon/addons/hide-text",
    "vendor/bourbon/addons/margin",
    "vendor/bourbon/addons/padding",
    "vendor/bourbon/addons/position",
    "vendor/bourbon/addons/prefixer",
    "vendor/bourbon/addons/retina-image",
    "vendor/bourbon/addons/size",
    "vendor/bourbon/addons/text-inputs",
    "vendor/bourbon/addons/timing-functions",
    "vendor/bourbon/addons/triangle",
    "vendor/bourbon/addons/word-wrap",
    "vendor/bourbon/bourbon-deprecated-upcoming"
  ],
  "vendor/bourbon/addons/vendor/bourbon/addons/_border-color.scss": [
    "(No imports)"
  ],
  "vendor/bourbon/addons/vendor/bourbon/addons/_border-radius.scss": [
    "(No imports)"
  ]
}
  ```
