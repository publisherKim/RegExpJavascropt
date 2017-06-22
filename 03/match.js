var result;
// var show = console.log;

result = 'Sports'.match(/s/);
for (var i = 0; i < result.length; i++) {
    show(result[i]);
}
show(result.index); // 5
show(result.input); // sports
// result = ["s", index: 5, input: "Sports"]
// [매칭된 결과, 대상문자의 index, 대상문자]

function returnValue() {
    return 'method';
}
result = returnValue().match(/met/);
for (var i = 0; i < result.length; i++) {
    show(result[i]); // met
}
// ["met", index: 0, input: "method"]

result = 'StringClass'.match('s');
for (var i = 0; i < result.length; i++) {
    show(result[i]); // s
}
// ["s", index: 9, input: "StringClass"]
// 문자열 형태도 파라미터를 넘겨도 패턴을 /s/ 지정할수 없으나 i,g,m 같은 플러그를 사용 할수 없으므로 제한적이다./

result = 'StringClass'.match('s', 'g');
show(result);
// ["s", index: 9, input: "StringClass"]
// 파라미터에 두개를 넘긴다고 해서 두번쨰인자를 플래그로 설정해서 처리되어 주진 않는다.
// 다만 firefox 3.0 같은 경우엔 ['s', 's']라고 의도한 결과를 반환해 주기도 한다고 하나 /s/g를 쓰도록 하자.
// ECMA-262에 하나만 지정하도록 정의 되어있다.