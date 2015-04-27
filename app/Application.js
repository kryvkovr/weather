Ext.define('Weather.Application', {
    name: 'Weather',

    extend: 'Ext.app.Application',

    views: [
        "Weather.view.Center", "Weather.view.Header"     
    ],

    controllers: [        
       'Weather.controller.Central'
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
