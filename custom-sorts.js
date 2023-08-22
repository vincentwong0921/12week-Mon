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

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
