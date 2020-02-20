var Datearray = [];	
var Datejson='';	
var myVar;
$(document).ready(function() {		 
	 var  config = {
          apiKey: "AIzaSyC-fgDmqzmAT5mtWcDubpWvTdRFwF4BKpQ",
		  authDomain: "school-b9993.firebaseapp.com",
		  databaseURL: "https://school-b9993.firebaseio.com",
          projectId: "school-b9993",
          storageBucket: "school-b9993.appspot.com",
          messagingSenderId: "575418282170"
       };
firebase.initializeApp(config);
var rootRef;
 var database = firebase.database(); 
    database.ref().child("Users").once('value', function(snapshot){
        if(snapshot.exists()){            
            snapshot.forEach(function(data){			   			   
				 var myObj=JSON.stringify(data); 				
				 var myObj2=JSON.parse(myObj);
				 var myobj3,sdate,record;				 				 				 
				 $.each(myObj2, function(key, value){				     
                      if(key=='sdate'){
					  myobj3=JSON.stringify(value);					  
					  sdate=JSON.parse(myobj3);			
					  var i;					  					  
					   if(Datearray.indexOf("{ 'name': 'holiday', 'date': '"+sdate+"' }") !== -1 ){					   
						  i=Datearray.indexOf("{ 'name': 'holiday', 'date': '"+sdate+"' }");
						  Datearray[i]="{ 'name': 'seminar', 'date': '"+sdate+"' }";
					   }
					   else if(Datearray.indexOf("{ 'name': 'seminar', 'date': '"+sdate+"' }") == -1)
					   {
					      Datearray.push( "{ 'name': 'holiday', 'date': '"+sdate+"' }" );			
					   }					   
					  }
                   });		   				   				 
            });            			
		  Datejson=JSON.stringify(Datearray); 
		  Datejson=Datejson.toString().replace(/"/g, "");		  
        }
		});
		
		 $('.mobile-side-menu').slideFromTop({
            menuBtn: $('.toggleMenu'),
            navbar: $('.navbar'),
            menuSpeed: 500,
            bodyOverlay: $('.overlay')
         });
		
    });