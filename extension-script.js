console.log('Hey from extension-script.js v2');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let ajax = $.ajax({
  url: 'https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads',
  type: 'POST',
  data: {data: 'hello'},

});

ajax.done((message) => {
  console.log(message);
});


