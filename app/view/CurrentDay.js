Ext.define("Weather.view.CurrentDay", {
    //id:'daysWeatherHourly',
    title: 'CURRENT DAY',
    extend: 'Ext.view.View',
    alias: 'widget.weather-current-day',

    requires:[
        'Weather.template.CurrentDay'
    ],

    // itemTpl:'hello world',
    itemSelector: '',
    
    store:{
            fields: ['name'],
            data  : [
                {name: 'Ed'},
                {name: 'Tommy'}
            ]
        },

    initComponent: function() {
        this.itemTpl=Weather.template.CurrentDay.create({});
        this.callParent(arguments);
    }
});