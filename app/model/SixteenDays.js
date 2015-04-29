Ext.define('Weather.model.SixteenDays', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'dt', type:'auto',          
            convert: function(v, record){
                return moment.unix(v).format('dddd')+':'+moment.unix(v).format('MM-DD-YYYY');
            }
        },

        {	name:'temp', type:'auto' },

        {
        	name:'icon', type:'auto',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.icon;
            }
        },

        {    name:'pressure', type:'auto' },

        {
            name:'weather' , type:'auto' },        
        
        {
            name:'description',
            convert: function (v, record){
                var weather = record.get('weather')[0];
                return weather.description;
            }         
        },

        {   name:'speed', type:'auto'},       	
    ]   
});
