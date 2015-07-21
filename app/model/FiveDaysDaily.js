Ext.define('Weather.model.FiveDaysDaily', {
    extend: 'Ext.data.Model',
    fields: [
    	{ 	name:'temp', type:'auto'},
    	    
    	{
            name: 'dt', type:'auto',           
            convert: function(v, record){
            	return moment.unix(v).format('dddd');
            }
        }
    ]   
});






