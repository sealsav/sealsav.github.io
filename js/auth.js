function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

aOn = document.querySelector('.authOn');
aOff = document.querySelector('.authOff');

if (getCookie("login") != undefined) {
	aOff.style = "display: none";
	aOn.style = "display: block";
} else {
	aOff.style = "display: block";
	aOn.style = "display: none";
}