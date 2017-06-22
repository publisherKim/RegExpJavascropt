var result;

result = 'sports'.match(/sports/);
show(result);
// sports

result = 'sports'.match(/sp/);
show(result);
// sp

result = 'sports'.match(/spt/);
show(result);
// null

result = 'sports'.match(/s/);
show(result);
// s 처음으로 매치 되었을때 반환한다. 즉 가장 왼쪽 s를 만났을때 s를 반환하고 종료한다.

// 특징
// 문자열을 조회하며 대상과 매치된 대상을 찾으면 값을 반환한다.
// 없으면 null을 반환한다. 
// 조건과 대상이 일치하면 값을 반환하고 종료한다.
// sp 의 경우 s를 매칭하고 다음 문자열이 p인지를 매칭한다.