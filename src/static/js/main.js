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

$('body').on('click', 'div[data-role=tile]', function () {
    var src = $(this).data('href');

    if (!src) return;

    var dlg = $('#preview');
    dlg.find('img.dlg-preview').attr('src', src);
    dlg.data('dialog').open();
});

window.cookieconsent_options = {
    message: 'Diese Website verwendet Cookies zu Werbezwecken und zur Verbesserung des Angebots. ',
    dismiss: 'Ok',
    learnMore: 'Mehr erfahren',
    link: '/about',
    domain: 'pusle-med-nanni.de',
    path: '/',
    theme: '/css/cc.css',
    markup: [
        '<div class="cc_banner-wrapper {{containerClasses}}">',
        '<div class="cc_banner cc_container cc_container--open">',
        '<a href="#null" data-cc-event="click:dismiss" target="_blank" class="cc_btn cc_btn_accept_all">{{options.dismiss}}</a>',
        '<p class="cc_message">{{options.message}} <a data-cc-if="options.link" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>',
        '</div>',
        '</div>',
    ],
};
