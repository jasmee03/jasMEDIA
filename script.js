var typed = new typed(".typed.text", {
    Strings:['Fronted Devloper' , 'Full Stack Devloper', 'web Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

//hamburger menu 
const hamburg = document.querySelector('.hamburg')
        const cancel = document.querySelector('.cancel')
        const navbar = document.querySelector('.dropdown');

        hamburg.addEventListener('click', () => {
            navbar.style.transform = "translateY(0px)"
            hamburg.style.display = 'none'
        })
        cancel.addEventListener('click', () => {
            navbar.style.transform = "translateY(-300px)"
            hamburg.style.display = 'block'
        })



document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Less About Me';
    } else {
        moreInfo.classList.add('hiddeen');
        this.textContent = 'More About Me';
    }
});