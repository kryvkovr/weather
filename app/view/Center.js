Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    items:[{
        id: 'weatherOneDay',
        title: '1 день',
        html: 'Тут буде погода на один день'
    },{
        title: '5 Днів',
        html: 'Тут буде погода за 5 днів'
    },{
        title: '16 днів',
        html: 'Тут буде погода за 16 днів'
    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});