Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',
    views: [
        "Weather.view.Center"
    ],
    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],
    init: function(){
    	var element = Ext.getCmp('newId');

    	//   element.on('click', function(e, target, options){
     //    alert('Элемент был нажат');
    	// }, this);


        this.control({
             'weatherHeader button': {
                 click: this.getAllWeather
             }
        });
    },

    getWeatherOneDay:function(){
    	
    	var cityName=Ext.getCmp("cityName").getValue()
    	//console.log(cityName)
    	if(cityName==''){
    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
    	}else{
    		Ext.Ajax.useDefaultXhrHeader = false;
    		


    		Ext.Ajax.request({
			    url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName,	

		    success: function(response){
		    	var text = response.responseText;
			    var weatherObject=JSON.parse(text);
				var el=Ext.getCmp('weatherOneDay')
				data={
					name:weatherObject.name,
					icon:"http://openweathermap.org/img/w/"+weatherObject.weather[0].icon+".png",
					min_temperature:weatherObject.main.temp_min,
					max_temperature:weatherObject.main.temp_max
				}
    		el.update(data)	                            	
         	} 
		});		
		}
	},

	// getWeatherFiveDaysHourly:function(){
	// 	var self=this;
 //    	var cityName=Ext.getCmp('cityName').getValue()
 //    	if(cityName==''){
 //    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
 //    	}else{
 //    		Ext.Ajax.useDefaultXhrHeader = false;
 //    		Ext.Ajax.request({
	// 		    url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName,
			    
	// 		    success: function(response){
	// 		        var text = response.responseText;
	// 		        var weatherList=JSON.parse(text).list;
	// 		        var el=Ext.getCmp('weatherFiveDays');			       			     
	//         		el.update(self.transformListToData(weatherList));	                            	
	//          	}			    
	// 		});
	// 	}
	// },

	// getWeatherFiveDaysDaily:function(){
	// 	var self=this;
 //    	var cityName=Ext.getCmp('cityName').getValue()
 //    	if(cityName==''){
 //    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
 //    	}else{

 //    		Ext.Ajax.useDefaultXhrHeader = false;
 //    		Ext.Ajax.request({
	// 		    url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&cnt=5&mode=json",
			    
	// 		    success: function(response){
	// 		        var text = response.responseText;
	// 		        var weatherList=JSON.parse(text).list;
	// 		        console.log(JSON.parse(text))
	// 		        var el=Ext.getCmp('weatherFiveDays');

	// 		       // var pa=Ext.getCmp('weatherFiveDays');
	// 		        var grid = Ext.ComponentQuery.query('aliasweatherOneDayHourly')[0];	
	// 		        grid.show();

	//         		el.update(self.transformListToDataFiveDaysDaily(weatherList));	                            	
	//          	}			    
	// 		});
	// 	}
	// },






	getAllWeather:function(){
		this.getWeatherOneDay()
		//this.getWeatherFiveDaysHourly()
		//this.getWeatherFiveDaysDaily()
	},

	// transformListToDataFiveDaysDaily:function(weatherList){
	// 	var data=[];
	// 	for(i=0; i<weatherList.length; i++){
	// 		data.push({
	// 					data:moment.unix(weatherList[i].dt).format('dddd'),
	// 					// icon:"http://openweathermap.org/img/w/"+weatherList[i].weather[0].icon+".png",
	// 					 min_temperature: weatherList[i].temp.min,
	// 					 max_temperature: weatherList[i].temp.max
	// 				})
	// 	}
	// 	return data;
	// },

	transformListToData:function(weatherList){
		var data=[];
		for(i=0; i<weatherList.length; i++){
			data.push({
						data:weatherList[i].dt_txt,
						icon:"http://openweathermap.org/img/w/"+weatherList[i].weather[0].icon+".png",
						min_temperature: weatherList[i].main.temp_min,
						max_temperature: weatherList[i].main.temp_max
					})
		}
		return data;
	}

});
