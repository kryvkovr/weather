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
        'Weather.store.WeatherFiveDaysDaily',
        'WeatherFiveDaysDaily'
    ]
});
