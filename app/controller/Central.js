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
            	url: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us',
                headers: { 'Access-Control-Allow-Origin': 'http://localhost:1841'},         
                callback: function(response){console.log(response)}
            })
         }  
	},

	showWeatherHourly:function(idx){
		   var myView=Ext.getCmp('daysWeatherHourly');
		   var weatherHourlyStore=Ext.getStore('WeatherFiveDaysHourly');
		   // for(i=0; i<weatherHourlyStore.count(); i++){
		   // 		console.log(weatherHourlyStore.getAt(i).data, i)
		   // }

		   //var weatherCurrentDay=(weatherHourlyStore.count() % 8)-1;

		   		//alert(weatherCurrentDay)
		   // if (idx==0){		   		
		   // 		dataWeatherHourly=weatherHourlyStore.getRange(0,3);
		   // }else{
		   // 		dataWeatherHourly=weatherHourlyStore.getRange( weatherCurrentDay + (idx*8), weatherCurrentDay + (idx+1)*8)
		   // }
		   	

		   	 var newstore = new Ext.data.Store({
            	model:'Weather.model.FiveDaysHourly',
             	data:weatherHourlyStore.getRange(0,3*idx)
         	});

         	myView.bindStore(newstore)	
		      
    //         storeAllName=Ext.getStore('AllName')
    //         ostacha=storeAllName.count() % 4;
    //         console.log(ostacha)
    //         mystore=storeAllName.getRange( ostacha + (idx*5), ostacha + (idx+1)*5)
           
    //   var newstore = new Ext.data.Store({
    //         model:'AM.model.AllName',
    //         data:mystore
    //     });

    // myview.bindStore(newstore)
		//alert('hello world')
	},
	

	getAllWeather:function(){
		//this.getWeatherOneDay()		
		this.getWeatherFiveDaysDaily()
	}
});
