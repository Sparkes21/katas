const repeatNumbers = function(data) {
  let numbers = [];
  let values = '';
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      values += data[i][0]
    }
    numbers.push(values);
    values = '';
  }
  return numbers.join(', ');
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));