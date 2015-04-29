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
            //fields: ['sys', "weather", "main"],
            model:"Weather.model.CurrentDay",
            data  : [
                {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
                {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
                {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'}
                
            ]
        },

    initComponent: function() {
        this.itemTpl=Weather.template.CurrentDay.create({});
        this.callParent(arguments);
    }
});