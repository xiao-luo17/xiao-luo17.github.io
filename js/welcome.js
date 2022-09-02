function welcome() {
    let welcome_text = '欢迎光临小罗の小窝~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n祝你拥有愉快的一天！',
        imageUrl: "/img/avatar.jpg",
        timer: 2000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})