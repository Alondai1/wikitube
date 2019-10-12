export default {
  store,
  load
};

function store(key, any) {
  localStorage[key] = JSON.stringify(any);
}

function load(key) {
  var str = localStorage[key] || "null";
  console.log(str);
  
  return JSON.parse(str);
}


