Ext.define("Weather.view.Center", {
    extend:'Ext.tab.Panel',
	alias:'widget.center-panel',
	title: 'WEATHER',
    overflow : 'scroll',
    items:[
        { xtype:'weather-current-day' },

        {
            title:"5 DAYS",
            xtype:'container',
            autoScroll: true,        
            items: [
                { xtype:'weather-five-days-daily'},
                { xtype:'weather-five-days-hourly'}
            ]              
        },
        
        { xtype:'sixteen-days'}
    ]
});