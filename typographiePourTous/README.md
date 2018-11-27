# Bookstyler: a paged.js starter kit

The bookstyler starter-kit contains everything you need to make a book with paged.js

You can install and test it like this:

1. Install node.js if you haven't already.
1. create a folder and open a terminal inside it. Clone the repo there, using `git clone https://gitlab.pagedmedia.org/julientaq/bookstyler.git`
1. install grunt with `npm install -g grunt-cli`
1. run `npm install` inside the cloned folder 
1. run `grunt` in the terminal and browse the `localhost:9000` in chrome or chromium.



## Prerequisites 

Bookstyler use postcss plugins to handle nested css, import files, some colors functions, etc. If that's too complicated, you can use real css in a simple file, and not worry about postcs.

When you run `grunt`, it will look at the content of your src folder and copy everything in the images, fonts, js, and content folders while processing the css to transform it into a single file.

That's why you only need to add this link to the html: 
`<link href="css/book.css" media="screen" rel="stylesheet" type="text/css">`


## Road map

- add styles and update the existing stylesheet
- add pug/jade/etc. support to handle multiple html preprocessor

Version 0.0.5

## Licence


The MIT licence (MIT)

Copyright 2018 — pagedmedia.org

This software is distributed under the MIT licence.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.