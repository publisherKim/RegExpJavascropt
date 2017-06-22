var result;

var reg = 'RegExp 1239 Count';
result = reg.match(/.*[0-5][6-9]/);
show(result);

result = reg.match(/.*[0-5][1-5]/);
show(result);

