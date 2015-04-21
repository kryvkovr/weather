Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    items:[{
        id: 'weatherOneDay',
        title: '1 день',
        tpl: new Ext.XTemplate('<h1>City Name:{name}</h1>',
                                '<h2>min-temperature:<b>{max_temperature}</b></h2>',
                                '<h2>max-temperature:<b>{min_temperature}</b></h2>'
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