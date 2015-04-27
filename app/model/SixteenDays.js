Ext.define('Weather.model.SixteenDays', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'dt',           
            convert: function(v, record){
                        return moment.unix(v).format('dddd')+':'+moment.unix(v).format('MM-DD-YYYY');
                    }
        },{
        	name:'temp'        	
    }]   
});