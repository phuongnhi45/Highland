$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }

  var header = document.getElementById("size");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  function myFunction1() {
    document.getElementById("myDIV").style.display = 'block';
    document.getElementById("content").style.display = 'none';
    document.getElementById("myDIV2").style.display = 'none';
  }
  function myFunction2() {
    document.getElementById("myDIV2").style.display = 'block';
    document.getElementById("content").style.display = 'none';
    document.getElementById("myDIV").style.display = 'none'
  }
  function myFunction() {
    document.getElementById("content").style.display = 'block';
    document.getElementById("myDIV2").style.display = 'none';
    document.getElementById("myDIV").style.display = 'none';
  }
});