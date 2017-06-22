var result;

result = '12_34_56'.match(/23|34|56/);
show(result);
//  34 반환
result = '12_34_56'.match(/23|56|34/);
show(result);
// 34 반환, 34 또는 56과 매치된 결과 중 매치된 index가 작은 34의 결과를 반환한다.

show('-------');
result = /bc|c/.exec("abc");
show(result);
// bc
result = /c|bc/.exec("abc");
show(result);
// bc

show('-------');
result = /c|bc|abc/.exec("abc");
show(result);
// abc

result = /c|bc|a|abc/.exec("abc");
show(result);
// a
// 매치됭 인덱스가 같으면 조건에 먼저 매칭된 a를 먼저 반환한다.
show('-------');
result = '12_34_56'.match(/12|34|56/g);
show(result);
// ["12", "34", "56"]