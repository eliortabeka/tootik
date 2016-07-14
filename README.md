## Tootik

A pure **CSS/SCSS/LESS Tooltip** library. Super easy to use, No JavaScript required.

![frame](/logo.png)

### Demo
https://eliorshalev.github.io/tootik/

### Installation

**Using npm:**
```
npm install tootik
```

**Using bower:**
```
bower install tootik
```

**Manually:**
Download `tootik.min.css` from this repo or from [demo site](https://eliorshalev.github.io/tootik/) and add it to your HTML. e.g.
```html
<link rel="stylesheet" href="path/to/tootik.min.css">
```

Define a **data-tootik** attribute in your element and let the magic happens.

```html
<span data-tootik="...">...</span>
```

Additionally, you can define a **data-tootik-conf** attribute to either change position or use a feature.

```html
<span data-tootik="..." data-tootik-conf="...">...</span>
```          
          
### Positioning

```html
<span data-tootik="...">Top</span>
<span data-tootik="..." data-tootik-conf="right">Right</span>
<span data-tootik="..." data-tootik-conf="bottom">Bottom</span>
<span data-tootik="..." data-tootik-conf="left">Left</span>
```

### Types

```html
<span data-tootik="..." data-tootik-conf="invert">invert</span>
<span data-tootik="..." data-tootik-conf="success">success</span>
<span data-tootik="..." data-tootik-conf="info">info</span>
<span data-tootik="..." data-tootik-conf="warning">warning</span>
<span data-tootik="..." data-tootik-conf="danger">danger</span>
```

### Features

```html
<span data-tootik="..." data-tootik-conf="shadow">shadow</span>
<span data-tootik="..." data-tootik-conf="delay">delay</span>
<span data-tootik="..." data-tootik-conf="multiline">multiline</span>
<span data-tootik="..." data-tootik-conf="no-fading">no-fading</span>
<span data-tootik="..." data-tootik-conf="no-arrow">no-arrow</span>
<span data-tootik="..." data-tootik-conf="square">square</span>
```

### Credit

Handcrafted with love by [Elior Shalev Tabeka](http://codepen.io/eliorshalev)

LESS syntax by [Elena Torro](https://github.com/elenatorro)
