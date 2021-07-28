let input = $('#file');

function hello(){
  let file = document.getElementById('file');
  file = file.files[0];

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
  // $.ajax({
  //   url: 'https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads',
  //   type: 'POST',
  //   data: { file: file }
  // });
}