const jsonpFunc = (function() {
  const dataObject = {};

  dataObject.send = (src, options = {}) => {
    const callbackName = options.callbackName ? options.callbackName : 'callback';
    const onSuccess = options.onSuccess ? options.onSuccess : function() {};
    const onTimeout = options.onTimeout ? options.onTimeout : function() {};
    const timeout = options.timeout ? options.timeout : 10; // seconds

    const timeoutTrigger = window.setTimeout(function() {
      window[callbackName] = function() {};
      onTimeout();
    }, timeout * 1000);

    window[callbackName] = function(data) {
      window.clearTimeout(timeoutTrigger);
      onSuccess(data);
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = src;

    document.head.appendChild(script);
  };

  return dataObject;
})();

module.exports = jsonpFunc;
