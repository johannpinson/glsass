---
id: exitcss
title: Architecture & exitCSS
sidebar_label: exitCSS
---

## Concept from ITCSS

ITCSS is a project architecture designed by
[Harry Roberts](https://csswizardry.com/). The goal is to ensure a good
maintenance and scalability of the codebase, by following some conventions and
rules.

ITCSS means _Inverted Triangle CSS_, and represent the complexity graph how your
code must be organized.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/itcss-default.svg" alt="ITCSS concept" height="300" />
  <figcaption class="u-c-muted">
    Image from{' '}
    <a
      href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Xfive blog
    </a>
  </figcaption>
</figure>

The triangle represents the CSS selectors order : from generic to explicit, from
_low-complexity_ to _hight-specifity_, or from global zones to localized ones.

## Glsass and _exitCSS_

In **Glsass**, the ITCSS is slightly modified, to allow more flexibility and
take advantage of Sass Modules. It's why we used the **exitCSS** (for EXtended
ITCSS) term to differntiate it.

Since we don't have to import all files at the root file (thanks `@use` and
`@forward` rules), there may no need for you to import `tools` inside your
`index.scss`.

This is the layer structure:

- Root (Settings + Tools)
- Graphics
- Generic
- Elements
- Objects
- Layouts
- Components
- Scopes
- Themes
- Utilities

### Root

The `Root` layer is a combination of the `Settings` and `Tools` folders. The
settings contains main variables and definitions used in the framework. The
tools is about Sass mixins and functions.

Even if there is not `root` folder inside Glsass, it's a term to reference all
part of the framework which doesn't "produce" CSS code, and are only about
**configurations**.

### Graphics

Similar to the settings layer, `Graphics` also contains many variables. But all
of them are only about interfaces and graphics : `border` (width and radius),
`font` styles, etc.

If this variables aren't initilize inside the settings folder, it's to take
advantage of global functions (like `cv`).

### Generic

This is the layer which will generate CSS code. It contains reset and normalize
styles, `box-sizing` definitions and some shared styles (like default
`margin-bottom` on some elements).

### Elements

Also called _Base_, there is rules for styling basic HTML elements (headings,
links, lists, etc.) to adjust some default browser behaviors/feelings.

### Objects - _.o-\*_

The first class-based selectors start here, it defines _undecorated_ (or at
least, as much as possible) design patters. Some objects like `o-media` are
known from OOCSS and are present is this layer.

### Layouts - _.l-\*_

Glsass doesn't provide layout classes because it will depend of your HTML
structure. You can add your own folder and files if you use this layer logic
(header, main, hero, footer).

To avoid adding more complexity in your files organization, layouts can be
considered like "big" components, so you don't have to use this layer. The goal
remains to keep an understandable block architecture.

### Components - _.c-\*_

In this layer, you have specific UI "components" (or UI blocks), so the majority
of your work will go here. A component is a well-designed piece of UI that can
be reused in differents needs and areas. Glsass provide basic and customizable
components (alert, button, card, etc.), that you can use or not, modify theme
from the Sass parameters or build your own.

But if a component is create to be reusable anywhere, is it still legetimate to
use this layer for built a UI block for a unique need? In some cases, you can
choice to create a "Modules" folder (`.m-*`). <br/> By convention, a component
can be use a lot of time, in different areas of contexts. For a module, the goal
is to create a chunk of UI for a specific use. The goal is just to organize your
UI folders and indicate to the others developers, which ones is reusable and
which are not. <br/> Since this layer is specific of the design to build, Glsass
doesn't foward any module. But it can be use to add a new behavior to an
existing (external) component (like a `m-button` for example).

### Scopes - _.s-\*_

Scoped context in CSS should be used sparingly. The goal is to solve very
specific and local problem. The perfect example is when you use a CMS with a
_WYSIWYG_ editor. You may add a class like `.s-cms-content` around the generated
content, and then target HTML elements (`ul`/`li`, `a`, `hn`).

Before use it, be sure that you cannot achieve the expected result otherwise, to
avoid additional complexity of your codebase. And be careful about the
weight/priorities of the new classes.

In some cases, you can also have a `pages` folder to manage some page behavior.
Generally, it will use the `.page-*` prefix (`.page-home`, `.page-about`, etc.)
and it can help you to manage bigger "scope" from your app.

To finish, given that behavior of the `pages` layer, you may want to move it
before (before Layouts -> a page is a "large" layout), or after (after Themes ->
CSS rules have a huge specificity). It's for you to see, depending of your
organization and needs, the goal is just to keep some logic in the code
distribution.

### Themes - _.t-\*_

This layer is similar to the previous one, because it lust be used only for
specific case, especially if you work with
[Stateful Themes](https://speakerdeck.com/csswizardry/4half-methods-for-theming-in-s-css?slide=30).
But since with Sass syntax you can use the parent selector `&`, theming can be
applied in components directly. <br /> The theming can also be set from the
settings variables, so this layer can be used (or not) depending of your code
organization.

### Helpers - _.h-\*_

Helpers are special classes to create special behaviors on an elements.

This layer can find it very similar to the `utilities` layer, there is one
difference which make it different: if an utility class add (mostly) **one** CSS
rule, a helper class add several ones.

Despite the similarities, it's a good pratice to separate them to better
distinguish.

### Utilities - _.u-\*_

This is (normally) the last layer of your stack. Glsass already contains a lot
of utilities classes, mainly inherit from
[Bootstrap](https://getbootstrap.com/docs/4.5/utilities/borders/),
[Tachyon](https://tachyons.io/), [Tailwind](https://tailwindcss.com/) or other
CSS frameworks.

## Namespace prefixes

Starting from the objects layer, all classes _must_ start with a namespace
prefix to easily identify the scope of the class.

For example, if you use a `block`, without the prefix it's difficult to
determinate what is the purpose. But if it was a `o-block`, it may be about to
create a simple flow layout, instead of a `c-block`, a component which can
define border, background-color or whatever aesthetic rule.

This naming principe is called **BEMIT** (for BEM + ITCSS), and following the
work of Chris Pearce
([CSS Guidelines](https://github.com/chris-pearce/css-guidelines#naming-conventions)),
we can use other prefixes like:

- `is-*` and `has-*` for temporary states
- `_-*` for hacks
- `js-*` for classes need to be "accessible" for JavaScript (not for styling!)
- `qa-*` for QA testing and simplify automated UI tests

Of course, you can also use any other prefix if it make sense and is documented
to ensure other members of your team will understand the behavior and logic
behind.

## What's about vendors?

Vendors isn't a real layer for Glsass, because it will contain others
librairies. But is some cases (slider/carousel, datepicker), you may need to
include another (S)CSS files in your codebase.

Because of the specificity or rules, it should be after the components layer.
But since you may not have the control of the CSS code, the simply way is to add
it at the end.

Each case are specific, it also to you to move it at the good place depending of
the generated code.

## Alternative setups

In some case, you can also find other derivatives of this organization, for
example:

- Core (settings + tools + graphics)
- Basics (generic + elements)
- Patterns (objects + layouts + components)
- Contexts (scopes + themes)
- Overrides (helpers + utilities)
