Ext.define("Weather.view.Header", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.weatherHeader',
    region:'north',
    height:50,
    items: [{
            text: 'Назва міста',                   
        },'  ',{
            xtype    : 'textfield',
            id       : 'cityName',
            name     : 'field',
            emptyText: 'Найти'
        },{
            id: 'showWeather',
            xtype: 'button',
            height:'100%',
            text : 'Взнати погоду',
            margin:'15 0 0 25',
        }]  
});