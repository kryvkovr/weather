Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],
    refs: [
        {
            ref: 'cityName',
            selector: 'weather-header #cityName'
        },
        {
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

             'weather-header #cityName': {
                 keypress: this.getWeatherEnterClick
             },

             'weather-five-days-daily': {
                 itemclick: this.showWeatherOneDayHourly
             }
        });
        // this.fiveDayStore = Ext.create('Weather.store.WeatherFiveDaysDaily', {
        //     model: ''
        // })
    },

	getWeatherFiveDaysDaily:function (cityName){
		var storeFiveDaysDaily=this.getStore('WeatherFiveDaysDaily');
		storeFiveDaysDaily.getProxy().url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json';
        storeFiveDaysDaily.load();
        var storeDayHourly=this.getStore('WeatherFiveDaysHourly');
        storeDayHourly.getProxy().url='http://api.openweathermap.org/data/2.5/forecast?q='+cityName;
        storeDayHourly.load();
	},

	showWeatherOneDayHourly:function(view, record, item, idx, event, opts){
		var weatherHourlyStore=this.getStore('WeatherFiveDaysHourly');
		weatherHourlyStore.clearFilter(true);
		var dayFilter=record.get('dt');
		weatherHourlyStore.filter("day", dayFilter);
		var viewDayHourly=this.getViewDayHourly();
     	viewDayHourly.bindStore(weatherHourlyStore);     			 
	},

	getWeatherSixteenDays:function(cityName){
		var storeSixteenDay=Ext.getStore('WeatherSixteenDays');
		storeSixteenDay.getProxy().url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=16&mode=json';
		storeSixteenDay.load();
	},

	getAllWeather:function(){
		var cityName =this.getCityName().getValue();
		if(cityName==''){
			Ext.Msg.alert('Error', 'Pls enter a city name.');
		}else{
            
			this.getWeatherFiveDaysDaily(cityName)
			this.getWeatherSixteenDays(cityName)
			this.getWeatherOneDay(cityName)
		}
		this.getCityName().setValue('');
	},

	getWeatherOneDay:function(cityName){		
		var storeCurrentDay=Ext.getStore('CurrentDay');
		storeCurrentDay.getProxy().url="http://api.openweathermap.org/data/2.5/weather?q="+cityName;
		storeCurrentDay.load();
	},

	getWeatherEnterClick:function(textfield, eventObject){
    	if (eventObject.getCharCode() === Ext.EventObject.ENTER) {
        	this.getAllWeather();
        }
    }
});
