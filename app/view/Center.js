Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    items:[{
        id: 'weatherOneDay',
        title: '1 день',
        width:'300px',
        tpl: new Ext.XTemplate('<h1>{name}</h1>',
                                '<p class="my"><img src="{icon}" width=150></p>',
                                '<h2><span class="min">min-temperature:</span><b>{max_temperature}</b></h2>',
                                '<h2>max-temperature:<b>{min_temperature}</b></h2>'
                                )
        
    },{
        title: '5 Днів',
        id: 'weatherFiveDays',
        tpl: new Ext.XTemplate('<tpl for=".">',
                                '<h2>Data: {data}</h2>',
                                '<p><img src="{icon}"></p>',
                                '<p>min-temperature:{max_temperature}</p>',
                                '<p>max-temperature:{min_temperature}</p>',
                                '</tpl>')
              
    },{
        title: '16 днів',
        html: 'Тут буде погода за 16 днів'

    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});