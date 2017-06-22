var result;

result = 'sports'.match(/sp/);
show(result);

// 대상.메서드(조건)도 가능하다.

var param = /sp/i; // 조건에 대한 캐싱 처리 즉 재사용이 가능하다. 
result = 'sports'.match(param);
show(result);

// 대상.메서드(변수명)도 가능하다.