var result;

var removeComma = function(value){
    value = value.toString();
    return /,/.test(value) ? value.replace(/,/g, '') : value;
};

result = removeComma('123,456,789');
show(result);
