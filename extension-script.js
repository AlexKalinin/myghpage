console.log('Hey from extension-script.js');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);
