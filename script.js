let isModalOpen = false;
let contrastToggle = false;
var logoImg = document.getElementById("personal-logo")


// Function for dark theme
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
        logoImg.src = "./Assets/Logo_black.png";
    }
    else{
        document.body.classList.remove("dark-theme");
        logoImg.src = "./Assets/Logo_white.png";
    }
}

//Function for email
function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs.sendForm(
        'service_4798qxg',
        'template_vivxxrf',
        event.target,
        'YBX7DhWf37wjV_Gln'
    ).then(()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }).catch(()=>{
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavaiable. Please contact me directly at catngn11@gmail.com"
        )
    })
}


//Function for open and close contact info
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

//HyperFlex start
function applyHyperFlexEffect(elementSelector) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
  
    const startEffect = () => {
      let iteration = 0;
  
      clearInterval(interval);
  
      interval = setInterval(() => {
        eventTarget.innerText = eventTarget.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return eventTarget.dataset.value[index];
            }
  
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
  
        if (iteration >= eventTarget.dataset.value.length) {
          clearInterval(interval);
        }
  
        iteration += 1 / 3;
      }, 30);
    };
  
    const eventTarget = document.querySelector(elementSelector);
  
    // Run the effect immediately
    startEffect();
  }
applyHyperFlexEffect(".HyperFlex");


function HyperFlexEffect(elementSelector) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
  
    document.querySelector(elementSelector).onmouseover = event => {
      let iteration = 0;
  
      clearInterval(interval);
  
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
  
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
  
        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }
  
        iteration += 1 / 3;
      }, 30);
    };
}
  
HyperFlexEffect(".HyperFlex");

//Open and close the burger menu
function openMenu(){
    document.body.classList += " menu--open";
}

function closeMenu(){
    document.body.classList.remove("menu--open");
}