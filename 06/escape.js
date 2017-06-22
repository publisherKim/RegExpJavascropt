var result;


result = '111'.match(/1+/);
show(result);

result = '111'.match(/[1+]/);
show(result);

result = '+++'.match(/[1+]/);
show(result);
