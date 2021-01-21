---
id: installation
title: Installation
---

Glsass isn't available throught a CDN or a `glsass.css` file because it designed
to be a Sass Framework.

The framework is available trought a NPM package.

```shell
npm install glsass
```

## Sass version

```shell
Dart Sass > 1.23.0  |  LibSass ✗  |  Ruby Sass ✗
```

In October 2019, Sass introducted the Module System to replace the "old"
`@import` rule. But it's only available with the Dart Sass, since the `v1.23.0`,
so you will have issues if you are an user of LibSass or Ruby Sass.

Since the framework use the new syntax with the `@use` and `@forward` rules, you
must be sure to use the good version of the Sass library.

## Quick start

**It's not necessary to follow the ITCSS convention**, but it's greatly
recommanded to follow the standard of the framework.

Your main `index.scss` will look like this:

```scss
@charset "UTF-8";

// SETTINGS - override only settings is needed
@use "~glsass/src/settings" with (
  // Add here your own settings, for example
  $g-fonts-google: "Raleway:400,400i,700",
  $g-font-family-map: "Raleway",
  $g-color-primary: #0066d7,
  $g-color-secondary: #805ad5,
);

// GENERIC - Don't change the order for generic modules
@forward "~glsass/src/generic/generic.box-sizing";
@forward "~glsass/src/generic/generic.normalize";
@forward "~glsass/src/generic/generic.reset";
@forward "~glsass/src/generic/generic.fonts";
@forward "~glsass/src/generic/generic.shared";

// VENDORS
// Create this file if you need another (S)CSS library
// @forward "vendors";

// ELEMENTS
@forward "~glsass/src/elements/elements.headings";
@forward "~glsass/src/elements/elements.images";
@forward "~glsass/src/elements/elements.lists";
@forward "~glsass/src/elements/elements.links";
@forward "~glsass/src/elements/elements.page";
@forward "~glsass/src/elements/elements.tables";

// OBJECTS
@forward "~glsass/src/objects/objects.divider";
@forward "~glsass/src/objects/objects.layout";
@forward "~glsass/src/objects/objects.link";
@forward "~glsass/src/objects/objects.list-bare";
@forward "~glsass/src/objects/objects.list-inline";
@forward "~glsass/src/objects/objects.media";
@forward "~glsass/src/objects/objects.overlay";
@forward "~glsass/src/objects/objects.table";

// COMPONENTS
// Add here the component you need from Glsass, and then you own
@forward "~glsass/src/components/components.alert";
@forward "~glsass/src/components/components.badge";
// You can also pass settings for each component
@forward "~glsass/src/components/components.button" with (
  $c-button-round-default: false,
);
@forward "~glsass/src/components/components.card";
@forward "~glsass/src/components/components.callout";
@forward "~glsass/src/components/components.form";
@forward "~glsass/src/components/components.helper";

// Custom components as example
@forward "components/components.logo";
@forward "components/components.navbar";

// PATTERNS
@forward "patterns/patterns.intro";

// SCOPE

// THEMES

// UTILITIES
@forward "~glsass/src/utilities/utilities.borders";
@forward "~glsass/src/utilities/utilities.colors";
@forward "~glsass/src/utilities/utilities.columns"; //! This file is required by the Grid system
@forward "~glsass/src/utilities/utilities.displays";
@forward "~glsass/src/utilities/utilities.flex";
@forward "~glsass/src/utilities/utilities.headings";
@forward "~glsass/src/utilities/utilities.overflow";
@forward "~glsass/src/utilities/utilities.sizings";
@forward "~glsass/src/utilities/utilities.spacings";
@forward "~glsass/src/utilities/utilities.texts";
@forward "~glsass/src/utilities/utilities.vhd";
@forward "~glsass/src/utilities/utilities.print"; // Must keep it as last

// WARNING: This file must only be used for testing
// It used "debug" classes from the <body> element
// Must be removed or set to false for a production build!
@forward "~glsass/src/utilities/utilities.debug" with (
  // The $u-debug variable must be set at `true` as a security
  $u-debug: true,
);
```

For the "generic", "elements" and "objects" parts, you can directly forward the
folder because an index file is present.

```scss
 ...

// GENERIC
@forward "~glsass/src/generic";

// ELEMENTS
@forward "~glsass/src/elements";

// OBJECTS
@forward "~glsass/src/objects";

...
```

If there is no risk for the "generic" and "elements" part, be careful if you use
it for the "objects". When the folder is listed, it will import all the SCSS
code, even if you don't need or use it. It's why you cannot import the
"components" or "utilities" folder, to avoid useless css in your future file.
