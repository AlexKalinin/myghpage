console.log('Hey from extension-script.js v2');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let input = document.createElement('input');
input.type = 'file';
$('header').append(input);



input.onchange = () => {
  let fd = new FormData();
  fd.append('file', input.files[0]);

  let url = `https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads/${csrf}/${input.files[0].name}`;

  let request = $.ajax({
    url: url,
    type: 'POST',
    processData: false,
    data: {fd: fd}
  });
};

console.log('hello');


