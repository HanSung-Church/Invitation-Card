let ticking = false;

function isElementUnderBottom(elem, triggerDiff) {
    const {
        top
    } = elem.getBoundingClientRect();
    const {
        innerHeight
    } = window;
    return top > innerHeight + (triggerDiff || 0);
}
//스크롤 애니메이션 영역
function handleScroll() {
    ticking = false;

    const upOnScrollElems = document.querySelectorAll('.up-on-scroll');
    upOnScrollElems.forEach(elem => {
        if (isElementUnderBottom(elem)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(250px)';
        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';
        }
    });

    // const productImg = document.querySelector('.diff-desc-image-wrap .image-wrap');
    // const productImgRect = productImg.getBoundingClientRect();
    // if (productImgRect.top < 0) {
    //     productImg.style.transform = `translateY(${-1 * productImgRect.top * 0.8 }px)`
    // } else {
    //     productImg.style.transform = 'none';
    // }

    const changeBgSection = document.querySelector('.background-change-wrap');
    const changeBgImg = document.querySelector('.background-change-wrap > div');
    const {
        top: bgTop,
        height: bgHeight
    } = changeBgSection.getBoundingClientRect();
    if (bgTop < 0) {
        const rate = (-1) * bgTop / 3;
        changeBgImg.style.filter = `grayscale(${rate}%)`;
        changeBgImg.style.opacity = `${(100-rate/5) / 100}`;
    } else {
        changeBgImg.style.filter = 'none';
        changeBgImg.style.opacity = `1`;
    }

    // const changeBgSection1 = document.querySelector('.slide-up-wrap');
    // const changeBgImg1 = document.querySelector('.img1');
    // const changeBgImg2 = document.querySelector('.img2');
    // const changeBgImg3 = document.querySelector('.img3');
    // console.log(changeBgImg1)
    // console.log(changeBgImg2)
    // console.log(changeBgImg3)
    // const { top: bgTop1, height: bgHeight1 } = changeBgSection1.getBoundingClientRect();


    // //console.log(bgHeight1, bgTop1)
    // if (bgTop1 < 0) {
    //     const rate = (-1) * bgTop1 / 4;
    //     //changeBgImg1.style.filter = `grayscale(${rate}%)`;
    //     changeBgImg1.style.opacity = `${(100-rate/3) / 100}`;
    // } else {
    //     //changeBgImg1.style.filter = 'none';
    //     changeBgImg1.style.opacity = `1`;
    // }
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
    }
    ticking = true;
}


window.addEventListener('scroll', requestTick);

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty("--vh", `${vh}px`);

// window.addEventListener("resize", () => {
//     console.log("resize");
//     let vh = window.innerHeight * 0.01;
//     document.querySelector('body').style.setProperty("--vh", `${vh}px`);
// });