const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

});

prevBtn.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length-1;

    }

    showSlide(currentSlide);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},7000);

let autoSlide = setInterval(nextSlide,7000);

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    showSlide(currentSlide);

}

nextBtn.addEventListener("click",nextSlide);

prevBtn.addEventListener("click",prevSlide);

const slider = document.querySelector(".hardware-slider");

slider.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

slider.addEventListener("mouseleave",()=>{

    autoSlide = setInterval(nextSlide,7000);

});

let startX = 0;

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextSlide();

    }

    if(endX-startX>50){

        prevSlide();

    }

});

/*====================================
        HOW IT WORKS ANIMATION
====================================*/

const workflowSteps =
    document.querySelectorAll(".workflow-step");


const workflowObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.2
        }

    );


workflowSteps.forEach((step, index) => {

    step.style.transitionDelay =
        `${index * 0.15}s`;

    workflowObserver.observe(step);

});

/*====================================
            COPY CODE
====================================*/

const copyButton =
    document.getElementById("copyCode");

const arduinoCode =
    document.getElementById("arduinoCode");


if (copyButton && arduinoCode) {

    copyButton.addEventListener("click", async () => {

        const code =
            arduinoCode.textContent;

        try {

            await navigator.clipboard.writeText(code);

            copyButton.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied!';

            setTimeout(() => {

                copyButton.innerHTML =
                    '<i class="fa-regular fa-copy"></i> Copy Code';

            }, 2000);

        } catch (error) {

            console.error(
                "Unable to copy code:",
                error
            );

        }

    });

}

