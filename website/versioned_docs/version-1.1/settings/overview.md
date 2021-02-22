---
id: overview
title: Overview
slug: /settings
---

Settings are the "core" of the framework, because changing one unique variable
can affect a lot of classes and styling. The variable are separated in several
files to orgazine it by "categories". When you import it, there is the files in
the folder:

```scss
// ~glsass/settings/_index.scss

@forward "settings.core";
@forward "settings.colors";
@forward "settings.icons";
@forward "settings.variables";
```
