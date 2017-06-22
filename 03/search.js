var result;

result = 'Sports'.search(/s/);
show(result);
// 5

result = 'Class'.search(/s/g);
show(result);
// 3
// ECMA-262에 g를 무시한다고 나와있다.

result = 'Class'.search(/K/);
show(result);
// -1
// 매칭이 되어지지 않을경우 -1을 반환한다.

result = 'Class'.search('s');
show(result);
// 3
// 문자 타입으로 지정이 가능하다.