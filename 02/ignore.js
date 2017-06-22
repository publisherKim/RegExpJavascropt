var result;

result = 'JavaScript'.match(/s/i);
show(result);


var regexp = new RegExp('s', 'i');
result = regexp.test('JavaScript');
show(result);

// flag 
// i 대소문자를 구별하지 않는다.
// I, ii 등은 문법 오류이다. 상황에 따라 null처리 해주는 브라우저도 존재한다. ii의 경우 s를 반환 처리 해주는 경우도 있다.


//result = 'JavaScript'.match(/s/I);
//show(result);

//Opera 10.10에서 에러로처리
//result = 'JavaScript'.match(/s/ii);
//show(result);