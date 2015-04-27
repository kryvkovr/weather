Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    overflow : 'scroll',
    //autoScroll: true,
    items:[{
        //id: 'weatherOneDay',
        title: '1 день',
        width:'300px',
        tpl: new Ext.XTemplate('<h1>{name}</h1>',
                                '<p class="my"><img src="{icon}" width=150></p>',
                                '<h2><span class="min">min-temperature:</span><b>{max_temperature}</b></h2>',
                                '<h2><span class="max">max-temperature:</span><b>{min_temperature}</b></h2>'
                                )
        
    },{
        title:"5 днів",
        xtype:'container',
        layout:'card',
        autoScroll: true,        
        items: [{
            title:"second container",
            xtype:'container',
            items: [{
                id:'weatherDaily',
                xtype: 'dataview', 
                height:250,
                itemTpl:'<div class="weatherDayBlock">'+
                            '<div style="font-size:20px">Day:{dt}</div>'+
                            '<div style="color:red">temp max {temp.max}</div>'+
                            '<div style="color:green">temp min {temp.min}</div>'+
                        '</div>',
                        
                store:'WeatherFiveDaysDaily',
                listeners: {
                 'itemclick': function(view, record, item, idx, event, opts) {
                    //alert(idx)
                    Weather.app.getController('Central').showWeatherHourly(idx)
                }
             }
            },{
                id:'daysWeatherHourly',
                autoScroll: true,
                xtype: 'dataview', 
                itemTpl:'<div class="weatherDayHour">'+
                            '<div style="font-size:15px;color:#fff">Hour-{dt}</div>'+
                            '<div style="color:red">temp min {main.temp_min}</div>'+
                            '<div style="color:yellow">temp max {main.temp_max}</div>'+
                            '<img src="http://openweathermap.org/img/w/{weather}.png" width="100"></img>'+
                        '</div>',

                //store:'WeatherFiveDaysHourly',
                listeners: {
                 'itemclick': function(view, record, item, idx, event, opts) {
                    //Weather.app.getController('Central').showWeatherHourly(idx)
                   //alert(idx)

                }
             }
            }]   
        }]   
            
    },{
        title: '16 днів',
        html: 'Тут буде погода за 16 днів'

    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});