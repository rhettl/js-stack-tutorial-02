# Build a Backend

This is the second project in a line of projects intended to teach a full 
JavaScript Stack.

In the previous project, you worked on creating a Static Personal Website with 
homepage, some static pages, and blog (including feed view and article 
view) totaling to 4 page types. 

You worked with multiple tools/technologies, including:

- Bootstrap
- JavaScript/jQuery (minimal)
- HTML
- CSS (with option to learn SASS)
- Font Awesome (icon framework \[optional])

In this next project, we will add a backend to the static website you 
already created. With this next project I hope you learn:

- Node Package Manager (NPM)
- Requiring Modules and Component Modularization
- Express basics
- Templating (via Handlebars)
- Markdown



## Structure

I've provided a bare-bones file structure. You may notice that front 
end and back end are cleanly separated. While there are files they can 
share, essentially they live separated. `/public/**` is for the client 
side and most everything else is for server side. `/views/**` is an odd 
exception, as it's for server side, but is rendered and handed to the 
client. Clients cannot directly access `/views/**`.

  
  
```
> Root/             // This is the root of the site
  |                 //  - Only subfolders and pages for working with the 
  |                 //    site belong here.
  > bin/              // Holds the init file for web or other.
    - www.js            // This file requires the app and starts it on its assigned port
  > lib/              // backend dependant modules of the main app and its routes
  > public/           // Root folder for Files publicly visible
    > build/            // compiled public files. 
    > source/           // files which may or may not need to be compiled before sending to ./build/
      > images/           // for all images. Usually don't need compilation, but here for consistancy
      > scripts/          // for your javascript files
        > lib/              // modules for the client-side JS
        - main.js           // Your main client-side javascript file.
      > styles/           // for your CSS/SASS
        > lib/              // dependancies for your main.scss
        - main.scss         // (optional) SASS file to compile to CSS 
  > routes/           // Holds all routs and controller logic
    - sample.js         // Sample route file to explain route anatomay
  > views/            // Holds HTML with templating information for generating views
    - sample.hbs        // Handlebars bosy sample file
    - layout.hbs        // main layout file in which body content is placed before send to requester
  - .editorconfig     // tells your editor how to act
  - .gitignore        // don't worry about this yet
  - gulpfile.js       // task runner for compile steps and deploy. don't worry about this yet
  - package.json      // tells NPM (Node Package Manager) about your project
  - README.md         // This file
```
*Note, `.placeholder` files let git keep an empty folder. They are 
intended to be empty and you may ignore them.

It should be noted that there are many different ways to organize the 
files of a project. One of the big points where development teams will 
differ is the client side files. In this example, I added `/public/source` 
and `/public/build`. This is to provide clear compiled and uncompiled 
folders and allowing access only to `/public/build` but keeping 
`/public/source` private. This access is also abstracted away so the 
user sees files like `/public/build/scripts/main.js` as `/scripts/main.js`. 
The `/gulpfile.js` is responsible for handling the compilation from 
`/public/source` ro `/public/build`.

Some teams prefer to communicate changes in source code alone and have 
the server render the compiled file while live. Instead the structure 
employed here means That for each change to the source file you will 
commit both source and compiled files to your git repo. So when 
transferring changes to the server, the compiled files will already be 
made using the development machine. This isn't necessarily a better 
strategy than the former, it's just my preference.   





## Before you Start

You will want to migrate the files from the previous project into the 
new structure. 

- `/*.html` :arrow_right: `/views/*.hbs` -- you will need to separate 
  the layout into `/views/layout.hbs` and the content into their own 
  files, ex: `/index.html` :arrow_right: `/views/index.hbs`
- `/scripts/*.js` :arrow_right: `/public/source/scripts/*.js` and 
  `/public/source/scripts/lib/*.js`
- `/styles/*.scss` :arrow_right: `/public/source/styles/*.scss` and 
  `/public/source/styles/lib/_*.scss`
- `/images/*` :arrow_right: `/public/source/images/*`


## Mobile first Development

