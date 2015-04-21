Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',
    views: [
        "Weather.view.Center"
    ],
    requires: ['Ext.data.JsonP', 'Ext.Msg'],
    init: function(){
    
        this.control({
             'aliasmyheader button': {
                 click: this.getJsonOneDay
             }
        });
    },

    getJsonOneDay:function(){
    	var cityName=Ext.getCmp('cityName').getValue()
    	if(cityName==''){
    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
    	}else{
			Ext.data.JsonP.request({
	        url: "http://api.openweathermap.org/data/2.5/weather?q="+cityName,
	        params: {
	        },
	        
	        success : function(response){
	        	var el=Ext.getCmp('weatherOneDay')
	        		data={name:'Vova', min_temperature:100, max_temperature:150}
	        		el.update(data)	                            
	          	console.log(response)         
	         },
	         failure: function(response) {
	              Ext.Msg.alert('Помилка', 'Не вдалося знайти заданого міста', Ext.emptyFn);
	          }
    		});
		}
	}
});
