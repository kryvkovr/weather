Ext.define("Weather.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    requires:[        
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Spacer'
    ],
    alias: 'widget.weather-header',
    height:50,
    items: [{
            text: 'CITY NAME',                 
        },{
            xtype: 'tbspacer'
        },{
            xtype    : 'textfield',
            itemId   : 'cityName',
            name     : 'field',
            emptyText: 'search'
        },{
            itemId: 'showWeather',
            xtype: 'button',
            height:'100%',
            text : 'GET WEATHER',
            margin:'15 0 0 25',
        }]  
});
