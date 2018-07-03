/*global $*/

$(document).ready(function () {
      
      $("#uno").click(function(){
        var currentWidth = $("#uno").css("width");
        var currentheigth = $("#uno").css("height");
        if (currentWidth && currentheigth == "200px") {
                $("#uno").css({
                    "height": "400px",
                    "width":"400px"
                });
        }
         else if (currentWidth && currentheigth == "400px") {
          $("#uno").css("width", "200px");
              $("#uno").css("height", "200px");
         }
      });
      });