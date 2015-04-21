Ext.define('Weather.Application', {
    name: 'Weather',

    extend: 'Ext.app.Application',

    views: [
        "Weather.view.Center"      
    ],

    controllers: [        
       'Weather.controller.Central'
    ],

    stores: [
        // TODO: add stores here
    ]
});
