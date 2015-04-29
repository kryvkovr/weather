Ext.define('Weather.store.CurrentDay', {
    extend: 'Ext.data.Store',
    model:"Weather.model.CurrentDay",
    // data  : [
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'},
    //             {sys: 'SYS1', weather:'WEATHER 1', main:'MAIN 1'}
                
    //         ]
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json'
            //root: 'list'         
        }
    }       
});