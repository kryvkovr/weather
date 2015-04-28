Ext.define("Weather.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    requires:[        
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Spacer'
    ],
    alias: 'widget.weather-header',
    region:'north',
    height:50,
    items: [{
            text: 'CITY NAME',                 
        },{
            xtype: 'tbspacer'
        },{
            xtype    : 'textfield',
            id       : 'cityName',
            name     : 'field',
            emptyText: 'search'
        },{
            id: 'showWeather',
            xtype: 'button',
            height:'100%',
            text : 'GET WEATHER',
            margin:'15 0 0 25',
        }]  
});
