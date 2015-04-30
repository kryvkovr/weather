Ext.define('Weather.model.FiveDaysHourly', {
    extend: 'Ext.data.Model',
    fields: [
        {   name: 'dt' , type:'auto'},                     
        {   name:'main' , type:'auto'},       	
        {   name: 'weather', type: 'auto'},
                 
        {
            name: 'icon', type:'auto',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.icon;
            }
        },

        {
            name: 'hour', type:'auto',
            convert: function (v, record){
                var data = record.get('dt');
                return moment.unix(data).format('H-00');
            }
        },

        {
            name: 'day', type:'auto',
            convert: function (v, record){
                var data = record.get('dt');
                return moment.unix(data).format('dddd');
            }
        }

    ]   
});