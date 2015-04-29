Ext.define("Weather.view.FiveDaysHourly", {
    id:'daysWeatherHourly',
    extend: 'Ext.view.View',
    alias: 'widget.weather-five-days-hourly',
    requires:[
        'Weather.template.FiveDaysHourly'
    ],
    
    height:200,
    itemSelector: '',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysHourly.create({});
        this.callParent(arguments);
    }
});