  document.addEventListener("deviceready", onDeviceReady, false);
 
    // device APIs are available
    //
    function onDeviceReady() {
		if (cordova.platformId == 'android') {
    StatusBar.overlaysWebView(true);
    StatusBar.styleBlackTranslucent();
	var autoHideNavigationBar = true;
    navigationbar.setUp(autoHideNavigationBar);  
}
    }