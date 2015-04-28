Ext.define("Weather.view.FiveDaysDaily", {
    id:'weatherDaily',
    alias: 'widget.weather-five-days-daily',
    extend: 'Ext.view.View',
    height:200,
    //xtype: 'dataview', 
    itemTpl:new Ext.XTemplate('<div class="weatherDayBlock">',
                                    '<div style="font-size:20px">Day:{dt}</div>',
                                    '<div style="color:red">temp max {temp.max}</div>',
                                    '<div style="color:green">temp min {temp.min}</div>',
                                '</div>'
                            ),                        
    store:'WeatherFiveDaysDaily',
    listeners: {
        'itemclick': function(view, record, item, idx, event, opts){                   
             Weather.app.getController('Central').showWeatherHourly(idx)
        }
    }
});