Normally, I would recommend design the mobile version of your site then 
design the desktop version, but for this project we will ignore that to 
make life easier.




## Making the First Page

For the first page, you won't have a header, footer, or navbar yet. 
Start by copying the `/sample.html` to `/index.html` (or another page if 
you prefer to start on something other than the homepage). The new page 
should be on the project root directory. After you complete the first 
page, you can copy that to create the next -- that way it keeps your 
header, footer, and navbar.




## Project Pages

The pages you will make are relatively easy to structure, but if you are 
like me, it may be hard to decide how you **want** things to look.

I recommend the content for these pages be mostly real. You obviously 
won't have a lot of blog posts, but try to limit the usage of 
`lorem ipsum` text and placeholders. The more real content you have, the 
happier you will be with the final outcome and the more you are likely 
to care about it.

### Homepage

The home page would be a good place the have a picture of you, which you 
are okay showing the world, something paragraphs about yourself, and a 
list of ways one may contact you (i.e. twitter, linkedin, etsy, etc).

As important, are the headers and footers. You will want to make them 
here so you can copy them to the other pages. The more complete they are 
here, the less double-work you'll need to do later.  

### Static Pages

Make as many of these as you like, I recommend making a skills or 
projects/portfolio page. If you have multiple hobbies and want to 
showcase different hobbies, you may consider a different static page per 
each one.

Most of what is on here is raw content. structure it simply and make it 
easy for people to read and understand at what they are looking. 

### Blog Article

This page will have one single blog post. Plan to have 0, 1, or maybe a 
couple images and plenty of content. You will want tags. Especially if 
you have many hobbies and wish to write about all of them. 

A blog is important for programmers and pretty much anyone who wants to 
get their name out, because it shows your ideas and neat things you do. 
It allows you to help teach others or document a learning process. A Blog
and twitter can be vital to getting your next job.
  
### Blog Posts

This page is a list of recent blog posts. Remember to add a list of 
common tags and pagination. 


 
 
### Anatomy of sample.html

Open [sample.html](sample.html) and read the comments. They should 
provide some helpful information about what is happening. 

