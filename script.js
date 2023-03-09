
document.addEventListener("keypress" , function(e){
    if(e.key === "Enter"){
        gerar_item()
    }
})

var container = document.getElementById('container')

function gerar_item(){
    
    var item = document.createElement('div')
    item.style.id=('eu')
    container.appendChild(item)
    console.log('olá mundo')
}
