const introHeading = document.querySelector('.intro-heading');
const subHeading = document.querySelector('.intro-subheading');
const introText = introHeading.textContent;
const subText = subHeading.textContent;
const splitHeading = introText.split('');
const splitSub = subText.split('');
introHeading.textContent = '';
subHeading.textContent = '';

/* Fade Text Function */

function fadeIn(originalText, splitText) {
	for (let i = 0; i < splitText.length; i++) {
		originalText.innerHTML +=
			'<span class="heading-fade">' + splitText[i] + '</span>';
	}

	let char = 0;
	let timer = setInterval(onTick, 50);

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

fadeIn(introHeading, splitHeading);
fadeIn(subHeading, splitSub);
