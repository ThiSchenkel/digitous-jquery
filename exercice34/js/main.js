$(document).ready(function () {
    $("button").click(function () {
        console.log($("input").val());
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/usa",
            success: function (data, status, response) {
                $("#country").html(`${data[0].name}`)
                $("#capital").html(`${data[0].capital}`)
            }
        })
    })
})