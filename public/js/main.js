/*
Developed by: Kranthi Kiran
Date: 28-May-2016
Description:
*/

$("#chkBoxWaterSwitch").change(function(){		
	
	
	if(this.checked){		
		apis.smileyplant.postDeviceStart(function(data){	
			$('#modalContent').css('alert alert-success');
			$('#modalContent').text("Plant watering started...");
		}, function(data){
			$('#modalContent').css('alert alert-danger');
			$('#modalContent').text("Plant watering failed to start");
		});
	}
	else{
		apis.smileyplant.postDeviceStop(function(data){
			$('#modalContent').css('alert alert-info');
			$('#modalContent').text("Plant watering stopped");
		});
	}
	$('#statusModal').modal('show');
});

