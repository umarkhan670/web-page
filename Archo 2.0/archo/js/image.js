$(function () {

    $(".portfolio .back-img .container-fluid .cluom").mouseover(function () {
        var currentImage = $(this).attr('data-image');

        $(this).parent().parent().parent().find('img').attr("src", currentImage);

    });
});