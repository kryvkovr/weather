Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.data.JsonP', 'Ext.Msg', 'Weather.view.Header'],

    init: function(){
    	Ext.Ajax.useDefaultXhrHeader = false;
    	var element = Ext.getCmp('newId');
        this.control({
             'weatherHeader button': {
                 click: this.getAllWeather
             }
        });
    },

	getWeatherFiveDaysDaily:function(){
		var stor=Ext.getStore('WeatherFiveDaysDaily')
            stor.load({
                headers: { 'Access-Control-Allow-Origin': '*'},         
                callback: function(response){console.log(response)}
            })  
	},

	getAllWeather:function(){
		//this.getWeatherOneDay()		
		this.getWeatherFiveDaysDaily()
	}
});
