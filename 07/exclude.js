
var result = '%&_aA1'.match(/\W/g);
show(result);

show('----------');
result = '#12'.match(/[\w]/);
show(result);

result = '#12'.match(/[w]/);
show(result);

result = '34#'.match(/[\W\w]/);
show(result);

