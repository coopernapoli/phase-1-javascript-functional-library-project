function myFirst(collection, n) {
    if (Array.isArray(collection)) {
      return n ? collection.slice(0, n) : collection[0];
    }
    const entries = Object.entries(collection);
    return n ? entries.slice(0, n) : entries[0];
  }
  
  function myLast(collection, n) {
    if (Array.isArray(collection)) {
      return n ? collection.slice(-n) : collection[collection.length - 1];
    }
    const entries = Object.entries(collection);
    return n ? entries.slice(-n) : entries[entries.length - 1];
  }
  
  function myKeys(collection) {
    return Object.keys(collection);
  }
  
  function myValues(collection) {
    return Object.values(collection);
  }

  function myReduce(collection, callback, acc) {
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      collection = Object.values(collection);
    }
  
    if (typeof acc === 'undefined') {
      acc = collection[0];
      collection = collection.slice(1);
    }
  
    return collection.reduce(callback, acc);
  }
  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
    