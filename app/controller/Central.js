Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP',
        'Ext.Msg',
        'Weather.view.Header',
        'Weather.store.WeatherFiveDaysDaily',
        'Weather.view.FiveDaysHourly',
        'Weather.model.FiveDaysDaily',
        'Weather.model.SixteenDays',
        'Weather.Classes.GetWeatherData'
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

    init: function () {

        this.promiseGetWeather = Ext.create('Weather.Classes.GetWeatherData');

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


    getWeatherCurrentDay: function (cityName) {
        var self = this;
        var storeCurrentDay = Ext.getStore('CurrentDay');
        var viewCurrentDay = this.getViewCurrentDay();

        this.promiseGetWeather.getWeatherJson("http://api.openweathermap.org/data/2.5/weather?q=" + cityName).then(
            function (response) {
                storeCurrentDay.loadRawData(JSON.parse(response));
                viewCurrentDay.bindStore(storeCurrentDay);
            },
            function (error) {
                self.showErrorMsg(error);
            });
    },


    getWeatherFiveDays: function (cityName) {
        var self = this;
        var storeFiveDaysDaily = Ext.getStore('WeatherFiveDaysDaily');
        var viewFiveDaysDaily = this.getViewFiveDaysDaily();


        self.promiseGetWeather.getWeatherJson('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&cnt=5&mode=json'
        ).then(
            function (response) {
                storeFiveDaysDaily.loadRawData(JSON.parse(response));
                viewFiveDaysDaily.bindStore(storeFiveDaysDaily);
                return self.promiseGetWeather.getWeatherJson('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName);
            }).then(
            function (response) {
                var storeFiveDaysHourly = Ext.getStore('WeatherFiveDaysHourly');
                storeFiveDaysHourly.loadRawData(JSON.parse(response));
            }).catch(function (error) {
                self.showErrorMsg(error);
            })
    },


    getWeatherSixteenDays: function (cityName) {
        var self = this;
        var storeSixteenDay = Ext.getStore('WeatherSixteenDays');
        var viewSexteenDays = this.getViewSexteenDays();

        self.promiseGetWeather.getWeatherJson('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&cnt=16&mode=json').then(
            function (response) {
                storeSixteenDay.loadRawData(JSON.parse(response).list);
                viewSexteenDays.bindStore(storeSixteenDay);
            },
            function (error) {
                self.showErrorMsg(error)
            })
    },

    
    showErrorMsg: function (error) {
        Ext.Msg.show({
            title: error,
            msg: 'Pls try again later.',
            buttons: Ext.Msg.OK
        });

    },


    showWeatherOneDayHourly: function (view, record, item, idx, event, opts) {
        var weatherHourlyStore = Ext.getStore('WeatherFiveDaysHourly');
        weatherHourlyStore.clearFilter(true);
        var dayFilter = record.get('dt');
        weatherHourlyStore.filter("day", dayFilter);
        var viewDayHourly = this.getViewDayHourly();
        viewDayHourly.bindStore(weatherHourlyStore);
    },


    getAllWeather: function () {
        var cityName = this.getCityName().getValue();
        if (cityName == '') {
            Ext.Msg.show({
                title: 'No city name',
                msg: 'Pls enter a city name.',
                buttons: Ext.Msg.OK
            });
        } else {
            this.getWeatherFiveDays(cityName);
            this.getWeatherSixteenDays(cityName);
            this.getWeatherCurrentDay(cityName);
        }
        this.getCityName().setValue('');
    },


    getWeatherEnterClick: function (textfield, eventObject) {
        if (eventObject.getCharCode() === Ext.EventObject.ENTER) {
            this.getAllWeather();
        }
    }
});
