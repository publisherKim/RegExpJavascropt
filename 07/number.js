var result;

result = 'A123'.match(/\d/);
show(result);


show('-------');
var num = /^\d+$/;
result = 'A123'.match(num);
show(result);

result = '123'.match(num);
show(result);

