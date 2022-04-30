// ====================== js btn to top==================
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300)
            $('i.btn-to-top').css({
                opacity: '1',
                'pointer-events': 'auto'
            });
        else {
            $('i.btn-to-top').css({
                opacity: '0',
                'pointer-events': 'none'
            });
        }
    });
    $('i').click(function() {
        $('html').animate({ scrollTop: 0 }, 500);
    });
});