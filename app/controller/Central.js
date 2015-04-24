Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],

    init: function(){
    	Ext.Ajax.useDefaultXhrHeader = false;
    	var element = Ext.getCmp('newId');
        this.control({
             'weatherHeader button': {
                 click: this.getAllWeather
             }
        });
    },

	getWeatherFiveDaysDaily:function(){
		var cityName=Ext.getCmp('cityName').getValue();
		if(cityName==''){
			Ext.Msg.alert('Error', 'Pls enter a city name.');
		}else{
		var stor=Ext.getStore('WeatherFiveDaysDaily')
            stor.load({
            	url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json',
                headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'},         
                callback: function(response){console.log(response)}
            })


        var stor=Ext.getStore('WeatherFiveDaysHourly')
            stor.load({
            	url: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us',
                headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'},         
                callback: function(response){console.log(response)}
            })
         }  
	},

	sendAlert:function(){
		alert('hello world')
	},
	

	getAllWeather:function(){
		//this.getWeatherOneDay()		
		this.getWeatherFiveDaysDaily()
	}
});
