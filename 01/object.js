var result;

result = /sp/.exec('sports');
show(result);

// 조건을 앞에쓰고 .exex('대상') 조건.메서드('대상')
// ["sp", index: 0, input: "sports"] 를 반환
// ['sp', {index: 0}, {input:sports}];
// 결과값, 결과의 위치, 대상이 들어있는걸 알수 있다.

var param = /sp/i;
result = param.exec('sports');
show(result);

// 자바스크립트 처럼 캐시애서 쓸수 있다.