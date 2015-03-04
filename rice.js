function e(x){
  return document.getElementById(x);
}

function style(x){
  return e(x).style;
}

function ajaxGET(dir, async, funct){
  var xmlhttp
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
  }
  xmlhttp.onreadystatechange = function;
  xmlhttp.open("GET", dir, async);
}

function ajaxPOST(dir, values, async, funct){
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
  }
  xmlhttp.onreadystatechange = funct;
  xmlhttp.open("GET", dir, async);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(values);
}

function randomInt(min, max) {
  var rand = Math.floor(Math.random() * (max - min)) + min;
  while(rand > max){
    rand = rand - 1;
  }
  return rand;
}

function randomFloat(min, max) {
  var rand = (Math.random() * (max - min)) + min;
  while(rand > max) {
    rand = rand - 0.31416592;
  }
  return rand;
}

function shuffleArray(array) {
  var shuffled = [];
  while(array.length) {
    shuffled.push(array.splice(Math.random() * array.length, 1));
  }
}

function isUndefined(value){
  return typeof value == 'undefined';
}

function isDefined(value){
  return typeof value != 'undefined';
}

function isObject(value){
  return value != null && typeof value == 'object';
}

function isString(value){
  return typeof value == 'string';
}

function isNumber(value){
  return typeof value == 'number';
}

function isDate(value){
  return toString.apply(value) == '[object Date]';
}

function isArray(value) {
  return toString.apply(value) == '[object Array]';
}

function isFunction(value){
  return typeof value == 'function';
}

function isRegExp(value) {
  return toString.apply(value) == '[object RegExp]';
}

function isWindow(obj) {
  return obj && obj.document && obj.location && obj.alert && obj.setInterval;
}


function isScope(obj) {
  return obj && obj.$evalAsync && obj.$watch;
}


function isFile(obj) {
  return toString.apply(obj) === '[object File]';
}


function isBoolean(value) {
  return typeof value == 'boolean';
}

function isElement(node) {
  return node &&
    (node.nodeName
    || (node.on && node.find));
  }

function makeMap(str){
  var obj = {}, items = str.split(","), i;
  for ( i = 0; i < items.length; i++ )
    obj[ items[i] ] = true;
  return obj;
}

function arrayRemove(array, value) {
  var index = indexOf(array, value);
  if (index >=0)
    array.splice(index, 1);
  return value;
}

function toBoolean(value) {
  if (value && value.length !== 0) {
    var v = lowercase("" + value);
    value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
  } else {
    value = false;
  }
  return value;
}

function thisURL() {
  return window.location.href;
}

function phpGetGET() {
  var rurl = thisURL();
  var rGET = rurl.split("?");
  var rArray = rGET[1];
  var array = {}, rMap = rArray.split("&"), temp;
  for(var i = 0; i < rMap.length; i++) {
    temp = rMap[i].split("=");
    array[temp[0]] = temp[1];
  }
  return array;
}
