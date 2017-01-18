const arrUtils = {};

arrUtils.range = (...args) => {
   const arr = [];
   let start, end, step;
   if (args.length === 1) {
     start = 1;
     end = args[0]
     step = 1;
   } else if (args.length === 2) {
       [start, end]  = args;
       step = 1;
   } else if (args.length >= 3) {
       [start, end, step] = args;
   } else if (args.length === 0) {
        end = 10;
        start = 1;
        step = 1;
   }
   for (let i = start; i<= end; i += step) {
       arr.push(i);
   }
   return arr;
}

arrUtils.randArr = (...args) => {
    let size, low, high;
    if (args.length >=  3) {
        [size, low, high] = args;
    } else if (args.length === 2) {
        [size, high] = args;
        low = 0;
    } else if (args.length === 1) {
        [size] = args;
        low = 0;
        high = size;
    } else {
        size = 10;
        low = 0;
        high = 10;
    }
    const arr = [];
    for (let i = 0; i<size; i += 1) {
        // test to be sure this is correct
        arr.push(Math.floor((Math.random() * (high - low )))+ low)
    }
    return arr;
}

arrUtils.flatten = (arr) => {
    let flatArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
            flatArr = flatArr.concat(arrUtils.flatten(arr[i]));
        } else {
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

module.exports = arrUtils;


