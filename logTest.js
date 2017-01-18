module.exports = (f,message, ...args) => {
  const oldLog = console.log;
  let result;
  console.log = (...strings) => {
    result = (strings.join(' ') === message);
  };
  f(...args);
  console.log = oldLog;
  return result;
};
