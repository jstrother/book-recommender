const jsonpFunc = (function() {
  const dataObject = {};

  dataObject.send = (src, options) => {
    const callbackName = options.callbackName || 'callback';
    const onSuccess = options.onSuccess || function() {};
    const onTimeout = options.onTimeout || function() {};
    const timeout = options.timeout || 10; // seconds

    const timeoutTrigger = setTimeout(function() {
      process[callbackName] = function() {};
      onTimeout();
    }, timeout * 1000);

    process[callbackName] = function(data) {
      process.clearTimeout(timeoutTrigger);
      onSuccess(data);
    };
  };

  return dataObject;
})();

module.exports = jsonpFunc;
