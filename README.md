# Furtive

A forward-thinking, lightweight, CSS microframework. Minimal by design.

__3.96kB gzipped.__

Furtive is _truly_ mobile-first and nearly all dimensions are done in `rem`.
It also has a small footprint, cutting down on the bandwidth necessary
for downloading CSS. Furtive is intended to be just that, furtive. It's
the perfect starting point to get your project up and running.

Furtive remains lightweight because it doesn't preoccupy itself with older browsers.
As a result, Furtive can use cutting edge tech like [flexbox](http://caniuse.com/#search=flex),
[SVGs](http://caniuse.com/#search=svg), and limited vendor prefixing. It's also available
in SCSS, CSS, Stylus, and comes with a gulpfile for customizing the build.

## Installation

You can install via [bower](http://bower.io):

```
$ bower install --save furtive
```

Or, you can install via [npm](http://npmjs.org):

```
$ npm install --save furtive
```
Or, you can clone the source:

```
$ git clone https://github.com/johnotander/furtive.git
```

### Using the SCSS

In your SCSS file, you can import furtive:

```scss
@import "/path/to/furtive/scss/all";
```

Or, if you like, you can just import a subset of the files, they're located in the
`scss` directory.

#### Customizing the SCSS

Furtive contains a file `scss/_variables.scss`, which allows for variable customization:

```scss
$font-family: 'Lato', Helvetica, sans-serif;
$dark-gray: #222;
$text-color: $dark-gray;
$body-bg: #fafafa;

@import "/path/to/furtive/scss/all";
```

### Using the CSS

Furtive provides two CSS files: `furtive.css`, and a minified version `furtive.min.css`. In
order to use one, you can add a `<link>` in your `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... -->
  <link rel="stylesheet" href="/path/to/furtive/css/furtive.min.css">
  <!-- ... -->
</head>
<body>
  <!-- ... -->
</body>
</html>
```

### Using the Stylus

Similarly to the SCSS option, you can import stylus files as well, all stylus files
are in the stylus directory.

## Usage

Detailed documentation and examples can be found at [furtive.co](http://furtive.co).

#### Keep Furtive as lightweight as possible

It's recommended to use Furtive with [uncss](https://github.com/giakki/uncss), ensuring that
only the CSS that is being used are included. An example of uncss in action with gulp:

```javascript
gulp.task('uncss', function() {
  return gulp.src('css/furtive.min.css')
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(uncss({ html: ['index.html'] }))
    .pipe(rename('index.furtive.min.css'))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest('./'));
});
```

The above example task is what's used by [furtive.co](http://furtive.co). It allows that page
to save about 30%, shrinking even further from 2.5kB to 1.8kB.

```
furtive [uncss●●] % gulp uncss
[12:23:43] Using gulpfile ~/code/frnt/furtive/gulpfile.js
[12:23:43] Starting 'uncss'...
[12:23:43] furtive.min.css 2.52 kB (gzipped)
[12:23:44] index.furtive.min.css 1.8 kB (gzipped)
[12:23:44] Finished 'uncss' after 970 ms
```

## License

MIT

## Contributing

1. Fork it
* Create your feature branch (`git checkout -b my-new-feature`)
* Install the dependencies and run gulp (`npm i && gulp`)
* Commit your changes (`git commit -am 'Add some feature'`)
* Push to the branch (`git push origin my-new-feature`)
* Create new Pull Request

## Thanks to the following:

* [Normalize](http://necolas.github.io/normalize.css) for the foundation.
* [BASSCSS](http://basscss.com) for the inspiration.
* [Fluidity](http://fluidity.sexy) for the inspiration.
* [mincss](http://mincss.com/) for the inspiration.

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
