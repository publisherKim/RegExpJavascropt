var result;

result = 'JavaScript'.match(/a/g);
show(result);
// ["a", "a"]
var regexp = new RegExp('A', 'ig');
result = regexp.exec('JavaScript');
show(result);
//["a", index: 1, input: "JavaScript"]
// exec는 한개만 반환한다.

//result = 'JavaScript'.match(/a/G);
//show(result);
// a를 반환하는 경우와 에러 처리로 섞여 있다.

//result = 'JavaScript'.match(/a/gg);
//show(result);
// ECMA-262에서는 error 처리 하도록 되어있느나 경우에 따라선 정상동작 해주는 경우도 있다.