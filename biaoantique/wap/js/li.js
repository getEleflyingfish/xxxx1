
document.getElementsByTagName('html')[0].style.fontSize = $(window).width() * 100 / 720 + 'px';

$(window).resize(function () {
    document.getElementsByTagName('html')[0].style.fontSize = $(window).width() * 100 / 720 + 'px';
});

$(function () {
    function fontSize() {
        var deviceWidth = $(document).width();
        if (deviceWidth > 720) {
            deviceWidth = 720;
            console.log(deviceWidth);
        }

        var fontSize = deviceWidth / 7.2;
        $('html').css('fontSize', fontSize);
        console.log(fontSize);
    }

    fontSize();

    $(window).resize(function () {
        fontSize();
    });
});
