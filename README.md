## Tootik

A pure **CSS Tooltip** library. Super easy to use, No JavaScript required.

![frame](/logo.png)

### Demo
https://eliroshalev.github.io/tootik

### Installation

First, download tootik.min.css and add it to your HTML.

```html
<link rel="stylesheet" href="path/to/tootik.min.css">
```
Then, just define a **data-tootik** attribute in your element and let the magic happen.
Additionally, you can define a **data-tootik-conf** attribute to either change position or use a feature.</p>

```html
<span data-tootik="..." data-tootik-conf="...">...</span>
```          
          
### Position

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

### Credits

Handcrafted with love by Elior Shalev Tabeka (http://codepen.io/eliorshalev)
