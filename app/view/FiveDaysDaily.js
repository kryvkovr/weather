Ext.define("Weather.view.FiveDaysDaily", {
    extend: 'Ext.view.View',
    
    alias: 'widget.weather-five-days-daily',

    requires:[
        'Weather.template.FiveDaysDaily',
        'Weather.store.WeatherFiveDaysDaily',
        'Weather.model.FiveDaysDaily'
    ],

    id:'weatherDaily',
    height:200,
    //itemSelector: 'weatherDayBlock',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysDaily.create({});
        this.callParent(arguments);
    }
});