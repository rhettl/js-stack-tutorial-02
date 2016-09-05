'use strict';

/**
 * You may notice that `const` is used here instead of `var`
 * `const` is a feature of ES6, which not all browsers implement yet.
 * The gulp file uses Webpack and Babel to package and transpile your code
 * to ES5.5 standards. You can read more about ES6 features here,
 * https://github.com/lukehoban/es6features. While I don't personally use
 * all of its features, I recommend `const` and `let`, `...rest`, arrow
 * functions (depending on the circumstance), function argument defaults
 * (depending on the circumstances), and template strings.
 *
 * These features are optional and the transpiler (babel) will handle ES5.5
 * just as easily as it will ES6. Above all else, readability paramount.
 */


// This includes jQuery AND attatches it to the window at $ and jQuery,
// where bootstrap and other jQuery plugins expect to find it.
const $ = require('jquery');
window.jQuery = $;
window.$ = $;

// This imports the bootstrap JS file which looks for it at window.jQuery
require('bootstrap-sass');
