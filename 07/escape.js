var result;

result = '^ABC'.match(/^A/);
show(result);

result = 'B^AC'.match(/\^A/);
show(result);

show('-------');
result = '\\ab'.match(/\\/);
show(result);

result = '\\^'.match(/\\\^/);
show(result);


show('-------');
result = new RegExp('\^A').exec('ABC');
show(result);


result = new RegExp('\\^B').exec('A^BC');
show(result);

