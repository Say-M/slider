const initialize = (selector, options) => {
  //basic selector
  const sliderContent = document.querySelector(selector)
  const sliderItems = document.querySelectorAll('.slider-item')

  //configuration
  const config = options
  // const config = {
  //   perItem: 4.5, // always convert into lowest integer
  //   gap: '0.5rem', //must be string with unit
  //   navigation: true,
  //   loop: true,
  //   duration: 3000, // default 3s
  //   responsive: {
  //     576: {
  //       perItem: 1,
  //     },
  //     768: {
  //       perItem: 2,
  //     },
  //     992: {
  //       perItem: 3,
  //     },
  //   },
  // }

  //initial slider configuration
  let current = 0
  let perItem = Math.floor(config.perItem)

  //make essential styles in slider-item
  sliderContent.style.margin = `0 -${config.gap}`
  sliderItems.forEach((sliderItem) => {
    //   sliderItem.firstElementChild.innerHTML = sliderItem.innerHTML.replace(
    //     '<a',
    //     '<a draggable="false"'
    //   )
    const divWrapper = `<div style='margin:0 ${config.gap}'>${sliderItem.innerHTML}</div>`
    sliderItem.innerHTML = divWrapper
    sliderItem.style.minWidth = 100 / perItem + '%'
    sliderItem.style.maxWidth = 100 / perItem + '%'
    sliderItem.addEventListener('drag', (e) => {
      e.preventDefault()
      console.log(e.clientX)
    })
  })

  //handle auto loop
  let intervalId //store autoLoop interval function
  const autoLoop = () => {
    if (-current <= sliderItems.length - perItem) {
      current--
      sliderItems.forEach(
        (sliderItem) =>
          (sliderItem.style.transform = `translateX(${current * 100}%)`)
      )
      leftArrow.classList.remove('d-none')
      rightArrow.classList.remove('d-none')
      if (-current >= sliderItems.length - perItem) {
        leftArrow.classList.remove('d-none')
        rightArrow.classList.add('d-none')
        current = 1
      }
    }
    if (current === 0) {
      leftArrow.classList.add('d-none')
      rightArrow.classList.remove('d-none')
    }
  }
  if (config.loop) {
    intervalId = setInterval(autoLoop, config.duration || 3000)
  }

  //handle navigation
  const leftArrow = document.createElement('div')
  const rightArrow = document.createElement('div')
  if (config.navigation) {
    leftArrow.classList.add('left-arrow')
    leftArrow.insertAdjacentHTML(
      'afterbegin',
      `<img src="./assets/icons/simple-left.svg" />`
    )
    rightArrow.classList.add('right-arrow')
    rightArrow.insertAdjacentHTML(
      'afterbegin',
      `<img src="./assets/icons/simple-right.svg" />`
    )
    sliderContent.parentElement.appendChild(leftArrow)
    sliderContent.parentElement.appendChild(rightArrow)
    leftArrow.addEventListener('click', () => {
      if (current === 1 && config.loop)
        current = -(sliderItems.length - perItem)
      if (current <= 0) {
        if (config.loop) {
          clearInterval(intervalId)
          intervalId = setInterval(autoLoop, config.duration || 3000)
        }
        current++
        leftArrow.classList.remove('d-none')
        rightArrow.classList.remove('d-none')
        sliderItems.forEach(
          (sliderItem) =>
            (sliderItem.style.transform = `translateX(${current * 100}%)`)
        )
        if (current === 0) {
          leftArrow.classList.add('d-none')
        }
      }
    })
    if (current === 0) {
      leftArrow.classList.add('d-none')
    }
    rightArrow.addEventListener('click', () => {
      if (config.loop) {
        clearInterval(intervalId)
        intervalId = setInterval(autoLoop, config.duration || 3000)
      }
      if (-current < sliderItems.length - perItem) {
        current--
        leftArrow.classList.remove('d-none')
        rightArrow.classList.remove('d-none')
        sliderItems.forEach(
          (sliderItem) =>
            (sliderItem.style.transform = `translateX(${current * 100}%)`)
        )
        if (-current === sliderItems.length - perItem) {
          rightArrow.classList.add('d-none')
        }
      }
    })
    if (-current === sliderItems.length - perItem) {
      rightArrow.classList.add('d-none')
    }
  }

  //handle responsive perItem
  if (config.responsive) {
    ;['DOMContentLoaded', 'resize'].forEach((event) => {
      window.addEventListener(event, (e) => {
        let array = []
        current = 0
        for (const width in config.responsive) {
          if ((e.target.innerWidth || window.innerWidth) < parseFloat(width)) {
            array.push(width) // store widths into array by
            perItem = Math.floor(config.responsive[array[0]].perItem) //
            sliderItems.forEach((sliderItem) => {
              sliderItem.style.minWidth = 100 / perItem + '%'
              sliderItem.style.maxWidth = 100 / perItem + '%'
            })
          } else {
            perItem = Math.floor(config.perItem)
            sliderItems.forEach((sliderItem) => {
              sliderItem.style.minWidth = 100 / perItem + '%'
              sliderItem.style.maxWidth = 100 / perItem + '%'
            })
          }
        }
      })
    })
  }
}
