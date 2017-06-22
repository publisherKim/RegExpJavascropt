var result;

result = /12/.exec('12_34_12');
show(result);
// ["12", index: 0, input: "12_34_12"]
// 패턴.메서드('대상')
// exec의 경우엔 무조건 하나만 매칭됨

show(result.index); // 0
show(result.input); // 12_34_12

show('-------');
result = /12/g.exec('12_34_12');
show(result);
// ["12", index: 0, input: "12_34_12"] g flag가 무의미함

result = /a/i.exec('ABAB');
show(result);
// ["A", index: 0, input: "ABAB"] i는 유의미함

result = /a/.exec('ABAB');
show(result);
// null