Welcome to **electron-riot-typescript**!
========================================

This is a start-app sample project for desktop based application using electron.
The technologies used are the following:

 - [Electron](https://electron.atom.io/) as the main framework to make the whole application work as a desktop app.
 - [RiotJS](http://riotjs.com/) as a "front-end" framework.
 - [TypeScript](http://www.typescriptlang.org/) as a Javascirpt superset.
 - [SCSS](http://sass-lang.com) to make our life easier with CSS.

---

### Installation steps
To make it work, follow these steps:
 1. Clone the repository
 2. ``` cd electron-riot-typescript ```
 3. ``` npm i ```
 4. ``` grunt ```
 5. ``` npm run start ```

 ---

### Relevant files and folders
|                       | TYPE   | PURPOSE                                                                                         |
 ---------------------- | ------ | ------------------------------------------------------------------------------------------------
| `./dist`              | folder | Where the "compiled" code ends                                                                  |
| `./src`               | folder | Where the source files are stored                                                               |
| `./src/tags`          | folder | Where the RiotJS tag files are stored                                                           |
| `./src/compiled-tags` | folder | The Grunt tasks that compiles the tags inside `./src/tags` puts the output files in this folder |
| `./src/main.js`       | file   | The Electron core file that is executed when the application starts                             |
| `./src/renderer.js`   | file   | The JS file that is included in the `./src/index.html`. Represents your front-end               |

Every tag contains the "html" file (.tag), the related TypeScript file (.ts), and the stylesheet (.scss).
Inside the .tag file you have to include the .ts and .scss files as follows:
```
<script src="src/tags/sample/sample.ts"></script>
<style> @import 'src/tags/sample/sample'; </style>
```
Where `sample` is the name of your tag.

---

### While editing
When you edit this progect, you can run on a console the command `grunt watch`,  that'll do the following:
	1. Compiles your tags inside the `./src/tags` folder
	2. Concatenates and minifies the Riot file, the compiled tags, and the renderer.js
	3. Minifies the `./scr/main.js`
	4. Copies the `./src/index.html` and the `./src/img` folder
	5. Compiles the SCSS files inside the `./src/style/scss` folder
	6. Minifies the output of the previous step

The output of each step will be saved in the `./dist` folder.

---

If you've got any question, please let me know and I'll try to answer as soon as possible!
<br><br><br><br>

> **Note:** The cool dog in the buddy tag is cool.

