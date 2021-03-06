// Generated by CoffeeScript 1.10.0
(function() {
  var $;

  $ = require('jquery');

  module.exports = function(options, callback) {
    var accept, inp, multiple, ref, ref1, ref2, ref3, type;
    if (callback == null) {
      ref = [{}, options], options = ref[0], callback = ref[1];
    }
    type = (ref1 = options.type) != null ? ref1 : String;
    accept = (ref2 = options.accept) != null ? ref2 : '*';
    multiple = (ref3 = options.multiple) != null ? ref3 : false;
    inp = $("<input type=\"file\" accept=\"" + accept + "\"/>");
    if (multiple) {
      inp.attr('multiple', '');
    }
    return inp.bind('change', (function(event) {
      var file, file_reader, files, i, len, method, results;
      files = event.target.files;
      if (!(files.length > 0)) {
        return callback(new Error('no files'));
      }
      results = [];
      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        file_reader = new FileReader;
        file_reader.onabort = function(error) {
          if (error == null) {
            error = new Error('abort');
          }
          return callback(error);
        };
        file_reader.onerror = function(error) {
          if (error == null) {
            error = new Error('error');
          }
          return callback(error);
        };
        file_reader.onload = function() {
          return callback(null, file_reader.result, file.name);
        };
        method = (function() {
          switch (false) {
            case type !== ArrayBuffer:
              return 'readAsArrayBuffer';
            case type !== String:
              return 'readAsText';
            case type !== Blob:
              return 'readAsBlob';
            default:
              return 'readAsText';
          }
        })();
        results.push(file_reader[method](file));
      }
      return results;
    })).click();
  };

}).call(this);

//# sourceMappingURL=index.js.map
