const icons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answer");
// icons.forEach(icon =>{
//     icon.addEventListener('click',()=>{
//         answers.forEach(answer=>{
//             answer.style.display = 'inline-block';
//         })
//     })
// })
let open = true;

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', ()=>{
        

            answers[i].classList.toggle("open");
           icons[i].style.transform = "rotate(180deg)";
           if(!answers[i].classList.contains("open")){
               icons[i].style.transform = "rotate(0deg)";

           }
            
            
    })
    
}
// //for product search

