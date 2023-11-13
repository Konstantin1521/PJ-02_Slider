const images = document.querySelectorAll('.slide_img')
let point = document.querySelectorAll('.point')
let leftbtn = document.getElementById('leftbtn')
let rightbtn = document.getElementById('rightbtn')
const nead = document.querySelectorAll('.headers')
const element = document.querySelectorAll('.element')
const headers = document.querySelectorAll('.headers')

point[0].classList.add('active')
images[0].classList.add('active')
nead[0].classList.add('active')
element[0].classList.add('element_start')

let count = 0

for(let i=0; i < point.length; i++){
    point[i].addEventListener('click', ()=>{
        for(let j = 0; j < images.length; j++){
            point[j].classList.remove('active')
            images[j].classList.remove('active')
            nead[j].classList.remove('active')
            element[j].classList.remove('element_start')
        }
        count = i
        point[count].classList.add('active')
        images[count].classList.add('active')
        nead[count].classList.add('active')
        element[count].classList.add('element_start')
    })
}

for(let i=0; i < headers.length; i++){
    headers[i].addEventListener('click', ()=>{
        for(let j = 0; j < images.length; j++){
            point[j].classList.remove('active')
            images[j].classList.remove('active')
            nead[j].classList.remove('active')
            element[j].classList.remove('element_start')
        }
        count = i
        point[count].classList.add('active')
        images[count].classList.add('active')
        nead[count].classList.add('active')
        element[count].classList.add('element_start')
    })
}


leftbtn.addEventListener('click',()=>{
    for(let j = 0; j < images.length; j++){
        point[j].classList.remove('active')
        images[j].classList.remove('active')
        nead[j].classList.remove('active')
        element[j].classList.remove('element_start')
    }
    count--
    if(count <0){
        count = images.length-1
    }
    images[count].classList.add('active')
    point[count].classList.add('active')
    nead[count].classList.add('active')
    element[count].classList.add('element_start')

})

rightbtn.addEventListener('click',()=>{
    for(let j = 0; j < images.length; j++){
        point[j].classList.remove('active')
        images[j].classList.remove('active')
        nead[j].classList.remove('active')
        element[j].classList.remove('element_start')
        
    }
    count++
    if(count >=images.length){
        count = 0
    }
    images[count].classList.add('active')
    point[count].classList.add('active')
    nead[count].classList.add('active')
    element[count].classList.add('element_start')

})