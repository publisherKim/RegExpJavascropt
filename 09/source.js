
var current = /.*[0-5]/;
var reg = new RegExp(current.source + /[6-9]/.source);
result = 'source37'.match(reg);
show(result);
