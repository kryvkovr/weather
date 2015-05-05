Ext.define("Weather.view.FiveDaysDaily", {
    extend: 'Ext.view.View',
    
    alias: 'widget.weather-five-days-daily',

    requires:[
        'Weather.template.FiveDaysDaily'
    ],

    id:'weatherDaily',
    height:200,
    //itemSelector: 'weatherDayBlock',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysDaily.create({});
        this.store=Weather.store.WeatherFiveDaysDaily.create({});
        console.log(this.store)
        this.callParent(arguments);
    }
   
   // store:'WeatherFiveDaysDaily'
});