In short, this file doesn't have any content other than a bootstrap grid 
example. I recommend reading about the [grid][1] system in [bootstrap's 
documentation][2], there is a short version on this readme's 
[Bootstrap Section](#bootstrap)

While the best practice keeps changing, you may notice that the 
Stylesheets are linked in the head and the JavaScripts included just 
above the footer `</body>`. This is to facilitate displaying content to 
the user faster.




## Short Descriptions of Technologies

### Bootstrap

[Bootstrap's Website][2]

Bootstrap is a framework which strives to make rapid development mobile 
to large screen websites easier. It does so by providing a large number 
of well named, very modular, relatively easy to use CSS rules. The way 
they are implemented allows the user to nearly forget he/she is using 
CSS.

#### Main Components

Paramount of the various rules are the grid system. [Bootstraps Docs][1]
can give a far superior guide than I will, but here's a jump start:
 
1. `.container` doesn't nest well. While you can have more than one, 
you shouldn't put one inside another. 
2. `.container` is the field where you plant your `.row`s. 
3. `.row` holds `.col-xx-00` (columns) 
4. `.col-xx-00` have more than 48 variations `xx` is screen width (xs,sm,md,lg)
and `00` is colspan. 
5. ex: 3 Rows with 1, 2, and 4 columns

  ```html
  <div class="row">
    <div class="col-xs-12"></div>
  </div>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
  <div class="row">
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
    <div class="col-xs-3"></div>
  </div>
  ```
  
6. `.col-xx-00` can contain anything, including other `.col-xx-00`, but
if you want to nest `.col-xx-00`, wrap them in a `.row`. ex: 1 column 
containing 2 rows with 2 and 4 columns respectively.

  ```html
  <div class="row">
    <div class="col-xs-12">
      <div class="row">
        <div class="col-xs-6"></div>
        <div class="col-xs-6"></div>
      </div>
      <div class="row">
        <div class="col-xs-3"></div>
        <div class="col-xs-3"></div>
        <div class="col-xs-3"></div>
        <div class="col-xs-3"></div>
      </div>
    </div>
  </div>
  ```
  
7. in the same screen width, columns totalling over 12 will appear as 
multiple rows.

Bootstrap's recommendation, and mine is to design websites from mobile, 
then expand the screen size and add design to fill the space, instead of 
the other way, designing big and compressing. Since this is the 
beginning, I recommend ignoring that best practice until you have more 
experience with the full stack. Of course, if you feel comfortable with 
it, please feel free to try mobile first design.   




### jQuery

While jQuery is a part of this project, it is mainly as a dependancy of 
Bootstrap. There probably won't be a great need to employ a large amount 
of jQuery.

In case you don't know, jQuery is a library which helps find and 
manipulate parts of the webpage using JavaScript.
 
 
 
 
### HTML

HTML is how the data is structured. If you don't know a little about 
HTML, this may not be the right project to start you off. You might try 
[Code School][3] or [W3Schools][4].




### CSS

CSS is how the site is made pretty. If you don't know this you may not 
want to start here. Try [Code School][3] or [W3School][5] 

#### SASS

[SASS Website][12]

SASS, Syntactically Awesome StylesSheets, or SCSS, Sassy CSS, is a way 
to compile CSS. SASS adds variables, functions, nesting, and more to 
CSS. To learn all about it, I recommend reading through [the guide][6].

In brief, here are some small improvements which will help your code, 
but not overwhelm your learning:

1. Nesting: 

  ```sass
  .person {
    border: 1px solid #000;
    padding: 20px;
    
    &.compact { // & => parent === .person.compact
      padding: 7px;
    }
    h2 {
      font-size: 22px;
    }
    .biography {
      background-color: #fcfcfc;
      
      a {
        color: purple;
      }
    }
  }
  
  /** 
   * Compiles to 
   */
  .person {
    border: 1px solid #000;
    padding: 20px;
  }
  .person.compact {
    padding: 7px;
  }
  .person h2 {
    font-size: 22px;
  }
  .person .biography {
    background-color: #fcfcfc;
  }
  .person .biography a {
    color: purple;
  }
  ```
  
2. Variables and Math

  ```sass
  $base-font: 14px;
  
  body {
    font-size: $base-font;
    h5 { font-size: $base-font * 1.2 }
    h4 { font-size: $base-font * 1.4 }
    h3 { font-size: $base-font * 1.6 }
    h2 { font-size: $base-font * 1.8 }
    h1 { font-size: $base-font * 2.0 }
  }
  
  /** 
   * Compiles to 
   */
  body {
    font-size: 14px;
  }
  body h5 {
    font-size: 16.8px;
  }
  body h4 {
    font-size: 19.6px;
  }
  body h3 {
    font-size: 22.4px;
  }
  body h2 {
    font-size: 25.2px;
  }
  body h1 {
    font-size: 28px;
  }
  
  ```
  
3. Helper Functions 

  ```sass
  $red: #d80000;
  $dkbrown: #2b1d0e;
  
  body {
    color: $dkbrown;
    
    h1, h2, h3, h4, h5 { 
      $header-color: mix($dkbrown, $red, 12%); // Brown with a little Red
      color: $header-color;
      
      small {
        color: complement($header-color);
      }
    }
  }
  
  /** 
   * Compiles to 
   */
  body {
    color: #2b1d0e;
  }
  body h1, body h2, body h3, body h4, body h5 {
    color: #5f140a;
  }
  body h1 small, body h2 small, body h3 small, body h4 small, body h5 small {
    color: #0a555f;
  }
  ```
  To be honest, I don't know even know how to use more than the color 
  helpers, but the capabilities of these are simply amazing. Here is a 
  [full list.][13]

#### Compiling SASS

Normally, you would use a compile step to convert SASS to CSS. I added a 
watcher and SASS compiler to the [gulpfile](gulpfile.js). All you will 
need to do is run `npm run watch`, this will look for when you make 
changes to `*.scss` files and automatically convert them to `*.css` with 
the same name. I have started this with `/styles/main.scss`.




### Font Awesome

[Font Awesome Website][7]

Amazing use of web-fonts to make sizable, stylable, colorable, 
accessible (aria) icons. They also managed to breath a grand new life 
into the long, and well, forgotten `<i></i>` tag.

Take a look at the [Font Awesome Icons page][8]. There are an amazing 
number of icons. To implement one, just put an `<i>` tag down with the 
appropriate `fa` classes for icon content, size, and modifiers 
(like spin or color inversion)

For example: if I wanted the [heart symbol][9]:
```html
<i class="fa fa-heart"></i>
```
For a large heart I could add `fa-lg`, `fa-2x`, `fa-3x`, etc.

#### Comparison with Bootstrap Glyphicons

There isn't anything wrong with Bootstrap's Glyphicons, but Font Awesome 
has more icons and are (form me at least) easier to use. So much easier 
that it is worth importing a whole additional stylesheet and font set 
despite having some icons already present.  




## Deploying to GitHub Pages

GitHub pages is free static hosting provided by GitHub. When properly 
set up, a report at URL `https://github.com/<user>/<repo>` will spawn a 
static website at `https://<user>.github.io/<repo>`.

There is a gulp task to deploy to GH Pages, but there are some steps to 
take before it will work, These steps require [git][10]:

1. Initialize a git repo at the root of this project. If you have a repo 
there already, you will have a `.git` file (it may be hidden), in which 
case, move on to step #2. To initialize a repo, use `git init`.

2. Log into [GitHub][11] (create and account if needed) and make a new 
repo named whatever you like. Keep in mind the naming scheme from 
earlier, `https://<user>.github.io/<repo>`. So your user name will 
replace `<user>` and the repo name will replace `<repo>`. 

3. Copy the link to the repo, it should be in the format 
`https://github.com/<user>/<repo>`. Be sure to make it the HTTPS version,
**not** the HTTP version of the URL

4. Back at in the project files on your computer, set the URL of remote 
'origin' to the newly created repo's address. If your repo is 
`https://github.com/<user>/<repo>` you will use `git remote add origin https://github.com/<user>/<repo>` 
if you just created the repo and `git remote set-url origin https://github.com/<user>/<repo>` 
if you cloned the repo initially

5. push to the remote repo and **set the default upstream**. 
`git push -u origin master` The `-u` is important as it will tell git 
that this remote location is the default repo for this code. 


Now that the repo is setup on GitHub, you are almost ready. Your GitHub 
Pages will not render if your email address is not confirmed. If the 
address is **not** confirmed, GitHub will warn you on login. 

`npm run deploy` will collect all the project related files (basically 
anything I didn't create), commit them to a git branch, and push them to 
a branch on GitHub intended for use with GH Pages. 

You should now be able to view your project at the 
`https://<user>.github.io/<repo>` location.



## Text Editors and IDEs

Programmers usually use either an advanced text editor or an Integrated 
Development Environment (IDE) to write their code. While the difference 
between the two isn't that important at this stage, it is safe to say 
that IDEs have more built in features out of the box. Choosing the right 
Environment to work in can make your life easier in ways you probably 
don't yet imagine.

Some popular editors and IDEs include:

- [Sublime Text][14] - A very mature text editor which most of the 
  features of the big IDEs
- [GitHub Atom][15] - Newer Text editor by GitHub. Very similar to 
  Sublime, but hasn't been around quite as long, but has a good following 
  and is a solid product
- [Webstorm][16] - Fully Featured IDE for pretty much everything in the 
  HTML/CSS/JS world. This is my personal Choice, but it costs about $60/yr. 
  Sometimes, you can get the [Early Access Program (EAP)][17] version which is 
  free, but they every once in a while will take it away when they want 
  to heavily sell the newest release.

For this project, I recommend something with:

- A terminal build into the editor
- code highlighting
- zen coding -- speeds up html and css greatly, aka: [emmet][18] 
- .editorconfig support

All three of the above include these out of the box or these can be 
added via plugins.



[1]: http://www.coffeecup.com/help/articles/absolute-vs-relative-pathslinks/
