var result;

result = 'A12A 12B 12A'.match(/12\B/g);
show(result);

result = 'A12 B12 12'.match(/12\B/g);
show(result);


show('-------');
result = 'A12 12 C12'.match(/\B12/g);
show(result);


show('-------');
result = 'A12 12 C12'.match(/\B12\B/g);
show(result);

result = 'A12B C12D E12F'.match(/\B12\B/g);
show(result);
