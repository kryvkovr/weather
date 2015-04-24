Ext.define('Weather.model.FiveDaysHourly', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'dt',           
            convert: function(v, record){
                        return moment.unix(v).format('dddd');
                    }
        },{
        	name:'main'        	
    },{
        	name:'weather',
        	convert: function(v, record){
                        return v[0].icon;
                    }        	
    }]   
});