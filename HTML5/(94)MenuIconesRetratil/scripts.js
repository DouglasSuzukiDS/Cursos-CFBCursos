const menus=document.querySelectorAll('[data-menu]');
const cssAtivo='ativo';

menus.forEach(function(e){
	e.addEventListener('click',function(){
		for(i=0;i<menu.length;i++){
			menus[i].classList.remove(cssAtivo);
		}
		e.classList.add(cssAtivo);
	})
});

const btnMenu=document.getElementsByClassName('btnMenu')[0];
const menu=document.getElementsByClassName('menu')[0];
btnMenu.addEventListener('click', function(){
	menu.classList.toggle('menuAberto');
});