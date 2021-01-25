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

**It's not necessary to follow the exitCSS convention**, but it's greatly
recommanded to follow the standard of the framework.

Your main `index.scss` may look like this:

```scss
@charset "UTF-8";

// SETTINGS - Modify settings to make you the framework own
@use "@glsass/settings" with (
  // This is the only required variable!
  $g-color-primary: #0066d7,
  // Add here your own settings, for example
  $g-color-secondary: #805ad5,
  $g-fonts-google: "Raleway:400,400i,700",
  $g-font-family-map: "Raleway",
);

// TOOLS - Don't import it, unless you need it later for configure next modules
@use "@glsass/tools/tools.global" as *; // Import functions/mixins without namespaces

// GRAPHICS - Not required, but allow to change UI variables
@use "@glsass/graphics" with (
  $ui-border-color: cv(gray, 500)
);

// GENERICS - Don't change the order for generic modules
@forward "@glsass/generics/generics.reset";
@forward "@glsass/generics/generics.fonts";
@forward "@glsass/generics/generics.shared";

// VENDORS
// Create this file if you need another (S)CSS library
// @forward "vendors";

// ELEMENTS
@forward "@glsass/elements/elements.headings";
@forward "@glsass/elements/elements.images";
@forward "@glsass/elements/elements.lists";
@forward "@glsass/elements/elements.links";
@forward "@glsass/elements/elements.page";
@forward "@glsass/elements/elements.tables";

// OBJECTS
@forward "@glsass/objects/objects.divider";
@forward "@glsass/objects/objects.layout";
@forward "@glsass/objects/objects.link";
@forward "@glsass/objects/objects.list-bare";
@forward "@glsass/objects/objects.list-inline";
@forward "@glsass/objects/objects.media";
@forward "@glsass/objects/objects.overlay";
@forward "@glsass/objects/objects.table";

// COMPONENTS
// Add here the component you need from Glsass, and then you own
@forward "@glsass/components/components.accordion";
@forward "@glsass/components/components.alert";
@forward "@glsass/components/components.badge";
// You can also pass settings for each component
@forward "@glsass/components/components.button" with (
  $c-button-round-default: false,
);
@forward "@glsass/components/components.callout";
@forward "@glsass/components/components.card";
@forward "@glsass/components/components.form";
@forward "@glsass/components/components.navbar";

// Custom components as example
@forward "components/components.logo";
@forward "components/components.footer";

// SCOPE

// THEMES

// HELPERS
@forward "@glsass/utilities/utilities.clearfix";
@forward "@glsass/utilities/utilities.links";
@forward "@glsass/utilities/utilities.vhd";

// UTILITIES
@forward "@glsass/utilities/utilities.borders";
@forward "@glsass/utilities/utilities.colors";
@forward "@glsass/utilities/utilities.columns"; //! This file is required by the Grid system
@forward "@glsass/utilities/utilities.displays";
@forward "@glsass/utilities/utilities.flex";
@forward "@glsass/utilities/utilities.float";
@forward "@glsass/utilities/utilities.headings";
@forward "@glsass/utilities/utilities.overflow";
@forward "@glsass/utilities/utilities.sizings";
@forward "@glsass/utilities/utilities.spacings";
@forward "@glsass/utilities/utilities.texts";
@forward "@glsass/utilities/utilities.print"; // Must keep it as last

// WARNING: This file must only be used for testing
// It used "debug" classes from the <body> element
// Must be removed or set to false for a production build!
@forward "@glsass/utilities/utilities.debug" with (
  // The $u-debug variable must be set at `true` as a security
  $u-debug: true,
);
```

For the "generic", "elements" and "objects" parts, you can directly forward the
folder because an index file is present.

```scss
 ...

// GENERIC
@forward "@glsass/generic";

// ELEMENTS
@forward "@glsass/elements";

// OBJECTS
@forward "@glsass/objects";

...
```

If there is no risk for the "generic" and "elements" part, be careful if you use
it for the "objects". When the folder is listed, it will import all the SCSS
code, even if you don't need or use it. It's why you cannot import the
"components" or "utilities" folder, to avoid useless css in your future file.

## Minimal setups

For minimal needs, you may have a smaller `index.scss` file, for exemple, if
you just need the Grid system:

```scss
// GRID MINIMAL SETUP
@charset "UTF-8";

@use "@glsass/settings" with (
  // Required variable, but set it at any color if you don't need it
  $g-color-primary: #fff,
);

@forward "@glsass/objects/objects.layout";
@forward "@glsass/utilities/utilities.columns";

// Add your own code next
@forward "my-custom-component";
@forward "another-component";
```
