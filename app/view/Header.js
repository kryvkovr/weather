Ext.define("Weather.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    requires:[        
        'Ext.toolbar.TextItem'
    ],
    alias: 'widget.weatherHeader',
    region:'north',
    height:50,
    items: [{
            text: 'CITY NAME',                 
        },'  ',{
            xtype    : 'textfield',
            id       : 'cityName',
            cls      :'myheader',
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
