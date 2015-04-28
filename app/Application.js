Ext.define('Weather.Application', {
    name: 'Weather',

    extend: 'Ext.app.Application',

    views: [
        "Weather.view.Center", "Weather.view.Header", "Weather.view.FiveDaysDaily","Weather.view.FiveDaysHourly"    
    ],

    controllers: [        
       'Weather.controller.Central',
       'Weather.controller.Main'
    ],

    stores: [
        // TODO: add stores here
        'WeatherFiveDaysDaily',
        'WeatherFiveDaysHourly',
        'WeatherSixteenDays'
    ],
    models: [
        // TODO: add stores here
        'Weather.model.FiveDaysDaily',
        'Weather.model.FiveDaysHourly',
        'Weather.model.SixteenDays'
    ]    
});
