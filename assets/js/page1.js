const exitBtn = document.querySelector('.exit-btn');
const sideNav = document.querySelector('.sidenav');
const btn_navs = document.querySelectorAll('.btn-nav');
exitBtn.addEventListener('click',toggleMenuPanel);


function toggleMenuPanel(){
    exitBtn.classList.toggle('active');
    
    if (sideNav.classList.contains('open')) {
        sideNav.classList.remove('open');
        sideNav.classList.add('close');
    } else {
        sideNav.classList.remove('close');
        sideNav.classList.add('open');
    }
    
    // if(exitBtn.classList.contains('sample')){
    //     exitBtn.classList.remove('sample')
    // }else{
    //     exitBtn.classList.add('sample');
    // }
}

btn_navs.forEach(function(btn_nav){
    btn_nav.addEventListener('click',function(){
        exitBtn.classList.toggle('active');
        sideNav.classList.remove('open');
        sideNav.classList.add('close');
        
    })
})