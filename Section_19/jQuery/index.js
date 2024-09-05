$("h1").css("color", "green");

$(document).keydown(function(event) {
    $("h1").text(event.key);
});

$("h1").click(function() {
    $("h1").css("color", "red");
});