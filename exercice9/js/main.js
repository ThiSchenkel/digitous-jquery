function afficherText() {
    $("#text").css("display", "block")
}
$(document).ready(function () {
    $("button").click(function () {
        afficherText();
    })
});

