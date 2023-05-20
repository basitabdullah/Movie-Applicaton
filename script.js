let arrows = document.querySelectorAll('.arrow')
let movieLists = document.querySelectorAll(".movieList")
arrows.forEach((arrow,i)=>{
  
    const itemNumber = movieLists[i].querySelectorAll("img").length
    let clickCounter = 0;

  arrow.addEventListener("click",()=>{
    const ratio =  Math.floor(window.innerWidth/270)
    console.log(ratio);
    clickCounter++
    if(itemNumber -(4 + clickCounter) + (4 - ratio) >= 0){
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`

    }else{
        movieLists[i].style.transform = "translateX(0)"
        clickCounter = 0;
    }

  })
})

const ball = document.querySelector(".toogleBall")
const items = document.querySelectorAll(".container, .movieListTitle, .navBar, .navBarContainer, .logo, .sideBar , .leftmenuItems, .toggle")
ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})