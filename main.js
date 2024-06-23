// const sr=ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 300,
//     // reset: true, //Animations repeat
// })

// sr.reveal(`.anim`)
// sr.reveal(`.anim_home`, {delay: 500, distance: '100px', origin: 'bottom'})
// sr.reveal(`.anim_home`, {delay: 1200, distance: '100px', duration: 1500})
// sr.reveal(`.anim_home`, {delay: 1600, interval: 100})
// sr.reveal(`.fq-img`, {origin: 'right'})
// sr.reveal(`.fq-data`, {origin: 'left'})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home-img, .card-element-right, .faq-content, .footer-icon',{origin: 'right'}); 
sr.reveal('.home-element',{origin: 'left', interval: 100}); 
sr.reveal('.content-title',{}); 
sr.reveal('.client-card',{interval: 100}); 
sr.reveal('.card-element-middle',{origin: 'bottom'}); 
sr.reveal('.card-element-left, .faq-img, .footer-content',{origin: 'left'}); 

// sr.reveal('.card-element',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 
// sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
