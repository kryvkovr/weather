Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',
    views: [
        "Weather.view.Center"
    ],
    requires: ['Ext.data.JsonP', 'Ext.Msg'],
    init: function(){

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

	getWeatherFiveDays:function(){
		var self=this;
    	var cityName=Ext.getCmp('cityName').getValue()
    	if(cityName==''){
    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
    	}else{
    		Ext.Ajax.useDefaultXhrHeader = false;
    		Ext.Ajax.request({
			    url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName,
			    
			    success: function(response){
			        var text = response.responseText;
			        var weatherList=JSON.parse(text).list;
			        var el=Ext.getCmp('weatherFiveDays');			       			     
	        		el.update(self.transformListToData(weatherList));	                            	
	         	}			    
			});
		}
	},

	getAllWeather:function(){
		this.getWeatherOneDay()
		this.getWeatherFiveDays()
	},

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
