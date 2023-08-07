let cookieJvns = document.querySelector('#cookieJvns');
if (cookieJvns) {
    cookieJvns.addEventListener('click', function () {
        $.cookie('c_policy', 'ok', {expires: 30});
        $('.cookie-jvns').css('display', 'none');
    });

    let c_policy = $.cookie('c_policy');

    if (c_policy == 'ok') {
        $('.cookie-jvns').css('display', 'none');
    } else {
        $('.cookie-jvns').css('display', 'block');
    }
}
