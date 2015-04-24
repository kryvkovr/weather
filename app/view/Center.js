Ext.define("Weather.view.Center", {
   extend:'Ext.tab.Panel',
	alias:'widget.centerPanel',
	title: 'Погода',
    region:'center',
    overflow : 'scroll',
    items:[{
        //id: 'weatherOneDay',
        title: '1 день',
        width:'300px',
        tpl: new Ext.XTemplate('<h1>{name}</h1>',
                                '<p class="my"><img src="{icon}" width=150></p>',
                                '<h2><span class="min">min-temperature:</span><b>{max_temperature}</b></h2>',
                                '<h2><span class="max">max-temperature:</span><b>{min_temperature}</b></h2>'
                                )
        
    },{
        title:"5 днів",
        xtype:'container',
        layout:'card',        
        items: [{
            title:"second container",
            xtype:'container',
            items: [{
                xtype: 'dataview', 
                height:300,
                itemTpl:'<span style="font-size:20px">{dt}</span>',
                store:'WeatherFiveDaysDaily'
               // store:{
               //          fields: ['name'],
               //              data: [
               //                  {name: 'Jamie'},
               //                  {name: 'Rob'},
               //                  {name: 'Tommy'},
               //                  {name: 'Jacky'},
               //                  {name: 'Ed'}
               //              ]
               //          }
            },{

                xtype: 'container',
                height:300,
                title: 'Ф. Достоевский',
                html: 'друга панель'
                
            }]   
        }]   
            
    },{
        title: '16 днів',
        html: 'Тут буде погода за 16 днів'

    },{
        title: 'Історія',
        html: 'Історія погоди'
    }]
});