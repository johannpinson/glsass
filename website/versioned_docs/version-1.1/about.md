---
id: about
title: More about it
---

The actual code is inspired by multiple concepts and based from experience of
real projects. The main goal is to offer a clear naming and optimized structure
convention to facilitate working in a team of several developers.

## BEM

The naming convention respects main concepts from the BEM
(Block-Element-Modifier) methodology.

It uses some generics conventions like `__` `--`separtors to identify elements
and modifiers.

## ITCSS

ITCSS is another convention from CSS Wizardry to help organize CSS files and
code applying a architecure that determine the specificity of each "object". The
framework is actually thought with this methodology, but it also takes some
liberties to optimize it and adapt it to other constraints.

More details about the architecture used is explained on the
[exitCSS](exitcss.md) page.

## SEM & BIO

CSS-Tricks is at the origin of this acronym which resume well what is used in
Glsass.<br/>The
[original post can be found here](https://css-tricks.com/combining-the-powers-of-sem-and-bio-for-improving-css/).

This CSS strategy stands for:<br/>
**S**calable<br/>**E**xtensible<br/>**M**aintainable<br/> &<br/>
**B**EM<br/>**I**TCSS<br/>**O**OCSS

## Harry Roberts, Chris Pearce and others

Other awesome concepts are applied in the framework, based on works of Harry
Roberts ([CSS Wizardry](https://csswizardry.com/), ITCSS) or Chris Pearce
([CSS Guidelines](https://csswizardry.com/)). As non-exhaustive examples :

- Namespace naming (class, SASS variables, etc.)
- States hooks
- Size factors (flush, tiny, small, medium, large, huge)

And other concepts are inspired by famous frameworks, like
[Bootstrap](https://getbootstrap.com/) (specially the utilities generator),
[Spectre.css](https://picturepan2.github.io/spectre/),
[Tachyons](https://tachyons.io/) or [Tailwind](https://tailwindcss.com/).
