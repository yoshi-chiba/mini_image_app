// document.addEventListener('DOMContentLoaded', function(){
//   document.querySelector('#message_image'),addEventListener('change', function(e){
//     // すでに画像があれば削除する
//     const image_content = document.querySelector('img');
//     if (image_content){
//       image_content.remove();
//     };

//     // 画像情報を取得する
//     const preview = e.target.files[0];
//     // 取得した画像情報をURLに変換する
//     const blob = window.URL.createObjectURL(preview);
//     const html = `<img src="${blob}" height="100px" width="100px">`;
//     // 新しいinputを追加する
//     const inputHTML = `<input type='file' name='message[images][]' id="message_images">`;
//     // afterbegin、beforebegin、afterend、beforeendがある
//     document.querySelector('form').insertAdjacentHTML('beforebegin' , html);
//     document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
//   });
// });

// 複数枚投稿の記述
document.addEventListener('DOMContentLoaded', function (){
  // どのinputを押したか判別、そして押下するための記述
  const clickLabel = function(){
    const inputAll = document.getElementsByName('message[images][]');
    console.log(inputAll)
    const inputLast = inputAll[inputAll.length -1];
    console.log(inputLast)
    const inputId = inputLast.getAttribute('id');
    console.log(inputId)
    document.getElementById('click-upload').setAttribute('for', inputId);
  };

  // 画像の編集をする際の記述
  const changeInput = () => {
    document.getElementById('message_images').addEventListener('change', function(e){
      console.log("OK")
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      const blobHTML = `<img src="${blob}" height="100px" width="100px">`;
      // どのinputをクリックしたかカスタムデータ属性を用いて判別する
      const i = e.target.getAttribute('data-index');
      const number = Number(i+1);
      const inputHTML = `<input type='file' name='message[images][]' id="message_images_${number}" data-index="${number}">`;
      document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
      document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
    });
  };

  // const changeInput = (input) => {
  //   console.log(input)
  //   input.addEventListener('change', function(e){
  //     const file = e.target.files[0];
  //     const blob = window.URL.createObjectURL(file);
  //     const blobHTML = `<img src="${blob}">`;
  //     const i = e.target.getAttribute('data-index').to_i +1;
  //     const inputHTML = `<input type='file' name='message[images][]' id="message_images_${i}" data-index="${i}">`;
  //     document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
  //     document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
  //   });
  // };

  document.getElementById('click-upload').addEventListener('click', function(){
    clickLabel();
    changeInput();
  });
});