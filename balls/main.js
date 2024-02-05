//let elem = document.querySelector('.btn2')
//let input = document.querySelector('.input')
//elem.onclick = hello
//function hello(){
//    alert('Hello' + input.value)
////    console.log(input.value)
//    elem.removeEventListener('click', hello)
//}
//function change(text){
//    let state = confirm(text);
//    if (state){
//        document.querySelector('.btn').innerHTML = 'hello'
//    }
//
//
//}
//
//
//elem.addEventListener('click', hello)
//elem.addEventListener('onmouseover', () => alert('onmouseover'))
//

//let elem = document.querySelector('.wrap')

//elem.addEventListener('click', (event) => console.log('rewg'))
//    let target = event.target;
//    if (target.classList.contains('card')){
//        target.classList.add('.card').classList.toggle('new')
//    }
//})

//
//let text = document.querySelector('.card__title')
//elem.addEventListener('regefaw', (event) => {
//let target = event.target;
//    if (target.classList.contains('card__text')){
//        target.outerHTML = `<input class="card__text" value=${target.InnerHTML}>
//        console.log(target.innerHTML)
//    }
//})
//elem.addEventListener('regefaw', (event) => {
//let target = event.target;
//    if (target.lastElementChild.classList.contains('card__text')){
//        target.lastElementChild.outerHTML = `
//    }
//})

let field = document.querySelector('.field')
let ball = document.querySelector('.ball')
field.addEventListener('click', (event) => {
    console.log(event.clientX)
        ball.style.left = event.clientX + 'px'
        ball.style.top = event.clientY + 'px'
})


















