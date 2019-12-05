const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};


const appearOnScroll = new IntersectionObserver(function(
     entries, 
     appearOnScroll
     ){
         entries.forEach(entry => {
            console.log(entry.target)
             if (!entry.isIntersecting){
                return;
             } else {
                 entry.target.classList.add('appear');
                 if (entry.target.classList.contains("contact-section"))
                 {
                    entry.target.classList.add('contact-transform');
                 }
                 appearOnScroll.unobserve(entry.target);
             }
         });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});