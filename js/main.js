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
$(document).ready(function(){
  TweenMax.to("#loading", 1, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut
    })
    console.log('done');
$('body').removeClass('position-fixed');
})
// Pace.on('done', function() {
      
 
// });

$('.tilt-test').tilt({
  scale: 1.2 ,

})
