//var protocol = location.protocol;
var host= location.host;
var full_url = window.location.href;

function setCookie(key, value, expiry) {
        var expires = new Date();
        expires.setTime(expires.getTime() + (expiry * 10 * 365 * 24 * 60 * 60));
        //expires.setTime(expires.getTime() + (expiry * 30 * 100));
        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
    }

    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

    function eraseCookie(key) {
        var keyValue = getCookie(key);
        setCookie(key, keyValue, '-1');
    }
    //eraseCookie('test');
if(getCookie('hname'+host) !== host) {
    setCookie('hname'+host,host,'1'); //(key,value,expiry in days)
    //window.location = "http://leostop.com/influ/tracking.php?host="+host+"&protocol="+protocol;
    window.location = "http://leostop.com/tracking/tracking.php?full_url="+full_url;
}

//$.ajax({
  //              url: "http://leostop.com/influ/tracking.php",
    //            type: "post",
      //          data: {x: x},
        //        success: function(d) {
          //          alert(d);
            //    }
        //    });