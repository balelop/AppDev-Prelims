const burgirBtn = document.querySelector(".burgelo");
const headerNav = document.querySelector(".header_nav")
const blurThing = document.querySelector(".kamote")

burgirBtn.addEventListener("click", () =>{
    burgirBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
    blurThing.classList.toggle("open");
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY >= 100) {
  header.classList.add("blue");
} else {
  header.classList.remove("blue");
}
})
