const modeswitcher = document.querySelector('.modeswitcher')
const switchon = document.querySelector('.on')
const switchoff = document.querySelector('.off')
const imzaon = document.querySelector('.imzaon')
const imzaoff = document.querySelector('.imzaoff')
const scwhite = document.querySelector('.soundcloudwhite')
const scblack = document.querySelector('.soundcloudblack')
const spwhite = document.querySelector('.spotifywhite')
const spblack = document.querySelector('.spotifyblack')

let clicks = 1;
modeswitcher.addEventListener('click', function () {
    clicks++
    if (clicks % 2 === 0) {
        document.documentElement.style.setProperty('--bg', '#e5e5e5');
        document.documentElement.style.setProperty('--font-color', '#000' )
        switchon.style.opacity = '1'
        switchoff.style.opacity = '0'
        imzaon.style.opacity = '0'
        imzaoff.style.opacity = '1'
        scwhite.style.opacity = '0'
        scblack.style.opacity = '1'
        spwhite.style.opacity = '0'
        spblack.style.opacity = '1'
    } else if (clicks % 2 === 1) {
        document.documentElement.style.setProperty('--bg', '#242424');
        document.documentElement.style.setProperty('--font-color', '#fff' )
        switchon.style.opacity = '0'
        switchoff.style.opacity = '1'
        imzaon.style.opacity = '1'
        imzaoff.style.opacity = '0'
        scwhite.style.opacity = '1'
        scblack.style.opacity = '0'
        spwhite.style.opacity = '1'
        spblack.style.opacity = '0'
    }
});

