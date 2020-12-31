$(function () {
    let winHeight = $(window).height();
    $('#weixinTip').hide();
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    function is_weixin() {
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    
    if (isIOS) {
        //这个是ios操作系统
        $('#btn').html('苹果下载');
        $('#btn').click(function () {
            let isWeixin = is_weixin();
            if (isWeixin) {
                $('#weixinTip').show();
                $('#weixinTip').css('height', winHeight);
            } else {
                $('#btn').attr("href", "itms-services:///?action=download-manifest&url=https://parkrjs2.fangte.com/YunTongApp/ipa/manifest.plist");
            }
        });
    }

});