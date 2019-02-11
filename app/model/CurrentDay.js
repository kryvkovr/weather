Ext.define('Weather.model.CurrentDay', {
    extend: 'Ext.data.Model',
    fields: [
        { 	name:'sys', type:'auto'},
        {   name:'weather', type:'auto'},
        {   name:'main', type:'auto'},
        {   name:'name', type:'auto'},
        {   name:'wind', type:'auto'},
        {
            name:'icon', type:'auto',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.icon;
            }
        },
        {
            name:'description',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.description;
            }         
        },
        {
            name:'sunrise',
            convert: function (v, record){
                var sunSystem = record.get('sys').sunrise;
                return moment.unix(sunSystem).format('h:mm:ss');
            }         
        },
        {
            name:'sunset',
            convert: function (v, record){
                var sunSystem = record.get('sys').sunset;
                return moment.unix(sunSystem).format('h:mm:ss');
            }         
        }                    	
    ]   
});







