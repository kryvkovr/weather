Ext.define('Weather.store.CurrentDay', {
    extend: 'Ext.data.Store',
    model:"Weather.model.CurrentDay",
    
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json'
        }
    }       
});