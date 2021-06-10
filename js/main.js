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
        
        var params = {
          container: document.getElementById('lottie'),
          renderer: 'svg',
          loop:false,
          autoplay: false,
          path:"/js/HarrisonLoading2.json",
          
      };

      var anim;

      anim = lottie.loadAnimation(params);
      lottie.stop();
// $('body').waitForImages(function() {
//   lottie.play();
//   setTimeout(() => {
//     $('#loading').fadeOut("normal",function(){
//         $('body').removeClass('position-fixed');
//         $('#loading').remove();
//     })
//   }, 3500)  
//   start() 
// });

// $("body").waitForImages(function(){

//   $("#loader").attr("src", "img/bottleloading.gif");
//   setTimeout(() => {
//     $('#loading').fadeOut("normal",function(){
//         $('body').removeClass('position-fixed');
//         $('#loading').remove();
//     })
//   }, 3500)  
//   start() 
  
// });

// paceOptions = {
//   ajax: false, // disabled
//   document: true, // enabled
//   eventLag: false, // disabled
//   elements: {
//     selectors: ['.my-page']
//   }
// };
var frame=0;

$(document).ready(function() {
  lottie.play();
  setTimeout(() => {
    $('#loading').fadeOut("normal",function(){
        $('body').removeClass('position-fixed');
        $('#loading').remove();
    })
  }, 3800)  
  start() 
});

function start() {
  var duration = 3200; // it should finish in 5 seconds !
  var st = window.performance.now();
  var val=0;
  window.requestAnimationFrame(function step(time) {
    var diff = Math.round(time - st),
      val = Math.round(diff / duration * 100);
    val = val > 100 ? 100 : val;
    // $("#box").css("width", val + "px");
    $("#box").text(val + "%");
    if (diff < duration) {
      window.requestAnimationFrame(step);
    }
  })
}


  // Pace.on('done', function() {
  //   // lottie.play();
  //   $("#loader").attr("src", "img/bottleloading.gif");
  //   setTimeout(() => {
  //     $('#loading').fadeOut("normal",function(){
  //         $('body').removeClass('position-fixed');
  //         $('#loading').remove();
  //     })
  //   }, 3200)     
  //   // Pace.stop();
  // });
  
 
// });


// TweenMax.from("#main-title", 1, {
//   delay: 1,
//   scale:1,
//   opacity: 0,
//   ease: Expo.easeInOut
//   })
// $(document).ready(function(){
 
// })

$('.slider-bottles').slick({
  autoplay:true,
  arrows:false,
  dots:false,
  infinite:true
});
$('.tilt-test').tilt({
  scale: 1.2 ,
});
$('.strong-card').tilt({
  scale: 1.2 ,
});
