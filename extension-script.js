console.log('Hey from extension-script.js v2');
var csrf = $("meta[name=csrf-token]").attr('content');
console.log('our csrf:::', csrf);

let input = $('#notes > div > ul > li > div > div > form > div.comment-warning-wrapper.gl-border-solid.gl-border-1.gl-rounded-base.gl-border-gray-100 > div.js-vue-markdown-field.md-area.position-relative.gfm-form > div.md-write-holder > div > div.comment-toolbar.clearfix > span > button.btn.markdown-selector.button-attach-file.gl-vertical-align-text-bottom.btn-link.btn-md.gl-button');
console.log(input);
// let request = $.ajax({
  // type: 'POST',
  // url: 'https://gitlab.com/nt24.pro/personal/ivan_lyubchenko/gitlab-attacments/uploads',
  // data: '' 
// });s

