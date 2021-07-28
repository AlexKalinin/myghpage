console.log('Hey from extension-script.js v2');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let input = document.createElement('input');
input.type = 'file';
$('header').append(input);



input.onchange = () => {
  
  let url = `https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads`;

  let file = input.files[0];


  let fr = new FileReader();
  fr.onloadend = e => {
    let arrayBuffer = e.target.result;
    let fileType = file.type;
    var blob = blobUtil.arrayBufferToBlob(arrayBuffer, fileType);
    return blob;
  };

  let blob = fr.readAsArrayBuffer(file);
  console.log(blob);

};

console.log('hetfhere');


