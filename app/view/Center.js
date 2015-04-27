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
            
            xtype:'container',
            items: [{
                id:'weatherDaily',
                height:200,
                xtype: 'dataview', 
                itemTpl:'<div class="weatherDayBlock">'+
                            '<div style="font-size:20px">Day:{dt}</div>'+
                            '<div style="color:red">temp max {temp.max}</div>'+
                            '<div style="color:green">temp min {temp.min}</div>'+
                        '</div>',
                        
                store:'WeatherFiveDaysDaily',
                listeners: {
                    'itemclick': function(view, record, item, idx, event, opts){                   
                         Weather.app.getController('Central').showWeatherHourly(idx)
                }
             }
            },{
                id:'daysWeatherHourly',               
                xtype: 'dataview', 
                itemTpl:'<div class="weatherDayHour">'+
                            '<div style="font-size:15px;color:#fff">Hour-{dt}</div>'+
                            '<div style="color:red">temp min {main.temp_min}</div>'+
                            '<div style="color:yellow">temp max {main.temp_max}</div>'+
                            '<img src="http://openweathermap.org/img/w/{weather}.png" width="100"></img>'+
                        '</div>'            
            }]   
        }]   
            
    },{
        title: '16 днів',
        autoScroll: true,  
        xtype: 'dataview', 
        itemTpl:'<div class="weatherDayBlock">'+
                    '<div style="font-size:20px">{dt} {temp.max} {temp.min} {weather}</div>'+
                '</div>',
        store:'WeatherSixteenDays'
    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});