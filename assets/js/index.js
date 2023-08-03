gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1){
  ScrollSmoother.create({
    wrraper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo('.main-section', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.main-section',
      start: 'center',
      end: '820',
      scrub: true
    }
  })

  let itemsLeft = gsap.utils.toArray('.gallery-left .gallery-item') 
  let itemsRight = gsap.utils.toArray('.gallery-right .gallery-item') 

  itemsLeft.forEach(item => {
    gsap.fromTo(item, {x: -100, opacity: 0}, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })

  itemsRight.forEach(item => {
    gsap.fromTo(item, {x: 100, opacity: 0}, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    })
  })
};