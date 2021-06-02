// TweenMax.from(".hover-img", 1, {
//   y: '100',
//   opacity: 0,
//   ease: Expo.easeInOut
//   })


// let rule = CSSRulePlugin.getRule(".cssRule:hover::after")
// let bottle = document.querySelector('.bottle-item-1')
// bottle.addEventListener('mouseover', (e) => {
//   let target = e.target.closest('div')
//   if (!target) {return}



//   TweenMax.to(".hover-img", 1, {
//     y: '-100',
//     opacity: 1,
//     ease: Expo.easeInOut
//     })
// })
TweenMax.from("#main-title", 1, {
  delay: 1,
  scale:1,
  opacity: 0,
  ease: Expo.easeInOut
  })
$(document).ready(function(){
  TweenMax.to("#loading", 1, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
    })
    console.log('done');
    TweenMax.to("#main-title", 1, {
      delay: 1,
      scale:1,
      opacity: 1,
      ease: Expo.easeInOut
      })
$('body').removeClass('position-fixed');
})
// Pace.on('done', function() {
      
 
// });
$('.slider-bottles').slick({
  autoplay:true,
  arrow:false,

});
$('.tilt-test').tilt({
  scale: 1.2 ,
})
$('.strong-card').tilt({
  scale: 1.2 ,
})
