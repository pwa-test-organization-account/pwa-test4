// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtTnEIWyiZE-prcSdIg9zlf83As-XAd6A",
    authDomain: "pwa-test-a2741.firebaseapp.com",
    databaseURL: "https://pwa-test-a2741.firebaseio.com",
    projectId: "pwa-test-a2741",
    storageBucket: "pwa-test-a2741.appspot.com",
    messagingSenderId: "758160015443",
    appId: "1:758160015443:web:ddb85ce82488df229ac6a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

//パーミッションチェックします。
messaging.requestPermission()
	.then(function(){
		console.log('Have permission');
		return messaging.getToken();
	})
	.then(function(token){
		//あとでcurlコマンドにセットするデバイストークンを出力します
		console.log(token);
	})
	.catch(function(err){
		console.log('error Occuerd at getpermission');
		return messaging.getToken();
	})
	.then(function(token){
		console.log(token);
	});

messaging.usePublicVapidKey('BHpxgae0JS7fuiHkqbuZLib2hmLLXFwFtk91boqxWQECjj0ESvfsFerWrkZ_bNJDLH5B9HFUPIMGGE0EKOwEJCg');
messaging.onMessage(function(payload){
	console.log('onMessage:',payload);
});
