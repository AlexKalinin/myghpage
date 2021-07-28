console.log('Hey from extension-script.js v4');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let input = document.createElement('input');
input.type = 'file';
$('header').append(input);



input.onchange = () => {
  let file = input.files[0];

  let url = `https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads`;
  let fd = new FormData();
  fd.append('file', file, file.name);

  var authOptions = {
    method: 'POST',
    url: url,
    data: fd,
    headers: {
      'x-csrf-token': csrf,
      'content-type': 'application/json'
    }, 
    json: true
  };
  axios(authOptions)
    .then( ({ data }) => {
      console.log(data);
    });
};




