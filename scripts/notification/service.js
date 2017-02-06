myApp.service('notification', function($log)
{
    this.notification = function(title, message, icon, link)
    {   
        // request permission on page load
        document.addEventListener('DOMContentLoaded', function () 
        {
          if (Notification.permission !== "granted")
            Notification.requestPermission();
        });

        if (!Notification) 
        {
            alert('Desktop notifications not available in your browser. Try Chromium.'); 
            return;
        }

        if (Notification.permission !== "granted")
        {
            Notification.requestPermission();
        }
        else 
        {
            var notification = new Notification(title, 
        {
            icon: icon,
            body: message
        });
        //var audio = new Audio('./media/oringz-w448.mp3');
        //audio.play();
        notification.onclick = function () {
          window.open(link);      
        };
        } 
    }
});