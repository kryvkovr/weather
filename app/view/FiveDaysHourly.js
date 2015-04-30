Ext.define("Weather.view.FiveDaysHourly", {    
    extend: 'Ext.view.View',
    alias: 'widget.weather-five-days-hourly',
    requires:[
        'Weather.template.FiveDaysHourly'
    ],

    id:'daysWeatherHourly',
    height:200,
   // itemSelector: 'weatherDayHour',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysHourly.create({});
        this.callParent(arguments);
    }
});