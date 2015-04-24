Ext.define('Weather.model.FiveDaysHourly', {
    extend: 'Ext.data.Model',
    fields: [{
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
    }]   
});