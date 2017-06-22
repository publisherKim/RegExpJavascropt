var result;

result = 'az'.match(/\s/);
show(result);

result = '\u0009'.match(/\s/);
if (result){
    show('u0009');
}
