var result = '\u000A'.match(/\n/);
// undefinded
// 값이 보이지 않으므로 확이한기 위해선 if else문이 필요하다.
if (result) {
    show('줄 분리자');
}

/*
    Unicode     english name        type        match word
    \u000A      Line Feed           <LF>        \n
    \u000D      Carriage Return     <CR>        \r
    \u2028      Line Seperator      <LS>        
    \u2029      Paragraph Seperator <PS>            
*/