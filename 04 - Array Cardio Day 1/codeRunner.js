var a = 1;
var b = 1;
console.log(a + b);

var arr = [9, 3, 6, 2, 7, 8, 9.9, 22, 101, .5, 777, .000341, 20, 2, 2, 4, 8, 2, 4, 1];

const myBubbleSort = arr => {
    for (var i = 0; i < arr.length; i++) {
        arr.forEach((current, index) => {
            var final = arr[arr.length - 1];

            if (current != final) {
                var nextIndex = index + 1;
                var next = arr[nextIndex];
                if (next < current) {
                    arr.splice(nextIndex, 1);
                    arr.splice(index, 0, next);
                }
            }
        })
    }
    return arr;
}

const bubbleSorted = myBubbleSort(arr);
console.log(bubbleSorted);