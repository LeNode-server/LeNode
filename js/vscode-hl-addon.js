document.addEventListener('DOMContentLoaded', function(){
    var specials = [
        'function',
        'var',
        'in',
        {
            pre : [')', 'punctuation'],
            content : '=>',
            post : ['{','punctuation']
        },
        {
            pre : [')', 'punctuation'],
            content : '=&gt;',
            post : ['{','punctuation']
        },
        {
            pre : [')', 'punctuation'],
            content : '=&#62;',
            post : ['{','punctuation']
        },
        'extends',
    ],
    builtins = [
        'console',
        'JSON',
        'Object',
        'RegExp',
        'Array',
        'String',
        'Boolean',
        'NodeList',
    ];
    //comment
    function eq($elem, toEq){
        if (Object.prototype.toString.call(toEq) === '[object Array]'){
            if ($elem.html() == toEq[0] && $elem.hasClass(toEq[1])){
                return true;
            }
        } else {
            if ($elem.html() == toEq){
                return true;
            }
        }
        return false;
    }
    $('code.language-javascript').each(function(){
        var $this = $(this),
            spans = $this.find('span');
        spans.each(function(i){
            var $this = $(this);
            specials.forEach(function(r){
                if (typeof r == 'object'){
                    if (eq($this, r.pre) && eq($(spans[i + 1]), r.content) && eq($(spans[i + 2]), r.post)){
                        $(spans[i + 1]).addClass('special');
                    }
                } else if (typeof r == 'string'){
                    if ($this.html() == r) $this.addClass('special');
                }
            });
            if ($(spans[i + 1]).html() == '(' && ($this.hasClass('builtin') || $this.hasClass('keyword'))) $this.attr('class','token function');
        });
        var regExPat = '>([^<>]*[^A-Za-z]{1,}|[^A-Za-z]*){%builtin%}([^A-Za-z]{1,}[^<>]*|[^A-Za-z]*)<';
        builtins.forEach(function(r){
            regEx = new RegExp(regExPat.replace('{%builtin%}', r),'g');
            $this.html($this.html().replace(regEx, function(str, bef, aft){
                return '>' + bef + '<span class="token builtin">' + r + '</span>' + aft + '<';
            }));
        });
        $this.find('span.regex').each(function(){
            var $this = $(this),
                regex = $this.html();
            console.log('regexp: ' + regex);
        });
    });
});