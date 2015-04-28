Ext.define("Weather.view.Center", {
    extend:'Ext.tab.Panel',
	alias:'widget.center-panel',
	title: 'WEATHER',
    overflow : 'scroll',
    items:[{    
        title: '1 DAY',
        width:'300px',
        tpl: new Ext.XTemplate('<h1>{name}</h1>',
                                '<p class="my"><img src="{icon}" width=150></p>',
                                '<h2><span class="min">min-temperature:</span><b>{max_temperature}</b></h2>',
                                '<h2><span class="max">max-temperature:</span><b>{min_temperature}</b></h2>'
                                )       
    },{
        title:"5 DAYS",
        xtype:'container',
        autoScroll: true,        
        items: [{           
            xtype:'container',
            items: [{
                xtype:'weather-five-days-daily'
            },{

                xtype:'weather-five-days-hourly'
                // id:'daysWeatherHourly',               
                // xtype: 'dataview', 
                // itemTpl:new Ext.XTemplate('<div class="weatherDayHour">',
                //                                 '<div style="font-size:15px;color:#fff">Hour-{dt}</div>',
                //                                 '<div style="color:red">temp min {main.temp_min}</div>',
                //                                 '<div style="color:yellow">temp max {main.temp_max}</div>',
                //                                 '<img src="http://openweathermap.org/img/w/{icon}.png" width="100"></img>',
                //                             '</div>')
            }]   
        }]   
            
    },{
        title: '16 DAYS',
        autoScroll: true,  
        xtype: 'dataview', 
        itemTpl:new Ext.XTemplate('<div class="sixteenWeatherDayBlock">{dt}',                                      
                                            '<div class="weatherDescription">',
                                                '<img src="http://openweathermap.org/img/w/{weather}.png"></img>',
                                                '<div class="tempMax">Max-temp: {temp.max}</div>',
                                                '<div class="tempMin">Min-temp: {temp.min}</div>',
                                                '<div class="tempNight">Night-temp: {temp.night}</div>',
                                            '</div>',                                        
                                    '</div>'
                                ),
         store:'WeatherSixteenDays'
    }]
});