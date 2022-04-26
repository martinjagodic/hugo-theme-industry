# Grid & Breakpoints Library

My own grid library based on (CSS Grid)[https://css-tricks.com/snippets/css/complete-guide-grid/]. One day a package on NPM.

## Global Properties
1. $breakpoints - edit the `$breakpoints` map to adapt them for your project's needs.
2. $columns-count - you can work with a grid with any number of columns. 12 is reccommended.
3. grid vars: `--container-padding`, `--content-width`, `--grid-row-gap`, `--grid-column-gap` - play with these to get the grid from design. You can adjust them for any breakpoint.

## Grid Classes
### Columns

An example of a grid where columns will be 12 cols wide on zero - up, 6 cols on sm-up and 4 cols on lg-up screens.

```html
<div classs="grid">
  <div class="col-12 col-sm-6 col-lg-4"></div>
  <div class="col-12 col-sm-6 col-lg-4"></div>
  <div class="col-12 col-sm-6 col-lg-4"></div>
  <div class="col-12 col-sm-6 col-lg-4"></div>
  <div class="col-12 col-sm-6 col-lg-4"></div>
  <div class="col-12 col-sm-6 col-lg-4"></div>
</div>
```

### Order

Reorder grid items with `order-BP-NUM` classes

```html
<div classs="grid">
  <div class="col-12 col-md-6 order-md-1"></div>
  <div class="col-12 col-md-6 order-md-1"></div>
</div>
```

### Offset

Offset grid items with `offset-BP-COL` classes. If an item is after an offset one in the same, line, you have to offset that too.

```html
<div classs="grid">
  <div class="col-12 col-md-3 offset-md-3"></div>
  <div class="col-12 col-md-3 offset-md-6"></div>
</div>
```

## Helpers

You can use the following breakpoint-based helpers:

- `hide-BP-down` and `hide-BP-up` to hide an item
- `.no-padding-BP-down` and `.no-padding-BP-up` to remove paddings
- `.no-margin-BP-down` and `.no-margin-BP-up` to remove margins
