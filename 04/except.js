var result;

result = 'A12A 12B 12A'.match(/12\b/g);
show(result);

result = 'A12 12B 12C'.match(/12\b/g);
show(result);

show('-------');
result = 'A12 12B 12'.match(/12\b/g);
show(result);

show('-------');
result = '표현 표현 표현'.match(/표현\b/g);
show(result);

result = '12표현 표현12표현 12표현'.match(/12\b/g);
show(result);

show('-------');
result = 'A급 '.match(/A급\b/);
show(result);

result = 'A와B '.match(/A와B\b/);
show(result);

show('-------');
result = 'A12 12 C12'.match(/\b12/g);
show(result);

result = '12 12 C12'.match(/\b12/g);
show(result);


show('-------');
result = 'A12 12 C12'.match(/12\b/g);
show(result);

result = 'A12 12 C12'.match(/\b12\b/g);
show(result);
