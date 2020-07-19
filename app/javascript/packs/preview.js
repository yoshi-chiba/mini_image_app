document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#message_image'),addEventListener('change', function(e){
    // すでに画像があれば削除する
    const image_content = document.querySelector('img');
    if (image_content){
      image_content.remove();
    };

    // 画像情報を取得する
    const preview = e.target.files[0];
    // 取得した画像情報をURLに変換する
    const blob = window.URL.createObjectURL(preview);
    const html = `<img src="${blob}">`;
    // beforeendにすると閉じタグの前に、afterendだと閉じタグの後に追加される
    document.querySelector('form').insertAdjacentHTML('afterend' , html);
  });
});