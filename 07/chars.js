var result;

result = '1A표현23'.match(/\D/);
show(result);

result = '1A표현23'.match(/\D/g);
show(result);


show('-------');
var alpha = /^\D+$/;
result = 'ABC3'.match(alpha);
show(result);

result = 'ABC'.match(alpha);
show(result);

