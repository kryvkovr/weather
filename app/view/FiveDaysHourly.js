Ext.define("Weather.view.FiveDaysHourly", {
    extend: 'Ext.view.View',
    //id:'weatherDaily',
    alias: 'widget.weather-five-days-hourly',
    requires:[
        'Weather.template.FiveDaysDaily'
    ],
    
    height:200,
    itemSelector: '',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysDaily.create({});
        this.callParent(arguments);
    },
   
    store:'WeatherFiveDaysDaily'
});