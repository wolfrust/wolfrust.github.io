function parseGET(rawurl) {
  url = decodeURIComponent(rawurl);
  var params = {};
  var args = (url.substr(url.lastIndexOf('?') + 1, url.length)).split("&");

  args.forEach(function (arg) {
    var key = "";
    var value = "";
    for (i=0; i < arg.indexOf("="); i++) {
      key += arg[i];
    }
    for (i = arg.indexOf("=") + 1 ; i < arg.length ; i++) {
      value += arg[i];
    }
    params[key] = value;
  });
  return params;
}
