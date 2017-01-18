module.exports = {
    methods(obj) {
       let properties = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(obj.constructor.prototype));
       return properties.filter((prop) => typeof obj[prop] === 'function');       
    }
}
