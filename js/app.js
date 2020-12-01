const introHeading = document.querySelector('.intro-heading');
const subHeading = document.querySelector('.intro-subheading');
const introText = introHeading.textContent;
const subText = subHeading.textContent;
const splitHeading = introText.split('');
const splitSub = subText.split('');
const card = document.querySelectorAll('.card');
introHeading.textContent = '';
subHeading.textContent = '';

/* Fade Text Function */

function fadeIn(originalText, splitText, time) {
	for (let i = 0; i < splitText.length; i++) {
		originalText.innerHTML +=
			'<span class="heading-fade">' + splitText[i] + '</span>';
	}

	let char = 0;
	let timer = setInterval(onTick, time);

	function onTick() {
		const fadeText = originalText.querySelectorAll('.heading-fade')[char];
		fadeText.classList.add('fade-end');
		char++;
		if (char === splitText.length) {
			complete();
			return;
		}
	}

	function complete() {
		clearInterval(timer);
		timer = null;
	}
}

// Calls Fade for Each Section on Hero Image Independently
fadeIn(introHeading, splitHeading, 70);
fadeIn(subHeading, splitSub, 65);

/* Scroll Reveal Function */

ScrollReveal().reveal(card, {
	delay: 300,
	easing: 'ease-in-out',
});
