Ext.define('Weather.model.FiveDaysDaily', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'dt',           
            convert: function(v, record){
                        return moment.unix(v).format('dddd') +'time is'+v;
                    }
        },{
        	name:'temp'        	
    }]   
});