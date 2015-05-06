Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP',
               'Ext.Msg',
                'Weather.view.Header',
                'Weather.store.WeatherFiveDaysDaily',
                'Weather.view.FiveDaysHourly',
                'Weather.model.FiveDaysDaily',
                'Weather.model.SixteenDays',
                'Deft.Deferred',
                'Weather.Classes.GetWeatherData',
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
        },
        {
            ref: 'viewCurrentDay',
            selector: 'weather-current-day'
        }
    ],

    init: function(){
        this.promiseGetWeather=Ext.create('Weather.Classes.GetWeatherData')
            
        

    	Ext.Ajax.useDefaultXhrHeader = false;

        this.fiveDayStore = Ext.create('Weather.store.WeatherFiveDaysDaily', {
            model: 'Weather.model.FiveDaysDaily'
        })

        this.fiveDayHourlyStore = Ext.create('Weather.store.WeatherFiveDaysHourly', {
            model: 'Weather.model.FiveDaysHourly'
        })

        this.sixteenDayStore = Ext.create('Weather.store.WeatherMainStore', {
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

    getWeatherCurrentDay:function(cityName){
        var storeCurrentDay=Ext.getStore('CurrentDay');
        var viewCurrentDay=this.getViewCurrentDay();

        this.promiseGetWeather.getWeatherJson("http://api.openweathermap.org/data/2.5/weather?q="+cityName).then(
            function(response){              
                 storeCurrentDay.loadRawData(JSON.parse(response));
                 viewCurrentDay.bindStore(storeCurrentDay) 
            },
            function(error) {
                console.error("Failed!", error);
        });
    },

    getWeatherFiveDays:function(cityName){
        var storeFiveDaysDaily=this.fiveDayStore;
        var viewFiveDaysDaily=this.getViewFiveDaysDaily()

        this.promiseGetWeather.getWeatherJson('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json').then(
            function(response){
                     storeFiveDaysDaily.loadRawData(JSON.parse(response));
                     viewFiveDaysDaily.bindStore(storeFiveDaysDaily) 
            },
            function(error) {
                console.error("Failed!", error);
        });


        var storeFiveDaysHourly=this.fiveDayHourlyStore;
       
        this.promiseGetWeather.getWeatherJson('http://api.openweathermap.org/data/2.5/forecast?q='+cityName).then(
            function(response){
                     storeFiveDaysHourly.loadRawData(JSON.parse(response));
            },
            function(error) {
                console.error("Failed!", error);
        });
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
                    deferred.reject('Cant load weather for sixteen days');
                }
            }
          });
      return deferred.promise;
    },

    getWeatherSixteenDays:function(cityName){
        var viewSexteenDays=this.getViewSexteenDays()        
        this.storeLoadSixteenDayDefer(cityName).then({
            success: function(store) {
                viewSexteenDays.bindStore(store)            
            },
            failure: function(error) {
                Ext.Msg.show({
                    title: error,
                    msg: 'Pls try again later.',
                    buttons: Ext.Msg.OK
                });
            }
        })
    },


	showWeatherOneDayHourly:function(view, record, item, idx, event, opts){        
		var weatherHourlyStore=this.fiveDayHourlyStore;
		weatherHourlyStore.clearFilter(true);
		var dayFilter=record.get('dt');
		weatherHourlyStore.filter("day", dayFilter);
		var viewDayHourly=this.getViewDayHourly();       
     	viewDayHourly.bindStore(weatherHourlyStore);     			 
	},


	getAllWeather:function(){
		var cityName =this.getCityName().getValue();
		if(cityName==''){
            Ext.Msg.show({
            title:'No city name',
            msg: 'Pls enter a city name.',
            buttons: Ext.Msg.OK
        });

		}else{            
			this.getWeatherFiveDays(cityName)
			this.getWeatherSixteenDays(cityName)
			this.getWeatherCurrentDay(cityName)
		}
		this.getCityName().setValue('');
	},


	getWeatherEnterClick:function(textfield, eventObject){
    	if (eventObject.getCharCode() === Ext.EventObject.ENTER) {
        	this.getAllWeather();
        }
    }
});
