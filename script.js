let idnImg = document.querySelector('#boxes img')
idnImg.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY)
    idnImg.style.willChange = 'transform'
    idnImg.style.transform = `rotateX(${e.offsetX/ e.offsetY}deg)`
})

idnImg.addEventListener('mouseleave', (e) => {
    //console.log(e.offsetX, e.offsetY)
    
    idnImg.style.opacity = 100
})

// send email 
const sendEmail = document.querySelector('#newsletter form')

sendEmail.addEventListener('onsubmit', () => {
    alert("test")
})