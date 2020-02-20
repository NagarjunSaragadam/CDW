function callcalender(objv)
 {     
	$('.calendar').pignoseCalendar({            
				scheduleOptions: {
					colors: {
						holiday: '#9ACD32',
						seminar: '#ff0000',						
					}
				},
				schedules: objv,				
				select: function (date, context) {									
					var message = `<h3 id="content">Your selected Slot ${(date[0] === null ? 'null' : date[0].format('YYYY-MM-DD'))}</h3><br /><div class="schedules-date"></div>`;
					var $target = context.calendar.parent().next().show().html(message);	
					if(Date.parse(date[0])-Date.parse(new Date())>=-1)
					{					    
					    for (var idx in context.storage.schedules) {
						 var schedule = context.storage.schedules[idx];
						 if (typeof schedule !== 'object') {	
						 $target.find('.schedules-date').append('<strong>asas</strong>');	
						 continue; }
						 var message;
						 if(schedule.name=='holiday')
							 message='Is available on afternoon. if ok then continue';
						 else if(schedule.name=='seminar'){
						   message='is taken Sorry..:), select another day';
						   $("#subdis").attr("disabled", true);
						 }
						 $target.find('.schedules-date').append('<strong>'+ message +'</strong>');	
					    }
						$("#subdis").attr("disabled", false);
					}					
					else
					{
					 $("#subdis").attr("disabled", true);
					 $target.find('.schedules-date').append('<strong>Is older one</strong>');						 
					 event.preventDefault();
					 return false; 
					}
				}
			});			

  }
  
  
$(function () {		 
 $('#wrapper .version strong').text('v' + $.fn.pignoseCalendar.version);		
    myVar = setInterval(calltimer, 500);			
});   	
  
function Calldatasubmit(){	 
var cookieValue = document.getElementById('content').innerHTML.replace('Your selected Slot ','');		
var url="contact.html?date=''"+cookieValue+"''";
window.location=url;
return false;			
}
	
	
function calltimer()
{	
	if(Datejson!='')
	{	 
      Datejson=Datejson.replace(/'/g, '"').replace(/&quot;/ig,'"');
	  var obj=JSON.parse(Datejson);
      callcalender(obj);
	 clearInterval(myVar);		 
	}		
} 