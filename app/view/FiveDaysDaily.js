Ext.define("Weather.view.FiveDaysDaily", {
    extend: 'Ext.view.View',
    id:'weatherDaily',
    alias: 'widget.weather-five-days-daily',
    requires:[
        'Weather.template.FiveDaysDaily'
    ],

    height:200,
    itemSelector: '',

    initComponent: function() {
        this.itemTpl=Weather.template.FiveDaysDaily.create({});
        this.callParent(arguments);
    },
   
    store:'WeatherFiveDaysDaily',
    listeners: {

        'itemclick': function(view, record, item, idx, event, opts) {
           Weather.app.getController('Central').showWeatherHourly(idx)
        }
    }
});