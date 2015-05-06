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
        this.Promise=Ext.create('Weather.Classes.GetWeatherData')
            
        

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


    storeLoadCurrentDayDefer: function(cityName) {


      //   var deferred = Ext.create('Deft.Deferred');
      //   var storeCurrentDay=Ext.getStore('CurrentDay')
      //   storeCurrentDay.load({
      //       url:"http://api.openweathermap.org/data/2.5/weather?q="+cityName,
      //       callback: function(records, operation, success) {
      //           if (success) {
      //               deferred.resolve(this);
      //           } else {
      //               deferred.reject('Cant load weather for current day ');
      //           }
      //       }
      //     });
      // return deferred.promise;
    },

    getWeatherCurrentDay:function(cityName){
        this.Promise.getWeatherJson("http://api.openweathermap.org/data/2.5/weather?q="+cityName).then(function(response) {
          console.log("Success!", response);
        }, function(error) {
          console.error("Failed!", error);
        });
        // var viewCurrentDay=this.getViewCurrentDay()      
        // this.storeLoadCurrentDayDefer(cityName).then({
        //     success: function(store) {
        //         viewCurrentDay.bindStore(store)            
        //     },
        //     failure: function(error) {
        //         Ext.Msg.show({
        //             title: error,
        //             msg: 'Pls try again later.',
        //             buttons: Ext.Msg.OK
        //         });
        //     }
        // })
    },


    storeLoadFiveDaysDailyDefer: function(cityName) {
        var deferred = Ext.create('Deft.Deferred');
        var storeFiveDaysDaily=this.fiveDayStore
        storeFiveDaysDaily.load({
            url:'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&cnt=5&mode=json',
            callback: function(records, operation, success) {
                if (success) {
                    deferred.resolve(this);
                } else {
                    deferred.reject('Cant load weather for five days daily ');
                }
            }
          });
      return deferred.promise;
    },

    storeLoadFiveDaysHourlyDefer: function(cityName) {
        var deferred = Ext.create('Deft.Deferred');
        var storeFiveDaysHourly=this.fiveDayHourlyStore
        storeFiveDaysHourly.load({
            url:'http://api.openweathermap.org/data/2.5/forecast?q='+cityName,
            callback: function(records, operation, success) {
                if (success) {
                    deferred.resolve(this);
                } else {
                    deferred.reject('Cant load weather for five days hourly ');
                }
            }
          });
      return deferred.promise;
    },


	getWeatherFiveDays:function (cityName){
        var viewFiveDaysDaily=this.getViewFiveDaysDaily()
        this.storeLoadFiveDaysDailyDefer(cityName).then({
            success: function(store) {
                viewFiveDaysDaily.bindStore(store)            
            },
            failure: function(error) {
               Ext.Msg.show({
                    title:error,
                    msg: 'Pls try again later.',
                    buttons: Ext.Msg.OK
                });
            }
        })

        this.storeLoadFiveDaysHourlyDefer(cityName).then({
            success: function(store) {
               // console.log(store)         
            },
            failure: function(error) {
               Ext.Msg.show({
                    title:error,
                    msg: 'Pls try again later.',
                    buttons: Ext.Msg.OK
                });
            }
        })
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
