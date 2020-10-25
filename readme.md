<p align="center">
  <img src="media/buttons.gif" width="600" />
</p>

[![](https://img.shields.io/npm/v/tv-button.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/tv-button)
[![](https://img.shields.io/badge/nuxt.js-module-04C690.svg?style=flat-square)](https://nuxtjs.org)
![Test Javascript](https://github.com/acidjazz/tv-button/workflows/Test%20Javascript/badge.svg)
[![](https://img.shields.io/npm/dt/tv-button.svg?style=flat-square)](https://www.npmjs.com/package/tv-button)
[![](https://img.shields.io/github/license/acidjazz/tv-button?style=flat-square)](https://www.npmjs.com/package-tv-button)
<!-- [![](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord&style=flat-square)](https://discord.gg/enn4S6) -->

> This requires [Nuxt.js](https://nuxtjs.org) with the [Tailwind CSS](https://tailwindcss.nuxtjs.org) module

## Quick Setup
1. Add the `nuxt-tailvue` dependency to your Nuxt.js project
```bash
npm install nuxt-tailvue
# OR
yarn add nuxt-tailvue
```

2. Add `button` to the `modules` section of `nuxt.config.js`
```js
{
  modules: [
    ['nuxt-tailvue', {button: true}],
  ]
}
```

3. If you're using [Purge](https://tailwindcss.com/docs/controlling-file-size), add this module to the content section of `tailwind.config.js`

```js
module.exports = {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
  }
```


## Features

### ButtonGroup component
 - Works with themes

![](media/group1.png?raw=true)

```html
  <ButtonGroup>
    <PushButton group="left">
      left
    </PushButton>
    <PushButton group="middle">
      middle
    </PushButton>
    <PushButton group="right">
      right
    </PushButton>
  </ButtonGroup>
```

### Combine with [tv-icon](https://github.com/acidjazz/tv-icon)

![](media/paired.png?raw=true)

```html
<PushButton>
    <IconCheck class="w-5 h-5 mr-2" primary="text-green-300" secondary="text-green-400"/>
    Pair with Icons
</PushButton>
```

### Use as a nuxt-link
- Button turns into a [<nuxt-link>](https://nuxtjs.org/api/components-nuxt-link/) for proper navigation

```html
<PushButton to="/about">
  About Us
</PushButton>
```
