function ageSort(users) {
  // Your code here
  return users.sort((a,b) => a.age - b.age);
}


// helper function for oddEvenSort
function oddEvenCompare(a, b) {
  if (a % 2 === 1 && b % 2 === 0) return -1;
  if (a % 2 === 0 && b % 2 === 1) return 1;
  return a - b;
}
function oddEvenSort(arr) {
  return arr.sort(oddEvenCompare);
}

function validAnagrams(s, t) {
  let sSort = s.split('').sort().join('');
  let tSort = t.split('').sort().join('');

  return sSort === tSort;
}

function numberLengthSort(a, b) {
  let aNumtoString = a.toString();
  let bNumtoString = b.toString();

  if (aNumtoString.length === bNumtoString.length){
    return a - b;
  } else {
    return bNumtoString.length - aNumtoString.length;
  }
}

function reverseBaseSort(arr) {
  return arr.sort(numberLengthSort);
}

function counterSort(a, b) {
  let count = 0;

  if (a === b){
    count++;
    return a - b;
  } else {
    return b - a;
  }
}

function frequencySort(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++){
    if (!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  return arr.sort((a, b) => {
    if (obj[a] !== obj[b]) {
      return obj[a] - obj[b];
    } else {
      return b - a;
    }
  });

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
