var result;

result = '12_34_12'.search(/^34/);
show(result);
// -1을 반환한다. .search()메서드와 ^이것의 의미를 아직 모르겠당...
result = '12_34_12'.search(/^12/);
show(result);
// 0을 반환한다.