window.onload = function () {

    var clipboard = new ClipboardJS('.btn-topcopy');

    clipboard.on('success', function (e) {
        console.log(e);

        document.getElementById('btn-copy').innerText = 'Copied!';
        
    setTimeout(function() {
  
      document.getElementById('btn-copy').innerText = 'Copy';
    }, 2000);
        
        
    });

    clipboard.on('error', function (e) {
        console.log(e);
    });
};
