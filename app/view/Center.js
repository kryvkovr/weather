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
            }]   
        }]              
    },{
        xtype:'sixteen-days'
    }]
});