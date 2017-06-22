var result;

result = '안녕하세요'.match(/안녕하세요/);
showResult(result);
// 안녕하세요

result = '안녕하세요'.match(/안녕/);
showResult(result);
// 안녕

result = /안녕하세요/.exec('안녕하세요');
showResult(result);
// 안녕하세요.

result = /안녕하세요/.exec('안녕');
showResult(result);
// null

result = 'sports_swim'.match(/swim/);
showResult(result);
// swim