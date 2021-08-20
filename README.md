[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<p align="center">
An awesome Slider created by <a href="https://facebook.com/sayem.me">Mohammad Sayem</a>
<br />
<a href="https://say-m.github.io/slider/">View Demo</a>
·
<a href="https://github.com/Say-M/slider/issues">Report Bug</a>
·
<a href="https://github.com/Say-M/slider/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Slider</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are many slider available on GitHub but I made this for my practice purpose. If you want you can use this in your project. This is very simply coded so that you can understand the code easily.

<!-- BUILD WITH -->

### Built With

- Just Vanilla Javascript

<!-- GETTING STARTED -->

## Getting Started

First download this repo and extract this repo. create a .html file. Then write basic html elements.
Then create assets folder

### Installation

Go to assets/css and grab the css,
Go to assets/icons and grab the icons folder and
grab the js
and put this into the your assets folder.
css

```
<link rel="stylesheet" href="./assets/css/styles.min.css" />
```

js

```
<script src="./slider.js" defer></script>
```

#### Add slider HTML layout

```
<section class="slider">
      <div class="container">
        <div class="slider-wrapper">
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-1.png" alt="" />
            </a>
          </div>
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-2.png" alt="" />
            </a>
          </div>
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-3.png" alt="" />
            </a>
          </div>
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-4.png" alt="" />
            </a>
          </div>
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-5.png" alt="" />
            </a>
          </div>
          <div class="slider-item">
            <a href="#">
              <img src="./assets/images/slider-6.png" alt="" />
            </a>
          </div>
        </div>
    </div>
</section>
```

#### Initialize Slider

Finally, we need to initialize Slider in JS:

```
<script>
    initialize('.slider-wrapper', {
        perItem: 4, // always convert into lowest integer
        gap: '0.5rem', //must be string with unit
        navigation: true,
        loop: true,
        duration: 3000, // default 3s
        responsive: {
          576: {
            perItem: 1,
          },
          768: {
            perItem: 2,
          },
          992: {
            perItem: 3,
          },
        },
    })
</script>
```

##### perItem

perItem is for defining how many slider will show in columns
It's always take an integer. If floating number is given it will convert into lowest integer

##### gap

gap is for defining how much margin should took place horizontally.
It's always take a string. So, you can add different units such as px, rem, em, etc.

###### navigation

navigation is for the arrow. So that, you can navigate through the slider.
It's always boolean

###### loop

if you wanna navigate the slider use loop.
It's always boolean

###### duration

if you loop the slider duration will help you after how many seconds left it loop through
It's always integer

###### responsive

if your wanna update perItem after some breakpoint and make slider responsive in different screen size responsive key will help you.
It's always an object of objects. Which contain different key of number (which represent window size) and it's value is an object and perItem key for setting different columns in different widths.