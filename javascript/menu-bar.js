const  menuButton  = document.getElementById('btn-menu')

menuButton.addEventListener('click' , ()=>{
    console.log("click is done ")
    const menuBar = document.getElementById('menu-id')
    menuBar.style.display = 'flex'
})

const closeB = document.getElementById('btn-close')
closeB.addEventListener('click' , ()=>{
    const closeButton = document.getElementById('menu-id')
    closeButton.style.display = 'none'
})
