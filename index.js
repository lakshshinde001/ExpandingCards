const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removeActtiveClass();
        panel.classList.add('active')
    })
})

function removeActtiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}