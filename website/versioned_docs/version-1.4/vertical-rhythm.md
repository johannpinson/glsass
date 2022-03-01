---
id: vertical-rhythm
title: Vertical rhythm
---

The term _Vertical Rhythm_ is a common pratice for design in general. The goal
is to keep vertical spaces between elements consisten with each other.

To make it more visual, we use a **baseline** to display the a kind of grid, but
with unlimited rows (instead of the classic 12 columns grid).

You can test it by enable the "debug mode" from the navbar, it will display the
main grid in red (and semi-rhythm)lighter).

## The line-height mystery

In print design, the baseline grid will be aligned form the bottom of
characters. But on web, the line-height property works differents, it's like if
text must be vertically centered between each line of the grid.

Even if they look different, the principle is still the same!

To determinate the web baseline, it will be defined from the `line-height`
property. If your text has a `line-height` value of 20px, yout baseline is also
20px.

In Glsass, the `line-height` is set as a unitless number
([this should be the case all the time](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values)),
and is computed from the body font-size.

```scss
// @glsass/settings/settings.core
$g-font-size-base: 1rem !default;
$g-font-line-height-base: 1.5 !default;
```

Browsers set the default `font-size` at `16px`, so the vertical rhythm will be
`24px` (16px \* 1.5).

This what we call `1vr` in Glsass, as 1 unit of _vertical rhythm_.

:::note

The `vr` unit doesn't exist in CSS, it's why the framework provides the `vr()`
function to achieve to a similar behavior.

:::

## Repetition is the new black

By repeating this vertical grid, it make the design more consistent and easier
_understandable_.

More this repetition is present, more your mind will find it familiar and it
gives the feeling that things belong well together.

Familarities brings somethinh reassuring, because you may think that all things
are where the should be.<br/> You know, it's this feeling of statisfaction when
you look things perfectly aligned or arranged 😉

## The grid is dead, long live the grid!

After the vertical rhythm is defined, repeat it everywhere is logic (paddings,
gutters, button sizes, etc.), but not necessarily with the same scale.

To avoid some weariness, you can divert it. The vertical rhythm is based on a
24px value, but it's not forbidden to use "extended" value, by having multiple
values.

Beyond logic values like 48px (2vr) or 72px (3vr), other ratio can be usefull by
divide it, or combine them:<br/> 12px, 24px, 36px, 48px, 60px...<br/> or 0.5vr,
1vr, 1.5vr, 2vr, 2.5vr...

As example, headings on Glsass can have differents height (1, 1.5, 2 or 3vr),
but keep the same `margin-bottom` at `0.5vr`.

The goal of a good vertical grid is always to find the right balance between
consistent and boredom. It's not an exact science, it's up to you to decide what
looks good or not.

## Want more?

It you want to read more about this subject, the Zellwk blog made good articles
about it [here](https://zellwk.com/blog/why-vertical-rhythms/) and
[there](https://zellwk.com/blog/web-typography-broken/). You can find other
usefull posts on CSS-Tricks, dev.to or any blog about this fascinating topic.
