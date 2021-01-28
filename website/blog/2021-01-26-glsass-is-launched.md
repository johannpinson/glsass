---
slug: glsass-is-launched-v1
title: Glsass is launched!
author: Johann Pinson
author_title: Glsass creator / Front-end Developer
author_url: https://github.com/johannpinson
author_image_url: https://avatars1.githubusercontent.com/u/2202989?v=4
tags: [glsass, v1, launch]
---

Glsass v1 is launched!

After a previous alpha started at the 2020 automn, this new year is time to make
production ready the framework.

## What's Glsass?

Glsass is a **Sass framework** built on top of Sass Modules and following the
exitCSS pattern. You may see it as a Bootstrap like, but focused for Sass
development.

It means there is no compiled CSS, archive downloadable, or CDN: Glsass is only
avaible as `scss` files.

<!--truncate-->

## Sass Modules

Released in late 2019, Sass launched its
[module system](https://sass-lang.com/blog/the-module-system-is-launched), to
replace the old `@import` logic.

`@use` and `@forward` rules must replace all `@import` declarations, with
namespaced notion and other scope features.

One year after it launch, it didn't become the default settings or really
famous, but the old module system will be depreacted around the 1st October
2021!

Popular framework have pull request for migrated to the new system, but the
change isn't fast because it brings also some limitations or code organization.

But there's no problem with Glsass, because from the start, the framework is
thinking to work only with the new module system. It's why it need to use the
**Dart Sass** package (LibSass, which is used for node-sass is now deprecated!).

Since the Sass team is only focus on Dart Sass (bye LibSass and Ruby Sass), the
adoption of the new system must be a requirement for any front-end developer.

## exitCSS

SMACSS, OOCSS, BEM... CSS architecture and convention exist for a decade and
other best pratices continue to arrive and they are changing the way we code
CSS.

ITCSS was one of the "recent" architecture, mainly focused about the way your
organize your code, more than "how" to code. BEMIT (BEM + ITCSS) is one of its
variant, to define directive to organize folders, files and code (syntax, class
naming, etc.)

exitCSS, for _EXtended ITCSS_, is also an evolution of the ITCSS methodology.
More information about the convention is available inside the
[documentation](/docs/exitCSS).

## What's next?

The v1.1.0 is under active developpment to brings new features and components:

- New tools to manage color contrast, respecting the WCAG standard
- New components (switch and range inputs, breadcrumb, pagination, tooltip)
- New utilities (elevation)

Others features are also under consideration like _dropdown_, but since the
framework is JS-free, it ask to make the best choice to add enough
customization, accessibility and simplicity. Glsass only support modern browser,
so this kind of component can be entirely made with HTML/CSS (like
details/summary elements). But the markup must be explicit and possibly
expandable (like the accordion component).
