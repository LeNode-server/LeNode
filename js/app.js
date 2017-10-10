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
        log : console.log
    };
    $('*[__click]').each((i,e)=>{
        e = $(e);
        e.click(()=>{
            try{
                actions[e.attr('__click')].apply(e[0], [e]);
            } catch(e){}
        });
    });
});
