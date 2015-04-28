Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],

    init: function(){
    	Ext.Ajax.useDefaultXhrHeader = false;
        this.control({
             'weatherHeader button': {
                 click: this.getAllWeather
             }
        });
    },

	getWeatherFiveDaysDaily:function(cityName){
		var storeFiveDaysDaily=Ext.getStore('WeatherFiveDaysDaily')
        storeFiveDaysDaily.load({
        	url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json',
            headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'}                    
        });

        var storeDayHourly=Ext.getStore('WeatherFiveDaysHourly')
        storeDayHourly.load({
        	url: 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName,
            headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'}        
        })
           
	},

	showWeatherHourly:function(idx, item){
		var allWeatherBlock=Ext.query('.weatherDayBlock');
		Ext.get(allWeatherBlock).setHeight(100);
		var clickedWeatherBlock=Ext.query('.weatherDayBlock')[idx];
		Ext.get(clickedWeatherBlock).setHeight(150);
			
		var viewDayHourly=Ext.getCmp('daysWeatherHourly');
		var weatherHourlyStore=Ext.getStore('WeatherFiveDaysHourly');
		var weatherCurrentDay=(weatherHourlyStore.count() % 8)-1;
		

	    if(idx==0){
	   		var oneDayWeather=weatherHourlyStore.getRange(0, weatherCurrentDay-1)
	    }else{
	   		var oneDayWeather=weatherHourlyStore.getRange( weatherCurrentDay + ((idx-1)*8), weatherCurrentDay-1 + (idx)*8);
	    }

	   	var storeOneDayWeather = new Ext.data.Store({
        	model:'Weather.model.FiveDaysHourly',
         	data:oneDayWeather
     	});

     	viewDayHourly.bindStore(storeOneDayWeather);	 
	},

	getWeatherSixteenDays:function(cityName){
		var storeSixteenDay=Ext.getStore('WeatherSixteenDays')
            storeSixteenDay.load({
            	url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=16&mode=json',
                headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'}
            })
	},

	getAllWeather:function(){
		var cityName=Ext.getCmp('cityName').getValue();
		if(cityName==''){
			Ext.Msg.alert('Error', 'Pls enter a city name.');
		}else{
			this.getWeatherFiveDaysDaily(cityName)
			this.getWeatherSixteenDays(cityName)
		}
	}
});
