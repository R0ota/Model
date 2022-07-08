
'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal')

console.log(btnopenmodal)
for(let i = 0; i < btnopenmodal.length; i++ ) {

    btnopenmodal[i].addEventListener('click' ,function() {
//  to show list when cliclk
    console.log('clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden') 
});
//  to check cancel
btnclosemodal.addEventListener('click' ,function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden') 
});
//  when click anywhere of body that cancel the
overlay.addEventListener('click' ,function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden') 
});
document.addEventListener('keydown' , function(e) {
    console.log(e.key);
    if(e.key ==='Escape') {
        if(!modal.classList.contains('hidden',function() {
            modal.classList.add('hidden')
            overlay.classList.add('hidden') 
        }))
    {}}})
}

