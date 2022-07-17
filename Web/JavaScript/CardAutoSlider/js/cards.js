const slides = document.querySelectorAll('.slide')
const classActive = 'active'
let index = 0
const beforeStartDelay = 1000
const removeClassInterval = 4000
const switchCardInterval = 6000
let switchCardsInterval;
const clearActiveClasses = () => slides.forEach(slide => slide.classList.remove(classActive));

function cardsSwitching() {
    const slide = slides[index]
    clearActiveClasses()
    slide.classList.add(classActive)
    setTimeout(() => {
        if (index === slides.length - 1) {
            index = 0
        } else {
            index++
        }
        slide.classList.remove(classActive)
    }, removeClassInterval)
}

const getIndexOfClickedCard = slide => Array.from(slides).findIndex(curSlide => curSlide === slide);

const openCardsInterval = () => {
    switchCardsInterval = setInterval(cardsSwitching, switchCardInterval)
    openCardsByClick();
};

function openCardsByClick() {
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            index = getIndexOfClickedCard(slide)
            //restart interval after click
            clearInterval(switchCardsInterval)
            switchCardsInterval = setInterval(cardsSwitching, switchCardInterval)
            if (slide.classList.contains(classActive)) {
                slide.classList.remove(classActive)
            } else {
                clearActiveClasses()
                slide.classList.add(classActive)
            }
        })
    }
}

//Add CSS class 'active' after reloading/entering to the page in 1000ms
const activateFirstCard = async () => new Promise(resolve =>
    setTimeout(() => {
        slides[index].classList.add(classActive)
        resolve()
    }, beforeStartDelay));

const deactivateFirstCard = () => setTimeout(() => slides[index++].classList.remove(classActive), removeClassInterval)

activateFirstCard()
    .then(() => {
        deactivateFirstCard()
        openCardsInterval()
    })

//----------------------------------------------------------------------------------------------------------------------

// const center = Math.floor(slides.length / 2)
// slides[slides.length % 2 === 0 ? center - 1 : center].classList.add(classActive)
//
// for (const slide of slides) {
//     slide.addEventListener('click', () => {
//         clearActiveClasses();
//         let timeoutCloseCard;
//         if (slide.classList.contains(classActive)) {
//             slide.classList.remove(classActive)
//             clearTimeout(timeoutCloseCard)
//         } else {
//             slide.classList.add(classActive)
//             timeoutCloseCard = setTimeout(() => {
//                 slide.classList.remove(classActive)
//             }, 4000)
//         }
//     })
// }

//----------------------------------------------------------------------------------------------------------------------

// function openCardsByClick() {
//     for (const slide of slides) {
//         slide.addEventListener('click', () => {
//             // clearActiveClasses()
//             console.log('a')
//             if (slide.classList.contains(classActive)) {
//                 slide.classList.remove(classActive)
//             } else {
//                 clearActiveClasses()
//                 slide.classList.add(classActive)
//             }
//         })
//     }
// }
//
// openCardsByClick()

//----------------------------------------------------------------------------------------------------------------------