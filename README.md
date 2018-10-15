# Personal Site of Avery Barron | @giantrobotbee

Live site here: [giantrobotbee.com](https://giantrobotbee.com)

## Responsive Design
This site is optimized to be mobile first. Breakpoints start at 0px and go up, using `min-width` as is standard practice.

## CSS Grid
I was interested in learning more about CSS Grid so I peppered it in. My conclusions thus far are that it's amazing.

## Typography
The typographic hierarchy on this site leverages two main configurations.

### Sanitized REM's
REM (Reset EM) units are generally used for spacing, and not typography. However, we do leverage sanitized REM units
that are configured so that `1rem === 10px` at most browser's default font size of 16px. Using this, we can set up
our root type scale to change at the necessary breakpoints. Here, we reset the `tablet-portrait-and-up` breakpoint back to
16px (`1.6rem`), while smaller breakpoints actually have a baseline of 14px (`1.4rem`).

```css
html {
    font-size: 62.5%
}

body {
    background: var(--color-dark-gray);
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.4rem;

    @media (--tablet-portrait-up) {
        font-size: 1.6rem;
    }
}
```

### [Modular Scale](https://www.modularscale.com/)
A modular type scale has been configured, with CSS variables used to grow and shrink text as needed, depending on context
or breakpoint.

Variables seen here, mapping to an augmented 4th scale:
```css
:root {
    --step-up-4: 3.998em;
    --step-up-3: 2.827em;
    --step-up-2: 1.999em;
    --step-up-1: 1.414em;
    --step-down-1: 0.707em;
    --step-down-2: 0.5em;
    --step-down-3: 0.354em;
    --step-down-4: 0.25em;
}
```

## Technologies Used

* Webpack - Build tool
* PostCSS - CSS build pipeline
* CSSNext - Future CSS features enabled & polyfilled today!
* Firebase - Static hosting
* HTML5 Boilerplate - For all the files I didn't want to make from scratch

## FAQ

> Who are you?

I'm Avery! You can learn more about me at the site linked above.

> What is giant robot bee?

It's a combo reference to Invader Zim and Mega Man. If that means nothing to you, I recommend Google.

> Why didn't you use React/Angular/Vue/etc?

Don't be like this.