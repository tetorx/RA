(function($) {
    $(function() {
    $('ul.labels__tabs').on('click', 'li:not(.labels__tab_active)', function() {
        $(this)
          .addClass('labels__tab_active').siblings().removeClass('labels__tab_active')
          .closest('div.container').find('div.labels__content').removeClass('labels__content_active').eq($(this).index()).addClass('labels__content_active');
        });
    });
})(jQuery);