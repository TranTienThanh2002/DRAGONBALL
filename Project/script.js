$(window).on('load', function() {
    $('.loader').fadeOut('slow');
    $('.navbar').addClass('animate__animated animate__fadeInDown')
    $('.des').addClass('animate__animated animate__zoomIn');
    
    $(window).scroll(function(){
        var pos_body = $('html, body').scrollTop();
        var pos_intro = $('.introduce').offset().top;
        if(pos_body > pos_intro -300){
            $('.navbar').addClass('nav-introduce'); 
            $('.introduce .row').addClass('animate__animated animate__slideInDown')
            $('.img').addClass('animate__animated animate__fadeInLeftBig')
            $('.introduce .description').addClass('animate__animated animate__fadeInLeft')
        }
        else if(pos_body = pos_intro){
            $('.navbar').removeClass('nav-introduce');
        }

    })
})
$(document).ready(function() {
    
    
    $('#btn-next').click(function() {
        var currentBanner = $('.banner .main-banner .img-banner.active');
        var nextBanner = $('.banner .main-banner .img-banner.active').next();
        var btnActive = $('.banner .bulles .active');
        var btnNext = $('.banner .bulles .active').next();
        if(nextBanner.length !=0){
            btnActive.removeClass('active');
            currentBanner.addClass('prevBrand').one('webkitAnimationEnd', function(){
                $('.prevBrand').removeClass('prevBrand').removeClass('active');
                
            });
            btnNext.addClass('active');
            nextBanner.addClass('active').addClass('nextBrand').one('webkitAnimationEnd', function(){
                $('.nextBrand').removeClass('nextBrand');
                
            })
        }
        else{
            btnActive.removeClass('active');
            currentBanner.addClass('prevBrand').one('webkitAnimationEnd', function () {
                $('.prevBrand').removeClass('prevBrand').removeClass('active');
            });
            $('#tp-bullet:first-child').addClass('active');
            $('.img-banner:first-child').addClass('active').addClass('nextBrand').one('webkitAnimationEnd', function () {
                $('.nextBrand').removeClass('nextBrand');
            });
            
        }
        var btnActive = $('.banner .bulles .active');
        var btnNext = $('.banner .bulles .active').next();

    })
    $('#btn-prev').click(function() {
        var currentBanner = $('.banner .main-banner .img-banner.active');
        var prevBanner = $('.banner .main-banner .img-banner.active').prev();
        var btnActive = $('.banner .bulles .active');
        var btnPrev = $('.banner .bulles .active').prev();
        if(prevBanner.length != 0){
            btnActive.removeClass('active');
            currentBanner.addClass('prevBrand-r').one('webkitAnimationEnd', function () {
                $('.prevBrand-r').removeClass('prevBrand-r').removeClass('active');
            });
            btnPrev.addClass('active');
            prevBanner.addClass('active').addClass('nextBrand-l').one('webkitAnimationEnd', function () {
                $('.nextBrand-l').removeClass('nextBrand-l');
            });
            
        }
        else{
            btnActive.removeClass('active');
            currentBanner.addClass('prevBrand-r').one('webkitAnimationEnd', function () {
                $('.prevBrand-r').removeClass('prevBrand-r').removeClass('active');
            });
            $('#tp-bullet:last-child').addClass('active');
            $('.img-banner:last-child').addClass('active').addClass('nextBrand-l').one('webkitAnimationEnd', function () {
                $('.nextBrand-l').removeClass('nextBrand-l');
            });
            
        }
    })
    $('.bulles #tp-bullet').click(function() {
        var postCur = $('.bulles .active').index()+1;
        var postClick =$(this).index()+1;
        
        $('.bulles div').removeClass('active');
        $(this).addClass('active');
        if(postCur < postClick){
            $('.banner .main-banner .img-banner.active').addClass('prevBrand').one('webkitAnimationEnd', function () {
                $('.prevBrand').removeClass('prevBrand').removeClass('active');
            });
            
            $('.img-banner:nth-child('+postClick+')').addClass('active').addClass('nextBrand').one('webkitAnimationEnd', function () {
                $('.nextBrand').removeClass('nextBrand');
            });
        }
        else if(postCur > postClick){
            $('.banner .main-banner .img-banner.active').addClass('prevBrand-r').one('webkitAnimationEnd', function () {
                $('.prevBrand-r').removeClass('prevBrand-r').removeClass('active');
            });
            
            $('.img-banner:nth-child('+postClick+')').addClass('active').addClass('nextBrand-l').one('webkitAnimationEnd', function () {
                $('.nextBrand-l').removeClass('nextBrand-l');
            });
        }


    })
    // CHARACTER
    // $('.character .img-main .col').click(function () {
    //     var imgActive = $('.character .img-main .col.active');
    //     var imgClick = $(this);
    //     var imgPrev = imgActive.prev();
    //     var imgNext = imgActive.next();
    //     var postActive = imgActive.index()+1;
    //     var postClick = imgClick.index()+1;
    //     if(postClick>postActive){
    //         imgActive.addClass('prevBrand').one('webkitAnimationEnd', function () {
    //             $('.prevBrand').removeClass('prevBrand').removeClass('active');
    //         });
            
    //         imgClick.addClass('active').addClass('nextBrand').one('webkitAnimationEnd', function () {
    //             $('.nextBrand').removeClass('nextBrand');
    //         });
    //     }
    // })
    console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector("#left"),
	next: document.querySelector("#right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
    const currentAvaterEl = document.querySelector('.current--avatar')
    const previousAvaterEl = document.querySelector('.previous--avatar')
    const nexttAvaterEl = document.querySelector('.next--avatar')
    
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");
        
        currentAvaterEl.classList.remove('current--avatar');
        previousAvaterEl.classList.remove('previous--avatar');
        nexttAvaterEl.classList.remove('next--avatar');
		currentCardEl.style.zIndex = "50";

		if (direction === "right") {
            
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";
            
                

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

            currentAvaterEl.classList.add('previous--avatar')
            previousAvaterEl.classList.add('next--avatar')
            nexttAvaterEl.classList.add('current--avatar')
            
            currentCardEl.classList.remove("active");
            currentAvaterEl.classList.remove('active');
            nextCardEl.classList.add('active');
            nexttAvaterEl.classList.add('active');
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";
            
                    

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

            currentAvaterEl.classList.add('next--avatar')
            previousAvaterEl.classList.add('current--avatar')
            nexttAvaterEl.classList.add('previous--avatar')

            currentCardEl.classList.remove("active");
            currentAvaterEl.classList.remove('active');
            previousCardEl.classList.add('active');
            previousAvaterEl.classList.add('active');
		}
	}
}
function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

// function resetCardTransforms(e) {
// 	const card = e.currentTarget;
// 	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
// 	gsap.set(card, {
// 		"--current-card-rotation-offset": 0,
// 	});
// 	gsap.set(currentInfoEl, {
// 		rotateY: 0,
// 	});
// }

// function initCardEvents() {
// 	const currentCardEl = cardsContainerEl.querySelector(".current--card");
// 	currentCardEl.addEventListener("pointermove", updateCard);
// 	currentCardEl.addEventListener("pointerout", (e) => {
// 		resetCardTransforms(e);
// 	});
// }

// initCardEvents();



// function init() {

// 	let tl = gsap.timeline();

// 	tl.to(cardsContainerEl.children, {
// 		delay: 0.15,
// 		duration: 0.5,
// 		stagger: {
// 			ease: "power4.inOut",
// 			from: "right",
// 			amount: 0.1,
// 		},
// 		"--card-translateY-offset": "0%",
// 	})
// 		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
// 		delay: 0.5,
// 		duration: 0.4,
// 		stagger: 0.1,
// 		opacity: 1,
// 		translateY: 0,
// 	})
// 		.to(
// 		[buttons.prev, buttons.next],
// 		{
// 			duration: 0.4,
// 			opacity: 1,
// 			pointerEvents: "all",
// 		},
// 		"-=0.4"
// 	);
// }

// const waitForImages = () => {
// 	const images = [...document.querySelectorAll("img")];
// 	const totalImages = images.length;
// 	let loadedImages = 0;
// 	const loaderEl = document.querySelector(".loader span");

// 	gsap.set(cardsContainerEl.children, {
// 		"--card-translateY-offset": "100vh",
// 	});
// 	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
// 		translateY: "40px",
// 		opacity: 0,
// 	});
// 	gsap.set([buttons.prev, buttons.next], {
// 		pointerEvents: "none",
// 		opacity: "0",
// 	});

// 	images.forEach((image) => {
// 		imagesLoaded(image, (instance) => {
// 			if (instance.isComplete) {
// 				loadedImages++;
// 				let loadProgress = loadedImages / totalImages;

// 				gsap.to(loaderEl, {
// 					duration: 1,
// 					scaleX: loadProgress,
// 					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
// 				});

// 				if (totalImages == loadedImages) {
// 					gsap.timeline()
// 						.to(".loading__wrapper", {
// 						duration: 0.8,
// 						opacity: 0,
// 						pointerEvents: "none",
// 					})
// 						.call(() => init());
// 				}
// 			}
// 		});
// 	});
// };

// waitForImages();
    $('.character .avatar .row-avatar div').click(function(){
        if($(this).hasClass('next--avatar')){
            swapCards("right");

        }
        else if($(this).hasClass('previous--avatar')){
            swapCards("left");
        }
    })
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        // breakpoints: {
        //     0:{
        //         slidesPerView: 1
        //     },
        //     520:{
        //         slidesPerView: 2
        //     },
        //     950:{
        //         slidesPerView: 4
        //     }
        // }
      });
    
})