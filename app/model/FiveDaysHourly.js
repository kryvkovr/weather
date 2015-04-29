Ext.define('Weather.model.FiveDaysHourly', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'dt' , type:'auto'},           
           
        { name:'main' , type:'auto'},       	
        {
        	name:'weather',
        	convert: function(v, record){
                        return v[0].icon;
            }        	
        },
        
        { name: 'weather', type: 'auto'},

        { name: 'icon', convert: function (v, record){
            var weather = record.get('weather')[0];
            return weather.icon;
            }
        },
        { 
            name: 'hour',
            convert: function (v, record){
                var data = record.get('dt');
                return moment.unix(data).format('H-00');
            }
        },
        { 
            name: 'day',
            convert: function (v, record){
                var data = record.get('dt');
                return moment.unix(data).format('dddd');
            }
        }

    ]   
});