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
                callback: function(response){}
            })

        var stor=Ext.getStore('WeatherFiveDaysHourly')
            stor.load({
            	url: 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName,
                headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'},         
                callback: function(response){console.log(response)}
            })
         }  
	},

	showWeatherHourly:function(idx, item){
		var anotherElements=Ext.query('.weatherDayBlock');
			Ext.get(anotherElements).setHeight(100);
		var clickedElement=Ext.query('.weatherDayBlock')[idx];
		var anotherElements=Ext.query('.weatherDayBlock');
			Ext.get(clickedElement).setHeight(150);
			
	   var myView=Ext.getCmp('daysWeatherHourly');
	   var weatherHourlyStore=Ext.getStore('WeatherFiveDaysHourly');
	   var weatherCurrentDay=(weatherHourlyStore.count() % 8)-1;
	   if(idx==0){
	   		var mydata=weatherHourlyStore.getRange(0, weatherCurrentDay-1)
	   }else{
	   		var mydata=weatherHourlyStore.getRange( weatherCurrentDay + ((idx-1)*8), weatherCurrentDay-1 + (idx)*8);
	   }
	   	 var newstore = new Ext.data.Store({
        	model:'Weather.model.FiveDaysHourly',
         	data:mydata
     	});

     	myView.bindStore(newstore)	 
	},
	

	getAllWeather:function(){
		//this.getWeatherOneDay()		
		this.getWeatherFiveDaysDaily()
	}
});
