Ext.define("Weather.view.FiveDaysHourly", {
    extend: 'Ext.view.View',
    //id:'weatherDaily',
    alias: 'widget.weather-five-days-hourly',
    requires:[
        'Weather.template.FiveDaysHourly'
    ],
    
    height:200,
    itemSelector: '',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysHourly.create({});
        this.callParent(arguments);
    },
   
    store:'WeatherFiveDaysHourly'
});