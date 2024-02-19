const arr = [1, 2, 3, 4, 1, 0, 2, 2];
divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
divide([4, 3, 2, 1], 4)
const divide = (arr, n) => {
  // Write your code here
	 arr.forEach(num => {
        if (currentSubarray.reduce((acc, val) => acc + val, 0) + num <= n) {
            currentSubarray.push(num);
        } else {
            subarrays.push(currentSubarray);
            currentSubarray = [num];
        }
    });

    if (currentSubarray.length > 0) {
        subarrays.push(currentSubarray);
    }

    return subarrays;
}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
