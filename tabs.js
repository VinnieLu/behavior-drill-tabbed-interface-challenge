$(document).ready(function () {
	$("#integrity").css("display", "block")

  p = $(".tabs").find("li")
  $(p[0]).on("click", function(event) {
  	event.preventDefault()
  	$("#kindness").css("display", "none")	
  	$("#whole_self").css("display", "none")
	$("#integrity").css("display", "block")
	$(p[1]).css ({"border": "0px", 
  		"margin-bottom": "0px"})
  	$(p[2]).css({"border": "none", 
  		"margin-bottom": "none" })
  	$(p[0]).css({"border": "1px solid #ccc",
    "border-bottom": "1px solid white",
    "border-top-left-radius": "4px",
    "border-top-right-radius": "4px",
    "margin-bottom": "-1px",
    "height": "31px",
    "padding": "9px 14px" })
  });

  $(p[1]).on("click", function(event) {
  	event.preventDefault()
  	$("#integrity").css("display", "none")
  	$("#whole_self").css("display", "none")
  	$("#kindness").css("display", "block")
  	$(p[0]).css ({"border": "0px", 
  		"margin-bottom": "0px"})
  	$(p[2]).css({"border": "none", 
  		"margin-bottom": "none" })
  	$(p[1]).css({"border": "1px solid #ccc",
    "border-bottom": "1px solid white",
    "border-top-left-radius": "4px",
    "border-top-right-radius": "4px",
    "margin-bottom": "-1px",
    "height": "31px",
    "padding": "9px 14px" })
  });

  $(p[2]).on("click", function(event) {
  	event.preventDefault()
  	$("#kindness").css("display", "none")
  	$("#integrity").css("display", "none")
    $("#whole_self").css("display", "block")
    $(p[0]).css ({"border": "0px", 
  		"margin-bottom": "0px"})
  	$(p[1]).css({"border": "none", 
  		"margin-bottom": "none" })
  	$(p[2]).css({"border": "1px solid #ccc",
    "border-bottom": "1px solid white",
    "border-top-left-radius": "4px",
    "border-top-right-radius": "4px",
    "margin-bottom": "-1px",
    "height": "31px",
    "padding": "9px 14px" })
  });
});

