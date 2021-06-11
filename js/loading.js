var params = {
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop:false,
  autoplay: false,
  path:"/js/HarrisonLoading2.json",
  
};
var anim;
anim = lottie.loadAnimation(params);
  // lottie.stop();

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

