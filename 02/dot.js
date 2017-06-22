var result;

result = 'sports'.match(/.s/);
show(result);
// ["ts", index: 4, input: "sports"] .s s앞의 문자를 함께반환한다.

result = 'sports'.match(/s./);
show(result);
// ["sp", index: 0, input: "sports"] s. s뒤의 문자를 함꼐 반환한다.ㄴ

result = '사랑해 사모해 사랑함 사랑랑해'.match(/사.해/g);
show(result);

// ["사랑해", "사모해"] /사.해/g 사와해 사이의 문자를 함꼐 반환한다.
// .s -> []s, s. -> s[], 사.해 -> 사[]해