$(document).ready(function() {
    var front = document.getElementsByClassName("front");
    var back = document.getElementsByClassName("back");
  
    var highest = 0;
    var absoluteSide = "";
  
    for (var i = 0; i < front.length; i++) {
      if (front[i].offsetHeight > back[i].offsetHeight) {
        if (front[i].offsetHeight > highest) {
          highest = front[i].offsetHeight;
          absoluteSide = ".front";
        }
      } else if (back[i].offsetHeight > highest) {
        highest = back[i].offsetHeight;
        absoluteSide = ".back";
      }
    }
    $(".front").css("height", highest);
    $(".back").css("height", highest);
    $(absoluteSide).css("position", "absolute");
  });


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$(function(){
  $('.datepicker').datepicker({
      format: 'mm-dd-yyyy'
    });
});