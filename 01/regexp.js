var result;

var regexp = new RegExp('sp', 'i');
// 클래스 사용 패턴으로 조건 과 플래그 사용이 가능
result = regexp.test('sports');
// 변수명.test('대상')
// /sp/i.test('sportis'); 문장과 동일하다.
show(result);

result = new RegExp('sp', 'i').test('sports');
show(result);
// 한문장으로 줄여서 쓸수있다.
// new 정규식('조건', '플래그').매서드('대상')

regexp = RegExp('sp', 'i');
// new를 쓰지 않아도 내부에서 객체를 생성해 반환한다. 결과는 동일하다.
regexp = new RegExp('sp', 'i');
// /sp/i를 반환한다.

show(regexp);