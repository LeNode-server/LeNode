if (!window['$']) var $ = function a(){}
(function a(){
    $.get('https://api.github.com/repos/KaMeHb-UA/LeNode/releases/latest', function(data, status){
        if (status != 'success') a(); else {
            $('a[rel="download"]').attr('href', data.assets[0].browser_download_url);
            $('#latest-version').html(data.tag_name);
            $('*[rel="release-description"]').html(data.name);
        }
    }, 'json');
})();
document.addEventListener('DOMContentLoaded', function(){
    'use strict';
    var actions = {
        log : function(){
            console.log.apply(null, arguments);
            console.log(this);
        }
    };
    $('*[__click]').each(function(i,e){
        var e = $(e);
        function act(){
            actions[e.attr('__click')].apply(e, arguments);
        }
        e.click(function(){
            try{
                act('Hello from');
            } catch(e){}
        });
    });
});
