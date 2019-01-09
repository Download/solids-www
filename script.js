function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function createCookieObject () {
    var cookie_string = {};
    var cookie = document.cookie;
    var vars = cookie.split("; ");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
        // If first entry with this name
      if (typeof cookie_string[pair[0]] === "undefined") {
        cookie_string[pair[0]] = pair[1];
        // If second entry with this name
      } else if (typeof cookie_string[pair[0]] === "string") {
        var arr = [ cookie_string[pair[0]], pair[1] ];
        cookie_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        cookie_string[pair[0]].push(pair[1]);
      }
    } 
      return cookie_string;
}

function createQueryObject () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
      // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
}

var existingChannels = "";
var existingSources = "";
var existingDates = "";
var landingPage = false;
var currentChannel = "";
var currentSource = "";
var MC_cookies = document.cookie;
var cookieCharLimit = 4096;

if (MC_cookies.indexOf("MC_landing") ==-1 || document.URL.indexOf('utm_source')!=-1 || document.referrer.indexOf('google.com')!=-1 || document.referrer.indexOf('yandex.com')!=-1 || document.referrer.indexOf('arabia.starzplay.com') > 30 || document.referrer.indexOf('arabia.starzplay.com')==-1) {

    createCookie("MC_landing",1);
    landingPage = true;

    var CookieString = createCookieObject();
    var QueryString = createQueryObject();
    
    if (typeof QueryString.utm_source === "undefined") {
        if (document.referrer ==="") {
          currentChannel = "(direct)";
          currentSource = "(direct)";
        }
        else if (QueryString.gclid) {
          currentChannel = "Adwords";
          currentSource = "Google-CPC";
        }
        else if (QueryString.dclid) {
          currentChannel = "DoubleClick";
          currentSource = "DoubleClick";
        }
        else if (document.referrer.indexOf("google.")!=-1) {
          currentChannel = "Organic";
          currentSource = "Google-Organic";
        }
        else if (QueryString.yclid) {
          currentChannel = "Yandex CPC";
          currentSource = "Yandex-CPC";
        }  
        else if (document.referrer.indexOf("yandex")!=-1) {
          currentChannel = "Organic";
          currentSource = "Yandex-Organic";
        }  
        else {
          currentChannel = 'Other';
          currentSource = document.referrer.match(/:\/\/(.[^/]+)/)[1];
        }
    }

    else{
          currentSource = QueryString.utm_source+"/"+QueryString.utm_medium+"/"+QueryString.utm_campaign;
          currentChannel = QueryString.utm_source;
    }

    var d = new Date;
    currentDate = "" + d.getFullYear() + (('00' + (d.getMonth() + 1)).slice(-2)) + d.getDate();

    if(typeof CookieString.mcfChannels != "undefined"){
      if(CookieString.mcfSourceDetails.length>4096){
        CookieString.mcfSourceDetails = CookieString.mcfSourceDetails.substring(CookieString.mcfSourceDetails.indexOf(">")+1,CookieString.mcfSourceDetails.length);
        CookieString.mcfChannels = CookieString.mcfChannels.substring(CookieString.mcfChannels.indexOf(">")+1,CookieString.mcfChannels.length);
        CookieString.mcfDates = CookieString.mcfDates.substring(CookieString.mcfDates.indexOf(">")+1,CookieString.mcfDates.length);
      }
      existingChannels = CookieString.mcfChannels;
      existingSources = CookieString.mcfSourceDetails;
      existingDates = CookieString.mcfDates;
  }

    if(existingSources.substring(existingSources.lastIndexOf(">")+1,existingSources.length)!=currentSource){
        if(existingSources.length>0){
          existingChannels = existingChannels + ">";
          existingSources = existingSources + ">";
          existingDates = existingDates + ">";
        }
          createCookie ('mcfChannels',existingChannels+currentChannel,7);
          createCookie ('mcfSourceDetails',existingSources+currentSource,7);
          createCookie ('mcfDates',existingDates+currentDate,7);
          createCookie ('mcfLastInteraction',currentChannel+" | "+currentSource,7);

    }

    if(existingChannels == "") {
    createCookie('mcfFirstInteraction',currentChannel+" | "+currentSource,7);
    }
}
