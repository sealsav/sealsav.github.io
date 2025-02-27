function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

login = document.querySelector('#login');
pass = document.querySelector('#pass');
authBtn = document.querySelector('#authbtn');

if (getCookie("login") != undefined) {
	window.location.href = 'index.html';
}

authBtn.onclick = function() {
	if (login.value === "savur" && pass.value === "123") {
		document.cookie = "login=savur; max-age=3600";
		window.location.href = 'index.html';
	} else {
		alert("Неверный логин или пароль!");
	}
};