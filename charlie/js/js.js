window.addEventListener('load',function(){

    const btn = this.document.querySelector('.menu')
    const header = this.document.querySelector('header')
    const nav = this.document.querySelector('.nav')

    var cont = 1

    btn.addEventListener('click',function(){
        
        if(cont == 1) {
            header.style.height = 110 + 'px'
           
            cont = 0   
            return
        }
        
        if(cont == 0) {
            header.style.height = 43 + 'px'
            cont = 1     
        }
    })

})