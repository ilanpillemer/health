function onSuccess(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
	  var profile = googleUser.getBasicProfile();
	  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  console.log('Name: ' + profile.getName());
	  console.log('Image URL: ' + profile.getImageUrl());
	  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

 function onFailure(error) {
      console.log(error);
}

function initGoogle() {
  gapi.load('auth2',function() {
  	var a = gapi.auth2.init();
  	gapi.signin2.render("signin",
  	 {
  	   onsuccess: onSuccess,
  	   onfailure: onFailure
  	  });
  });
}