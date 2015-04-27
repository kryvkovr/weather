Ext.define('Weather.model.SixteenDays', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'dt'           
            // convert: function(v, record){
            //             return moment.unix(v).format('dddd');
            //         }
        },{
        	name:'temp'        	
    }]   
});