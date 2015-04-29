Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],
    refs: [
        {
            ref: 'cityName',
            selector: 'weather-header #cityName'
        },{
            ref: 'viewDayHourly',
            selector: 'weather-five-days-hourly'
        }
    ],

    init: function(){
    	Ext.Ajax.useDefaultXhrHeader = false;
        this.control({
             'weather-header #showWeather': {
                 click: this.getAllWeather
             },

             'weather-five-days-daily': {
                 itemclick: this.showWeatherHourly
             }
        });
    },

	getWeatherFiveDaysDaily:function(cityName){
		var storeFiveDaysDaily=this.getStore('WeatherFiveDaysDaily');
		storeFiveDaysDaily.getProxy().url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json';
        storeFiveDaysDaily.load();

        var storeDayHourly=this.getStore('WeatherFiveDaysHourly');
        storeDayHourly.getProxy().url='http://api.openweathermap.org/data/2.5/forecast?q='+cityName;
        storeDayHourly.load();
	},

	showWeatherHourly:function(view, record, item, idx, event, opts){
		var viewDayHourly=this.getViewDayHourly();

		var weatherHourlyStore=this.getStore('WeatherFiveDaysHourly');


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
            	url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=16&mode=json'              
            })
	},

	getAllWeather:function(){
		var cityName=this.getCityName().getValue();
		if(cityName==''){
			Ext.Msg.alert('Error', 'Pls enter a city name.');
		}else{
			this.getWeatherFiveDaysDaily(cityName)
			this.getWeatherSixteenDays(cityName)
			//this.getWeatherOneDay(cityName)
		}
	},

	getWeatherOneDay:function(cityName){
		alert(cityName);
	}
});
