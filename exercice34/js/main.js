$(document).ready(function () {
    $("button").click(function () {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/" + $("input").val(), // ou ${$("input").val()}
            success: function (data, status, response) {
                $("#country").html(`${data[0].name}`)
                $("#capital").html(`${data[0].capital}`)
            }
        })
    })
})
