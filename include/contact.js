//// Contact Form Validation
var captchago = 0;
var error = "";

function validateContactForm (formName) {
	// Setup Variables
	var elem = document.getElementById(formName).elements;
    var andGo = "1";
	error = "";
	// Cycle through inputs
	for(var i = 0;i < elem.length; i++) {
		// Check other inputs
		if(elem[i].name == "email") {
			// Check the email
			var email = elem[i].value;
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos < 1 || dotpos < atpos  +2 || dotpos + 2 >= email.length) {
				error = error + "- The Email Address you entered was not valid. Please enter your email address again." + '\n';
				andGo = "0";
			}
		} else if(elem[i].name == "txtcaptcha") {
			checkCaptcha(formName);
			if(captchago == "0") {andGo = "0";}
		} else {
			if(elem[i].value == "") {
				// check for asterisk. if no asterisk -> field is required
				if(elem[i].alt.charAt(0) != "*") {
					error = error + "- The " + elem[i].alt + " field was left blank. Please fill it in." + '\n';
					andGo = "0";
				}
			}
		}
	}
	
	if(andGo == "1") {
		return true;
	} else {
		if(error != "") {alert(error);}
		return false;
	}
}


//// Captcha Functions
//Gets the browser specific XmlHttpRequest Object 
function getXmlHttpRequestObject() {
	if (window.XMLHttpRequest) {
    	return new XMLHttpRequest(); //Mozilla, Safari ...
	} else if (window.ActiveXObject) {
    	return new ActiveXObject("Microsoft.XMLHTTP"); //IE
	} else {
    //Display our error message
    alert("Your browser doesn't support the XmlHttpRequest object.");
 	}
}

function makeRequest(url, postStr, theForm) {
	//If our readystate is either not started or finished, initiate a new request
 if (receiveReq.readyState == 4 || receiveReq.readyState == 0) {
   //Set up the connection to captcha_test.html. True sets the request to asyncronous(default) 
   receiveReq.open("POST", url, false);
   //Set the function that will be called when the XmlHttpRequest objects state changes
   receiveReq.onreadystatechange = updatePage; 
 
   receiveReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   receiveReq.setRequestHeader("Content-length", postStr.length);
   receiveReq.setRequestHeader("Connection", "close");
 
   //Make the request
   receiveReq.send(postStr);
  }  
}