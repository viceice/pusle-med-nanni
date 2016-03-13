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


$("body").on("click", "div[data-role=tile]", function () {
    var src = $(this).data("href");

    if (!src)
        return;

    var dlg = $("#preview");
    dlg.find("img.dlg-preview").attr("src", src);
    dlg.data("dialog").open();
})
