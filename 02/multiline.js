var result;
var value = 'JavaScript\nMultiLine\nMultiLine';

result = value.match(/^Multi/);
show(result);
// null 매치하지 않음 
// ^캐럿은 아직 무슨 의미인지 모르겠다 ^을 제거하면 ["Multi", index: 11, input: "JavaScript↵MultiLine↵MultiLine"]
result = value.match(/^Multi/m);
show(result);
// ["Multi", index: 11, input: "JavaScript↵MultiLine↵MultiLine"]
// 첫번째 반환값을 매칭해서 반환함.

result = value.match(/^Multi/g);
show(result);
// null

result = value.match(/^Multi/gm);
show(result);
// ["Multi", "Multi"]

result = value.match(/Multi/);
show(result);
// ["Multi", index: 11, input: "JavaScript↵MultiLine↵MultiLine"]
// 패턴을 사용하지 않고 문자열 값을 인지 하므로 반환됨.

result = value.match(/multi/igm);
show(result);
// ["Multi", "Multi"]