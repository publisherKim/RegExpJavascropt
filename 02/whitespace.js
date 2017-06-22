var result;

result = '\u0009'.match(/\t/);
show(result);
//["	", index: 0, input: "	"]

result = '\u000c'.match(/\f/);
if (result) {
    show('공백 문자');
}
// ["", index: 0, input: ""]

/*
    Unicode     english name            type    match word
    \u0009      tab(Horizontal Tab)     <HT>    \t
    \u000B      tab(Vertical Tab)       <VT>    \v    
    \u000c      Form Feed               <FF>    \f
    \u0020      SPace                   <SP>    
    \u00A0      No-Break SPace          <NBSP>
 */