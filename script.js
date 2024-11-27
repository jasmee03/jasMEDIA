var typed = new typed(".text", {
    Strings:["Fronted Devloper" , "web Designer", "web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Less About Me';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'More About Me';
    }
});