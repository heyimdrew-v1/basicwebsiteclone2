$(document).ready(function() {
  $("#about-me-title").hide().fadeIn(5000);


  $("#change-bg-color").click(function() {
    var randomColor = getRandomColor();
    $("body").css("background-color", randomColor);
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  $("#increase-text-size").click(function() {
    changeTextSize(2);
  });

  $("#decrease-text-size").click(function() {
    changeTextSize(-2);
  });

  function changeTextSize(changeAmount) {
    var paragraphs = $("p");
    paragraphs.each(function() {
      var currentSize = parseInt($(this).css("font-size"));
      var newSize = currentSize + changeAmount + "px";
      $(this).css("font-size", newSize);
    });
  }


  $("p").click(function() {
    $(this).css("font-weight", "bold");
  });


  $(".h3e").hover(
    function() {
      $(this).css("background-color", "red");
    },
    function() {
      $(this).css("background-color", "rgba(39, 123, 245, 0.8)");
    }
  );
});






