function quicksort(array) {
    const sortedArray = [];
    const tempArray = [];
    tempArray.push(array);
  
    while (tempArray.length > 0) {
      const currentArray = tempArray.pop();
  
      if (currentArray.length <= 1) {
        sortedArray.push(...currentArray);
      } else {
        const pivotIndex = Math.floor(currentArray.length / 2);
        const pivot = currentArray[pivotIndex];
        const left = [];
        const right = [];
  
        for (let i = 0; i < currentArray.length; i++) {
          if (i === pivotIndex) {
            continue;
          }
          if (currentArray[i] < pivot) {
            left.push(currentArray[i]);
          } else {
            right.push(currentArray[i]);
          }
        }
        tempArray.push(right);
        tempArray.push([pivot]);
        tempArray.push(left);
      }
    }
    return sortedArray;
}
