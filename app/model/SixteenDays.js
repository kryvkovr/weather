Ext.define('Weather.model.SixteenDays', {
    extend: 'Ext.data.Model',
    fields: [
        {    name:'pressure', type:'auto' },

        {
            name:'weather' , type:'auto' },  

        {   name:'speed', type:'auto'}, 

         {  name:'temp', type:'auto' },          

        {
            name: 'dt', type:'auto',          
            convert: function(v, record){
                return moment.unix(v).format('dddd')+':'+moment.unix(v).format('MM-DD-YYYY');
            }
        },

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
        }

        
    ]   
});
