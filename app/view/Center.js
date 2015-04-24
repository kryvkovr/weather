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
                height:400,
                itemTpl:'<div style="font-size:20px">{dt}</div>'+
                        '<div style="color:red">{temp.max}</div>'+
                        '<div style="color:green">{temp.min}</div>',

                store:'WeatherFiveDaysDaily',
                listeners: {
                 'itemclick': function(view, record, item, idx, event, opts) {
                    Weather.app.getController('Central').sendAlert(idx)
                   //alert(idx)

                }
             }
            },{
                xtype: 'dataview', 
                height:400,
                itemTpl:'<div style="font-size:15px">Година-{dt}</div>'+
                        '<div style="color:red">мінмальна температура {main.temp_min}</div>'+
                        '<div style="color:green">максимальна температура{main.temp_max}</div>'+
                        '<img src="http://openweathermap.org/img/w/{weather}.png"></img>',

                store:'WeatherFiveDaysHourly',
                listeners: {
                 'itemclick': function(view, record, item, idx, event, opts) {
                    Weather.app.getController('Central').sendAlert(idx)
                   //alert(idx)

                }
             }
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