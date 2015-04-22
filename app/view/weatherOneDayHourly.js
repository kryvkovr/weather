Ext.define("Weather.view.weatherOneDayHourly", {
   extend:'Ext.tab.Panel',
	alias:'widget.aliasweatherOneDayHourly',
    height:500,
    region:'south',
    items:[{
        tpl: new Ext.XTemplate('<tpl for=".">',
                                '<div class="weather_block">',
                                    '<p>Data: {data}</p>',
                                    '<p><img src="{icon}" width=150></p>',
                                    '<p><span class="min">min-temperature:</span>{max_temperature}</p>',
                                    '<p><span class="max">max-temperature:{min_temperature}:</span></p>',
                                '</div>',
                                '</tpl>')
              
    }]
});