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
            console.log({
                this : this,
                arguments : arguments
            })
        }
    };
    $('*[__click]').each(function(i,e){
        var e = $(e);
        e.click(function(){
            try{
                actions[e.attr('__click')].apply(e[0], [e, i]);
            } catch(e){}
        });
    });
});
