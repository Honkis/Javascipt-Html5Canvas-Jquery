	
	// gives whodrone some texture and navigates in the booking page
	$(document).ready(function(){
	  	$(".menuitem").click(function(event){
	  		
	  		
			  if(event.target.id=="resc1"){
			  	whoDrone="Drone1";
			  	$("#resc2").hide();
			  	$("#resc3").hide();
			  	$("#calendar2").show();
			  	
			  }else if(event.target.id=="resc2"){
			  	whoDrone="Drone2";
			  	
			  	$("#resc2").hide();
			  	$("#resc1").hide();
			  	$("#calendar2").show();
			  }else if(event.target.id=="resc3"){
			  	whoDrone="Drone3";
			  	
			  	$("#resc2").hide();
			  	$("#resc1").hide();
			  	$("#calendar2").show();
			  }
			  
	  	});
	});		
		
		
		// clikcs on dates. gets start and endate for bookings this is jQuery controle of the calendar
		$(document).ready(function(){
	  		$("td").click(function(event){
	  			
				  if(event.target.className=="calendar-day"){ // make so you cannot click booked dates
					  if(clickMode==2){
					  	endDate=event.target.id;
					  	$("#enDateText").html("EndDate="+endDate); // sets info of the booking to the booking button
					  	clickMode=1;
					  	
					  	$(this).css('background-color','red');
					  	$(this).removeClass("calendar-day").addClass("booked");
					  	
					  	var compare1 = endDate.split("-");
					  	var compare2 = startDate.split("-");
					  	
					  	
					  	// calculates the total cost of the booking and displays the cost in #endCost
					  	var costOfDrone = $('#'+whoDrone).text();
					  	var actuallCost = costOfDrone * (compare1[2]-compare2[2] +1);
					  	
					  	$("#endCost").html("Total cost of booking: "+actuallCost+ " $");
					  	
					  	
					  	var bug=0;
					  	var bug2=0;
					  	// fix the bugs, and the bugs with over months and over years ( 2 moar for loops i guess )
					  	for(compare2[2] ; compare2[2] < compare1[2];compare2[2]++){
					  		
					  		if(bug==1){
					  			var idToBooked;
					  			if(compare2[2]<10){
					  				idToBooked= "#"+compare2[0]+"-"+compare2[1]+"-0"+compare2[2];
					  			
					  				moarDate[bug2]=compare2[0]+"-"+compare2[1]+"-0"+compare2[2];
					  				
					  			
					  			}else {
					  				idToBooked= "#"+compare2[0]+"-"+compare2[1]+"-"+compare2[2];
					  			
					  				moarDate[bug2]=compare2[0]+"-"+compare2[1]+"-"+compare2[2];
					  				
					  			
					  			}
					  			bug2++;
					  			console.log(idToBooked);
					  			$(idToBooked).css('background-color','red');
					  			$(idToBooked).removeClass("calendar-day").addClass("booked");
					  			
					  		}else {
					  			bug++;
					  		}
					  		
					  	}
	
					  	
					  }else{
					  	
					  		$(this).css('background-color','red');
					  		$(this).removeClass("calendar-day").addClass("booked");
						  	startDate=event.target.id;
						  	$("#startDateText").html("StartDate="+startDate); // sets info of the booking to the booking button
						  	clickMode=2;
						  	
						}
				  }
		  	});
		});
		
		

		//swaping forward on months . Need to make one for going back in months/years
		$(document).ready(function(){
	  		
	  		
	  		$("th").click(function(event){
	  			var ifth = event.target.className;
	  			var ifds = ifth.split("-");
	  			var tableid2 ='#';
	  			var tableid3 ='#';
	  			var test;
				  if(ifds[0]=="next"){
				  		if(event.target.id==13){
				  			test=ifds[3];
				  			tableid2 += test+'-'+1;
				  			//alert('isuck');
				  		}else{
				  			
				  			tableid2 += ifds[1]+'-'+event.target.id;	
				  		}
				  		tableid3 += ifds[1]+'-'+ifds[2];
				  		
				  		$(tableid2).css("display","block");
				  		$(tableid3).css("display","none");
				  		
				  		
				  }else if(ifds[0]=="prev"){
				  		
				  		test = event.target.id;
				  		//alert(test);
				  			
				  		
				  }
				  
				  
				  
				  
		  	});
		});



	//login menu drop down and reverse
	 $(document).ready(function() {

		
			$("#buttonLogin,#newCustButton,#Loginbutton").click(function(){
				/*alert($("#login").css("marginTop"));*/
				
				if($("#login").css("marginTop")=="-300px"){	
					$("#login").animate({marginTop: "50px"},1000);
				}else {
					$("#login").animate({marginTop:"-300px"},1000);
					
				}
			});
		
	
	 });
	 /*
	$(document).ready(function(){
	  	$("button").click(function(event){
	  		if(event.target.className=="deleteBut"){
	  			alert(event.target.id);
	  			alert("hej funka plx");
	  		}
	  	});
	});	
	 
	*/ 
