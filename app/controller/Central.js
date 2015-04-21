Ext.define('Weather.controller.Central', {
    extend: 'Ext.app.Controller',
    views: [
        "Weather.view.Center"
    ],
    requires: ['Ext.data.JsonP', 'Ext.Msg'],
    init: function(){

        this.control({
             'aliasmyheader button': {
                 click: this.getAllWeather

             }
        });
    },

    getWeatherOneDay:function(){
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
	        		data={
	        			name:response.name,
	        			icon:"http://openweathermap.org/img/w/"+response.weather[0].icon+".png",
	        			min_temperature:response.main.temp_min,
	        			max_temperature:response.main.temp_max
	        		}
	        		
	        		el.update(data)	                            	
	         },
	         failure: function(response) {
	              Ext.Msg.alert('Помилка', 'Не вдалося знайти заданого міста', Ext.emptyFn);
	          }
    		});
		}
	},

	getWeatherFiveDays:function(){
		var self=this;
    	var cityName=Ext.getCmp('cityName').getValue()
    	if(cityName==''){
    		Ext.Msg.alert('Помилка', 'Введіть назву міста', Ext.emptyFn);
    	}else{
			Ext.data.JsonP.request({

	        url: "http://api.openweathermap.org/data/2.5/forecast?q="+cityName,
	        params: {
	        },	        
	        success : function(response){
	        	var el=Ext.getCmp('weatherFiveDays')
	        	//var mass=[1,2,3,4,5];

	        	//console.log(response)
	        	//console.log(self.transformListToData(response.list))
	        		// data=[{
	        		// 	name:response.name,
	        		// 	icon:"http://openweathermap.org/img/w/"+response.weather[0].icon+".png",
	        		// 	min_temperature:response.main.temp_min,
	        		// 	max_temperature:response.main.temp_max
	        		// }]

	        	var arr=[{max_temperature:'vova', min_temperature:'ivan'}, {max_temperature:'petro', min_temperature:'igor'}]
	        		 el.update(arr)	                            	
	        		
	         },

	         failure: function(response) {
	              Ext.Msg.alert('Помилка', 'Не вдалося знайти заданого міста', Ext.emptyFn);
	          }
    		});
		}
	},

	getAllWeather:function(){
		this.getWeatherOneDay()
		this.getWeatherFiveDays()

	},

	transformListToData:function(weatherList){
		var data=[];
		for(i=0; i<weatherList.length; i++){
			data.push({name:'Vova',
						icon:"http://openweathermap.org/img/w/"+'10d'+".png",
						min_temperature:100,
						max_temperature:150
					})
		}
		return data
	}

});
