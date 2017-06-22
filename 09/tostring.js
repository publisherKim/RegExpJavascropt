var result, reg;

reg = /\d\\/g;
result = reg.toString();
show(result);

reg = new RegExp(/\d\\/g);
result = reg.toString();
show(result);
