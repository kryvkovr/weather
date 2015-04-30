Ext.define("Weather.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.weather-header',
    requires:[        
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Spacer',
        'Ext.form.Label'
    ],
    height:50,
    items: [
        {
           xtype: 'label',
           text: 'CITY NAME' 
        },{
           xtype: 'tbspacer'
        },{
            xtype    : 'textfield',
            itemId   : 'cityName',
            enableKeyEvents: true,
            name     : 'field',
            emptyText: 'search'
        },{
            itemId  : 'showWeather',
            xtype   : 'button',
            height  :'100%',
            text    : 'GET WEATHER',
            margin  :'15 0 0 25',
        }
    ]  
});
