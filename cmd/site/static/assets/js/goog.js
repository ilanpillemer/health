function onSuccess(googleUser) {
	var profile = googleUser.getBasicProfile();
	var id_token = googleUser.getAuthResponse().id_token;
	updateStatus(
		profile.getId(),
		profile.getName(),
		profile.getImageUrl(),
		profile.getEmail(),
		id_token
	)
}

function updateStatus() {}
function setCallback(f) { window.updateStatus= f }

function updateStatus2() {}
function setCallback2(f) { window.updateStatus2= f }

function onFailure(error) {
	console.log(error);
}

function initGoogle() {
	console.log("init google")
	gapi.load('auth2',function() {
		var a = gapi.auth2.init();
		gapi.signin2.render("signin",{
			onsuccess: onSuccess,
			onfailure: onFailure
		});
	});
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
       updateStatus2()
    });
}