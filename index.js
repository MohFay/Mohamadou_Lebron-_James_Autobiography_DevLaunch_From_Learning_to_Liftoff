document.addEventListener('DOMContentLoaded', function () {
	const img = document.querySelector('.LB');
	const overlay = document.getElementById('modalOverlay');
	const modalText = document.getElementById('modalText');
	const closeBtn = document.getElementById('modalClose');
	const content = document.getElementById('content');

	if (!img || !overlay || !content) return;

	function openModal() {
		modalText.textContent = 'Taken by Photojournalist, Gina Ferazzi for the Los Angeles Times';
		overlay.classList.remove('hidden');
		content.classList.add('blurred');
		overlay.setAttribute('aria-hidden', 'false');
	}

	function closeModal() {
		overlay.classList.add('hidden');
		content.classList.remove('blurred');
		overlay.setAttribute('aria-hidden', 'true');
	}

	img.addEventListener('click', openModal);
	closeBtn && closeBtn.addEventListener('click', closeModal);
});

