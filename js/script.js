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
  if (scrollY >= 52) {
  header.classList.add("blue");
} else {
  header.classList.remove("blue");
}
})

// alcos

var slider = tns({
  container: ".homeBanner__slider",
  items: 1,
  slideBy: "page",
  autoplay: false,
  mouseDrag: true,
  // containerControls: "#homeBanner__controls",
  prevButton: ".prev",
  nextButton: ".next",
  speed: 1500,
});

var slider = tns({
  container: ".meet__slider",
  items: 1,
  slideBy: "page",
  mouseDrag: true,
  controls: false,
  autoplay: true
});

var slider = tns({
  container: ".member__slider",
  items: 1,
  slideBy: 1,
  mouseDrag: true,
  controls: false,
  autoplay: true,
  nav: true,
  navPosition: "bottom",
  speed: 1000,
  gutter: 20,
  responsive: {
    980: {
      items: 3,
      slideBy: 1
    }
  }
});

var slider = tns({
  container: ".logos__slider",
  items: 1,
  slideBy: 1,
  mouseDrag: true,
  controls: false,
  autoplay: true,
  loop: true,
  responsive: {
    980: {
      items: 5,
    }
  }
});

var slider = tns({
  container: ".clients__slider",
  items: 1,
  slideBy: "page",
  mouseDrag: true,
  controls: false,
  autoplay: true,
  axis: "vertical"
});

var slider = tns({
  container: ".updates__slider",
  items: 1,
  slideBy: "page",
  mouseDrag: true,
  controls: false,
  autoplay: true,
  gutter: 100,
  responsive: {
    980: {
      items: 3,
      slideBy: 1,
      gutter:0
    }
  }
});


const portfolioNav = document.querySelectorAll(".tab_nav_link");
const portfolioContent = document.querySelectorAll(".portfolio_content_item");

portfolioNav.forEach((port) => {
    port.addEventListener("click", () => {
        removeActivePort();
        port.classList.add('active');

        const activeContent = document.querySelector(`#${port.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    })
});

function removeActivePort() {
    portfolioNav.forEach((port) => {
        port.classList.remove('active');
    });
}

function removeActiveContent() {
    portfolioContent.forEach((port) => {
        port.classList.remove('active');
    });
}



// DROPDOWN
const dropdowns = document.querySelectorAll('h4')
dropdowns.forEach((drop) =>{
    drop.addEventListener('click', ()=>{
        drop.nextElementSibling.classList.toggle('open')
        drop.querySelector('i').classList.toggle('open')
        drop.classList.toggle('open')
    })
})

// counter
function startCounter(...endNumbers) {
  endNumbers.forEach((endNumber, index) => {
    let counterElement = document.querySelector(`.countNum${index}`);
    let start = 0;
    let incrementTime = 2 / endNumber;

    function updateCounter() {
      counterElement.textContent = start;
      if (start < endNumber) {
        start++;
        setTimeout(updateCounter, incrementTime);
      }
    }

    updateCounter();  // Start the counter
  });
}
window.addEventListener("scroll", ()=>{
  if(scrollY > 4700 && scrollY < 4800){
    startCounter(130,60,30,33)
  }
})



