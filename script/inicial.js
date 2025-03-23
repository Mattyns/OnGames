function abrirmenu() {
    
    var menu = document.getElementById('menu')
    var abrirmenu = document.getElementById('abrirmenu')

    
    menu.style.visibility = 'visible'
    menu.style.transform = 'translateX(0) translateY(28px)'
    
    abrirmenu.style.transform = 'translateX(0) translateY(28px)'
    abrirmenu.setAttribute("onclick", "fecharmenu()")

    
}

function fecharmenu() {
    
    var menu = document.getElementById('menu')
    var abrirmenu = document.getElementById('abrirmenu')

    
    setTimeout(() =>{menu.style.visibility = 'hidden'},1000)
    menu.style.transform = 'translateX(0) translateY(0px)'
    
    abrirmenu.style.transform = 'translateX(0) translateY(0px)'
    abrirmenu.setAttribute("onclick", "abrirmenu()")

    
}