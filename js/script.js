window.addEventListener('load', () => {
	// button
	const buttonLeft = document.querySelector('.btn-left');
	const buttonRight = document.querySelector('.btn-right');

	// carousel-slide
	const slider = document.querySelector('.carousel__slide');
	const images = document.querySelector('.carousel__slide img');
	
	imgUrls = [];
	imgUrls.push('http://mobimg.b-cdn.net/v3/fetch/e4/e4827f228c6f874e6b089a43254cd61a.jpeg');
	imgUrls.push('https://s1.1zoom.ru/b5050/458/294916-svetik_1920x1200.jpg');
	imgUrls.push('https://images.caricos.com/m/mansory/2012_mansory_mclaren_mp4-12c/images/1920x1080/2012_mansory_mclaren_mp4-12c_3_1920x1080.jpg');
	imgUrls.push('https://i.pinimg.com/originals/fc/70/af/fc70af6ec5ce46958a50297bd1d58b0e.jpg');
	
	let imagesCounter = 0;
	images.src = imgUrls[imagesCounter];
	buttonLeft.disabled = true;

	// event listeners
	buttonLeft.addEventListener('click', () => {
		imagesCounter--;
		images.src = imgUrls[imagesCounter];
		buttonRight.disabled = false;
		if (imagesCounter === 0) {
			buttonLeft.disabled = true;
		}});
	
	buttonRight.addEventListener('click', () => {
		imagesCounter++;
		images.src = imgUrls[imagesCounter];
		buttonLeft.disabled = false;
		if (imagesCounter === imgUrls.length - 1) {
			buttonRight.disabled = true;	
		}});
})