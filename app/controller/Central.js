Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP',
               'Ext.Msg',
                'Weather.view.Header',
                'Weather.store.WeatherFiveDaysDaily',
                'Weather.view.FiveDaysHourly',
                'Weather.model.FiveDaysDaily',
                'Weather.model.SixteenDays',
                'Deft.Deferred'
                ],
    refs: [
        {
            ref: 'cityName',
            selector: 'weather-header #cityName'
        },
        {
            ref: 'viewDayHourly',
            selector: 'weather-five-days-hourly'
        },
        {
            ref: 'viewFiveDaysDaily',
            selector: 'weather-five-days-daily'
        },
        {
            ref: 'viewSexteenDays',
            selector: 'sixteen-days'
        }
    ],

    init: function(){
    	Ext.Ajax.useDefaultXhrHeader = false;

        this.fiveDayStore = Ext.create('Weather.store.WeatherMainStore', {
            model: 'Weather.model.FiveDaysDaily'
        })

        this.fiveDayHourlyStore = Ext.create('Weather.store.WeatherFiveDaysHourly', {
            model: 'Weather.model.FiveDaysHourly'
        })

        this.sixteenDayStore = Ext.create('Weather.store.WeatherSixteenDays', {
            model: 'Weather.model.SixteenDays'
        })


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
     
    },


	getWeatherFiveDaysDaily:function (cityName){
		var storeFiveDaysDaily=this.fiveDayStore
		storeFiveDaysDaily.getProxy().url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json';
        storeFiveDaysDaily.load();
        var viewFiveDaysDaily=this.getViewFiveDaysDaily()
        viewFiveDaysDaily.bindStore(storeFiveDaysDaily)
      
        var storeDayHourly=this.fiveDayHourlyStore;
        storeDayHourly.getProxy().url='http://api.openweathermap.org/data/2.5/forecast?q='+cityName;
        storeDayHourly.load();
	},


    storeLoadSixteenDayDefer: function(cityName) {

        var deferred = Ext.create('Deft.Deferred');

        var storeSixteenDay=this.sixteenDayStore;
        storeSixteenDay.load({
            url:'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=16&mode=json',

            callback: function(records, operation, success) {
                if (success) {
                    deferred.resolve(this);
                } else {
                    deferred.reject("Error loading Companies.");
                }
            }
          });

      return deferred.promise;
    },






	showWeatherOneDayHourly:function(view, record, item, idx, event, opts){
        
		var weatherHourlyStore=this.fiveDayHourlyStore;
		weatherHourlyStore.clearFilter(true);
		var dayFilter=record.get('dt');
		weatherHourlyStore.filter("day", dayFilter);
		var viewDayHourly=this.getViewDayHourly();       
     	viewDayHourly.bindStore(weatherHourlyStore);     			 
	},


	getWeatherSixteenDays:function(cityName){
        var viewSexteenDays=this.getViewSexteenDays()        
        this.storeLoadSixteenDayDefer(cityName).then({
            success: function(store) {
                viewSexteenDays.bindStore(store)            
            },
            failure: function(error) {
                alert('everusing bad')
            }
        })
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
