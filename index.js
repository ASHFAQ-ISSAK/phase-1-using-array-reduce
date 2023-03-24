const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function reducer(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  const totalBatteries = reducer(batteryBatches);
  console.log(totalBatteries); 
  