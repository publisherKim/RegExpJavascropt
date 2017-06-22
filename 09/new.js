var reg;

reg = new RegExp(/\w/g);
show(reg);

reg = new RegExp('\\w', 'g');
show(reg);

reg = RegExp('\\w', 'g');
show(reg);
