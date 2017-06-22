var result, pattern, comma;

comma = function(value, len){
    len = len ? len : 3;
    value = value.toString();
    pattern = new RegExp('(^[+-]?\\d+)(\\d{' + len + '})');

    while (pattern.test(value)){
        value = value.replace(pattern, '$1' + ',' + '$2');
    }
    return value;
}

result = comma(123456789, 4);
show(result);
