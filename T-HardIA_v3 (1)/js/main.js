
document.addEventListener('DOMContentLoaded', function(){
  const ham = document.getElementById('hamburger');
  const mobile = document.getElementById('mobileMenu');
  if(ham){
    ham.addEventListener('click', ()=>{
      if(mobile.classList.contains('show')){
        mobile.classList.remove('show');
        mobile.style.animation = 'slideFadeOut .22s forwards';
        setTimeout(()=> mobile.style.animation='',220);
      } else {
        mobile.classList.add('show');
      }
    });
    document.addEventListener('click', (e)=>{
      if(!mobile.contains(e.target) && !ham.contains(e.target)){
        if(mobile.classList.contains('show')){
          mobile.classList.remove('show');
          mobile.style.animation = 'slideFadeOut .22s forwards';
          setTimeout(()=> mobile.style.animation='',220);
        }
      }
    });
  }
  if(window.netlifyIdentity){
    netlifyIdentity.on('login', user => location.reload());
    netlifyIdentity.on('logout', ()=> location.reload());
    netlifyIdentity.init();
  }
  const uel = document.getElementById('user-name');
  if(uel && window.netlifyIdentity && netlifyIdentity.currentUser()){
    const u = netlifyIdentity.currentUser();
    const name = (u.user_metadata && (u.user_metadata.full_name || u.user_metadata.name)) || u.email || 'Usuario';
    uel.textContent = name;
    const um = document.getElementById('user-name-mobile'); if(um) um.textContent = name;
    const un = document.getElementById('username'); if(un) un.textContent = name;
  }
});
