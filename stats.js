module.exports = {
    avg: function(arr, ...args) {
      if (Array.isArray(arr)) {
        arr = arr.concat(args);
      } else {
        arr = [arr].concat(args);
      }
      return arr.reduce((v,el) => v + el, 0)/arr.length; 

           
    }
}
