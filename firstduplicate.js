a = [2, 3, 3, 1, 5, 2]

let firstDuplicate = (a) => {
  return a.find((val, idx, arr)=> {
    return arr.indexOf(val) !== idx;
  })
}

firstDuplicate(a);
