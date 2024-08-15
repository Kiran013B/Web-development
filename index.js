const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

//------------------Download CV --------------------------------------------//
document.getElementById('downloadResume').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // URL of the resume file
    const resumeUrl = 'https://drive.google.com/file/d/1Gtv7BfSaO05QTC1RFJqxF8nV0VuaccS7/view?usp=drive_link';
    const a = document.createElement('a');
    a.href = resumeUrl;

    // Set the download attribute with a desired file name
    a.download = 'Kiran_Resume.pdf';
    document.body.appendChild(a);
    a.click();

    // Remove the anchor from the document
    document.body.removeChild(a);
});
