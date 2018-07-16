//Checks if Browser supports Service Worker 
if(navigator.serviceWorker) {
  // Sets up Service Worker
  navigator.serviceWorker
  	.register("/sw.js", {scope: "/js/"})
  	.then(function(registration) {
    	//In case of successful registration
    	console.log("Service Worker registered", registration);
  	})
  	.catch(function(error) {
    	//In case registration fails
    	console.log("Something went wrong: Service Worker Registration Failed", error);
  	});
};