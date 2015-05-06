Ext.define('Weather.Classes.GetWeatherData', {
    getWeatherJson:function(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onreadystatechange = function() {
            if (req.readyState==4 && req.status == 200){
                resolve(req.response);
            }else {
      }
    }
    req.send();
  });
}


   
});