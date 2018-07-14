//Checks if Browser supports Service Worker 
if("serviceWorker" in navigator){
  // Sets up Service Worker
  navigator.serviceWorker
  	.register("sw.js")
  	.then(reg => {
    	//In case of successful registration
    	console.log("Service Worker registered");
  	})
  	.catch(error => {
    	//In case registration fails
    	console.log("Something went wrong: Service Worker Registration Failed");
  	});
};