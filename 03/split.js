var result;

result = '12_34_56'.split('_');
show(result);
// ["12", "34", "56"]
// 문자열 지정이 가능하다.

result = '12_34_56'.split(/_/);
show(result);
// ["12", "34", "56"]
// 페턴 매칭!!

show('-------');
result = '12_34_56'.split('S');
show(result);
// ["12_34_56"]
// 매칭되는 조건이 없을 경우 통으로 배열에 담는다.

result = '12_34_56'.split();
show(result);
// ["12_34_56"]
// 첫번째 인자로 구분자를 넘기지 않아도 통으로 배열에 담는다.

show('-------');
result = '12_34_56'.split('');
show(result);
// ["1", "2", "_", "3", "4", "_", "5", "6"]
// 빈문자를 넘길경우 문자 하나하나를 배열에 반환한다.

show('-------');
result = '_12_34'.split('_');
show(result);
// ["", "12", "34"]
// 구분자의 앞의 문자가 비어있을경우 빈값을 반환한다.

result = '_12_34'.split(/_/);
show(result);
// ["", "12", "34"]
// 구분자의 앞의 문자가 비어있을경우 빈값을 반환한다. 타입과 패턴의 결과가 동일하다.
// ie7 ["12", "34"] ie7...

show('-------');
result = '12A34A56'.split(/(A)/);
show(result);
// ["12", "A", "34", "A", "56"]
// (구분자) 구분자를 기점으로 배열을 나누대 구분자를 포함한다.
// ie7 capcture 효과 없음 ["12", "34", "56"] ie7.. fuck..

show('-------');
result = '12A34A56'.split(/A/);
show(result);
// ["12", "34", "56"]
// ()의 차이를 알수 있다.

show('-------');
result = '12_34_56'.split('_', 2);
show(result);
// ["12", "34"]
// 두번쨰 인자는 배열의 반환 개수를 의미한다. 만약 두번째 인자로 1 이라면 ["12"]