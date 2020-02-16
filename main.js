// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC-fgDmqzmAT5mtWcDubpWvTdRFwF4BKpQ",
    authDomain: "school-b9993.firebaseapp.com",
    databaseURL: "https://school-b9993.firebaseio.com",
    projectId: "school-b9993",
    storageBucket: "school-b9993.appspot.com",
    messagingSenderId: "575418282170"
  };
firebase.initializeApp(config);
window.onload=function(){
    document.getElementById('contactForm').addEventListener('submit', submitForm);
  }
// Reference messages collection
var messagesRef = firebase.database().ref('Users');


// Listen for form submit





// Submit form
function submitForm(e){ 
  e.preventDefault();
  // Get values
  var uname = getInputVal('name');
  var email = getInputVal('email');
  var sdate=getInputVal('sdate');
  var phone = getInputVal('phone');
  var address = getInputVal('address');
  // Save message
  saveMessage(uname, email,sdate, phone,address);  
  var url="Conirm.html?name="+uname;
  window.location=url;
  return false;
  
}


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(uname, email,sdate, phone,address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    uname: uname,    
    email:email, 
    sdate:sdate, 
    phone:phone,
	address:address,	
  });
}