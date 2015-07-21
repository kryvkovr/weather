Ext.define('Weather.Application', {
    name: 'Weather',

    extend: 'Ext.app.Application',

    views: [
        "Weather.view.Center",
        "Weather.view.Header",
        "Weather.view.FiveDaysDaily",
        "Weather.view.FiveDaysHourly",
        "Weather.view.SixteenDays",
        "Weather.view.CurrentDay",    
    ],

    controllers: [        
       'Weather.controller.Central',
       'Weather.controller.Main'
    ],

    models: [
        // TODO: add stores here
        'Weather.model.FiveDaysDaily',
        'Weather.model.FiveDaysHourly',
        'Weather.model.SixteenDays',
        'Weather.model.CurrentDay'
    ],
    stores: [
        // TODO: add stores here
        'WeatherFiveDaysDaily',
        'WeatherFiveDaysHourly',
        'WeatherSixteenDays',
        'CurrentDay'
    ]
});
