// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
//$('.navbar-pmn .dropdown').on('show.bs.dropdown', function (e) {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
//$('.navbar-pmn .dropdown').on('hide.bs.dropdown', function (e) {
//    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//});


//$(".navbar-pmn").waypoint(function (dir) {
//    if (dir === "down") {
//        $(".navbar-pmn").addClass("navbar-fixed-top");
//    } else {
//        $(".navbar-pmn").removeClass("navbar-fixed-top");
//    }
//}, { offset: 75 });


$("body").on("click", ".open-image tile, .open-image tile-large", function () {
    var src = $(this).find(".img").attr("src");

    if (src)
        window.open(src.replace("-tile", ""));
})
