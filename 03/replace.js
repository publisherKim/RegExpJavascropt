var result;


result = '12_34_12'.replace('12', 77);
show(result);
// 77_34_12

result = '12_34_12'.replace(/12/g, 77);
show(result);
// 77_34_77

function returnValue() {
    return 'AA';
}
result = '12_34_12'.replace(/12/g, returnValue());
show(result);

// "AA_34_AA" e두번쨰 인자로 함수를 받을수 있다.