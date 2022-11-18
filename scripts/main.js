var swiper = new Swiper(".skills", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletActiveClass: "swipe-bullet-active"
    },
});


const contactForm = document.getElementById("contactForm")
const loading = document.getElementById("loading")

var pristine = new Pristine(contactForm);

contactForm.addEventListener("submit", (event)=>{
  event.preventDefault()

  pristine.validate()

})

// contactForm.addEventListener("submit", (event)=>{
//   event.preventDefault()

//   loading.classList.toggle("show")

//   inputs = Array.from(event.target).slice(0, -1)
//   data = {}

//   inputs.forEach(item=>{
//     data[item.name] = item.value
//   })

//   requestOptions = {
//     method: 'POST',
//     body: JSON.stringify(data)
//   }
//   fetch("https://test.com/mensaje", requestOptions)
//   .then(resText => resText.json())
//   .then(res => console.log(res))
//   .catch(error => {
//     console.error(error)
//     alert("No se pudo enviar el mensaje")
//   })
//   .finally(()=>loading.classList.toggle("show"))

// })