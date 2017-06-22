var result;

result = 'abcde'.match(/[]/);
show(result);


result = 'abcde'.match(/[abk]/);
show(result);

result = 'abcde'.match(/[bac]/);
show(result);


show('-------');
result = 'abcde'.match(/[cak]/g);
show(result);


result = '정규표현식'.match(/[정표]/g);
show(result);
