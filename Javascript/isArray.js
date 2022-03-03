const isArray = (arr) => {
  // '[object *]'
  if( Object.prototype.toString.call(arr).slice(8,-1) === 'Array') {
    return true;
  }else {
    return false;
  }
}