var result;


result = 'abcd'.match(/[^a]/);
show(result);

result = 'abcde'.match(/[^acd]/);
show(result);

show('-------');
result = '1525'.match(/[^1-2]/);
show(result);

result = '정규표현식'.match(/[^정표]/g);
show(result);
