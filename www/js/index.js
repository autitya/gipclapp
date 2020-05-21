/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var refreshicon;
function refreshicon(id='refreshicon'){
i = document.getElementById(id)!=undefined ? true : false;
var start = function(){document.getElementById(id).style.animationName='rotateicon';}
var stop = function(){document.getElementById(id).style.animationName='none';}
var error = function(){document.getElementById(id).style.color='red';}
return{start:start,stop:stop,error:error}
}

var w;
var r = 0;
var Tr = 32;
var autm = 10;
function startWorker() {
	r = 0;
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("js/worker.js");
    }
    w.onmessage = function(event) {

		r++;
	    if (typeof(Storage) !== "undefined") {
 if (typeof(event.data) == "object"){
  var oKEy = Object.keys(event.data);
  if(allowforword){document.getElementById("loadstatus").innerHTML = oKEy +'  '+r+"/"+Tr;}else{refreshicon().start();}
  }else{if(allowforword){document.getElementById("loadstatus").innerHTML =event.data +'<br><a style="font-size: xxx-large;color: white;" onclick="window.location.reload();"><svg class="bi bi-arrow-counterclockwise" width="1em"height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.83 6.706a5 5 0 00-7.103-3.16.5.5 0 11-.454-.892A6 6 0 112.545 5.5a.5.5 0 11.91.417 5 5 0 109.375.789z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M7.854.146a.5.5 0 00-.708 0l-2.5 2.5a.5.5 0 000 .708l2.5 2.5a.5.5 0 10.708-.708L5.707 3 7.854.854a.5.5 0 000-.708z"clip-rule="evenodd"/></svg></a>';return;}else{refreshicon().stop();refreshicon().error();return}}
  sessionStorage.setItem(oKEy, JSON.stringify(event.data));
	// document.getElementById("output").innerHTML =  JSON.parse(sessionStorage.getItem(oKEy))[oKEy]['total'];
} else {
  document.getElementById("loadstatus").innerHTML = 'Please restart the application';
}


     // document.getElementById("loadstatus").innerHTML =event.data;
	  if (Tr==r){sessionStorage.setItem('lastupdate', new Date());r=0;if(allowforword){stopWorker();}else{location.reload()}}
    };
  } else {
    document.getElementById("loadstatus").innerHTML = "Sorry, your phone does not support...";
  }

}

function stopWorker() {
  w.terminate();
  w = undefined;
 window.location.href = "home.html";
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
    function onDeviceReady() {
    if (cordova.platformId == 'android') {
     StatusBar.overlaysWebView(false);
     StatusBar.styleBlackTranslucent();
	 var autoHideNavigationBar = true;
}
    }
   document.addEventListener("deviceready", onDeviceReady, false);