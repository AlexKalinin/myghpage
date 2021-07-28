console.log('Hey from extension-script.js v2');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let input = document.createElement('input');
input.type = 'file';
$('header').append(input);



input.onchange = () => {
  
  let url = `https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads`;

  // let req = $.ajax({
  //   beforeSend: function(request) {
  //     request.setRequestHeader("x-csrf-token", csrf);
  //   },
  //   url: url,
  //   type: 'POST',
  //   processData: false,
  //   data: {file: fd}
  // });
  let file = input.files[0];


  let fr = new FileReader();
  fr.onloadend = e => {
    let arrayBuffer = e.target.result;
    let fileType = file.type;
    var blob = blobUtil.arrayBufferToBlob(arrayBuffer, fileType);
    console.log('here is a blob', blob);
    console.log('its size is', blob.size);
    console.log('its type is', blob.type);
  };

  fr.readAsArrayBuffer(file);
};

console.log('hetfhere');


