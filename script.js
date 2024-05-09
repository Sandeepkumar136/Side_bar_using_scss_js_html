const click_btn=document.querySelector('.toggle_button');
const close_btn=document.querySelector('.sider_bar');
const sider_bar=document.querySelector('.sider_bar');
const nav_contain=document.getElementById('nav');
const sider_bar_with_id=document.getElementById('side_bar');

click_btn.addEventListener('click', ()=>{
    sider_bar.classList.add('function_base')
});
close_btn.addEventListener('click', ()=>{
    sider_bar.classList.remove('function_base')
});

