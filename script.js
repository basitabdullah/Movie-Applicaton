let arrows = document.querySelectorAll('.arrow')
let movieLists = document.querySelectorAll(".movieList")
arrows.forEach((arrow,i)=>{
  arrow.addEventListener("click",()=>{
    movieLists[i].style.transform = "translateX(-100px)"

  })
})