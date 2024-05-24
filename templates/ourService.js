/* thông báo khi nhấn thêm vào giỏ hàng */
function myFunction() {
  //console.log("Hello world");
  
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.getElementById('top-banner');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" style="
    
    top: 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto; 
    width:30%"> `,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  //alertPlaceholder.append(wrapper)
myVar = setTimeout(myFunction2, 3000);
//clearTimeout(myVar);
}

appendAlert('Thành công, đã thêm vào giỏ hàng!', 'success');
}  

function myFunction2() {
  //console.log("Hello world");

  const wrapper = document.getElementById('top-banner');
  wrapper.innerHTML = [
  ''].join('')
}
