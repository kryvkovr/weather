Ext.define('Weather.model.FiveDaysHourly', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'dt',           
            convert: function(v, record){
                        return moment.unix(v).format('H-00');
            }
        },{
        	name:'main'        	
        },{
        	name:'weather',
        	convert: function(v, record){
                        return v[0].icon;
            }        	
        },
        // { name: 'city', type: 'auto'},
        // { name: 'list', type: 'auto'},
        // { name: 'dt_txt', type: 'string'},
         { name: 'weather', type: 'auto'},

        { name: 'icon', convert: function (v, record){
            var weather = record.get('weather')[0];
            return weather.icon;
        }}
    ]   
});