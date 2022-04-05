# :zap: Javascript Scroll Navbar

* Wes Bos Youtube Tutorial: [Vanilla JavaScript Sticky Nav - #JavaScript30 24/30](https://www.youtube.com/watch?v=5FLOBCGH3_U&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=24).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/javascript-scroll-navbar?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/javascript-scroll-navbar?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/javascript-scroll-navbar?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/javascript-scroll-navbar?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Javascript Scroll Navbar](#zap-javascript-scroll-navbar)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Tutorial Code to add a class to change the nav bar when the user scrolls. Also changes the width of the text div.

## :camera: Screenshots

![Example screenshot](./img/nav.png).

## :signal_strength: Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open `index.html` in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* compares scroll position with top of Navigation and adds the 'fixed-nav' class when they are equal.

```javascript
fixNav = () => {
  console.log('window.scrollY', window.scrollY, 'topOfNav', topOfNav);
  if(window.scrollY >= topOfNav) {
    console.info('window.scrollY >= topOfNav');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav'); 
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav'); 
  }
}
```

## :cool: Features

* At about scrollY = 337px the css class change occurs to 'fixed-nav'.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing

## :clap: Inspiration

* Wes Bos Youtube Tutorial: [Vanilla JavaScript Sticky Nav - #JavaScript30 24/30](https://www.youtube.com/watch?v=5FLOBCGH3_U&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=24)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
