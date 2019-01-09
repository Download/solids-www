var LastClickCookieSwitch = new Object;

LastClickCookieSwitch.referralExclusionList = [];
LastClickCookieSwitch.cookieTimeoutDays = 30; // -1 for session only

LastClickCookieSwitch.setCookie = function (cname, cvalue, exminutes)
{
	LastClickCookieSwitch.deleteCookie(cname);

	var d = new Date();
	d.setTime(d.getTime() + (exminutes * 60 * 1000));
	var expires = (exminutes == -1) ? "" : "expires=" + d.toGMTString();

	var parts = location.hostname.split('.');
	var i = 0;

	while (i < (parts.length - 1) && document.cookie.indexOf(cname + '=' + cvalue) == -1)
	{
		var domain = parts.slice(-1 - (++i)).join('.');
		document.cookie = cname + "=" + cvalue + "; " + expires + ";domain=" + domain + "; path=/";
	}
}

LastClickCookieSwitch.getCookie = function (cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

LastClickCookieSwitch.deleteCookie = function (cname)
{
	var parts = location.hostname.split('.');
	var i = 0;

	while (i < (parts.length - 1))
	{
		var domain = parts.slice(-1 - (++i)).join('.');
		document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + domain + "; path=/";
	}
}

LastClickCookieSwitch.getUrlParameter = function (name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(document.location.href);
	return results == null ? null : decodeURIComponent(results[1]);
}

LastClickCookieSwitch.getCurrentChannel = function ()
{
	var channel = null;

	if (LastClickCookieSwitch.getUrlParameter('gclid') != null)
	{
		channel = 'google / cpc';
	}
	else if (LastClickCookieSwitch.getUrlParameter('utm_source') != null)
	{
		channel = LastClickCookieSwitch.getUrlParameter('utm_source');

		if (LastClickCookieSwitch.getUrlParameter('utm_medium') != null)
		{
			channel += " / " + LastClickCookieSwitch.getUrlParameter('utm_medium');
		}
	}
	else if (document.referrer != "")
	{
		var hostname = document.referrer.split("/")[2];
		var isExcluded = false;

		if (hostname != document.location.hostname)
		{

			for (i = 0; i < LastClickCookieSwitch.referralExclusionList.length; i++)
			{
				if (hostname == LastClickCookieSwitch.referralExclusionList[i])
				{
					isExcluded = true;
					break;
				}
			}

			if (!isExcluded)
			{
				channel = hostname + " / referral";
			}
		} 
	}

	return channel;
}


var currentChannel = LastClickCookieSwitch.getCurrentChannel();

if (currentChannel != null)
{
	LastClickCookieSwitch.setCookie('lccs_channel', currentChannel, LastClickCookieSwitch.sessionTimeoutMinutes);
