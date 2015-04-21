Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    items:[{
        id: 'weatherOneDay',
        title: '1 день',
        tpl: new Ext.XTemplate('<p>City Name:{name}</p>',
                                '<p>min-temperature:{max_temperature}</p>',
                                '<p>max-temperature:{min_temperature}</p>'
                                )
        
    },{
        title: '5 Днів',
        //tpl:'<p>Name: {name}</p>'
        html: 'Тут буде погода за 5 днів'
    },{
        title: '16 днів',
        html: 'Тут буде погода за 16 днів'
    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});