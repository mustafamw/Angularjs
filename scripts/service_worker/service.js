myApp.service('serviceWorker', function($log, $http)
{
    this.sw = function()
    {
        if ('serviceWorker' in navigator) 
        {
          //console.log('Service Worker is supported');
          navigator.serviceWorker.register('./sw.js').then(function() {
            return navigator.serviceWorker.ready;
          }).then(function(reg) 
          {
            //console.log('Service Worker is ready :^)', reg);
            reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) 
            {
                var endpoint_reg_id = sub.endpoint;
                var reg_arr = endpoint_reg_id.split("/");
              	var url = api_link + "insert";
                $http({method:'POST', 
                       url:url, 
                       cache: true, 
                       params:{user_id:"232",
                               email:"musta@must.com",
                               position:"test",
                               registration_id:reg_arr[reg_arr.length-1]}}).then(
                function(response) 
                {

                }, 
                function(error){

                });
              //console.log('endpoint:', reg_arr[reg_arr.length-1]);
            });
          }).catch(function(error) {
            //console.log('Service Worker error :^(', error);
          });
        }
    }
});