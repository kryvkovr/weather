Ext.define('Weather.model.SixteenDays', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'dt',           
            convert: function(v, record){
                        return moment.unix(v).format('dddd')+':'+moment.unix(v).format('MM-DD-YYYY');
                    }
        },{
        	name:'temp'        	
        },{
        	name:'icon',
       
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.icon;
            }
        },{
            name:'pressure'         
        },{
            name:'weather'         
        },{
            name:'description',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.description;
            }         
        },{
            name:'speed'         
        }       	
    ]   
});