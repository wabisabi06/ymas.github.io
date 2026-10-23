// 1. Show "PHOTO" if the profile picture is missing
const photo = document.getElementById('photo');
const profileImg = document.getElementById('profileImg');

profileImg.addEventListener('error', () => {
  profileImg.style.display = 'none';
  photo.classList.add('no-image');
});

// 2. Contact form check
const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = [
    document.getElementById('name'),
    document.getElementById('email'),
    document.getElementById('message')
  ];

  let valid = true;

  fields.forEach((field) => {
    const empty = field.value.trim() === '';
    const badEmail = field.type === 'email' && !field.checkValidity();

    if (empty || badEmail) {
      field.classList.add('invalid');
      valid = false;
    } else {
      field.classList.remove('invalid');
    }
  });

  if (!valid) {
    statusText.textContent = 'Please fill in your name, a valid email and your message.';
    return;
  }

  // For now the form only shows a thank-you message.
  // Later you can connect it to a service like Formspree or EmailJS.
  statusText.textContent = 'Thanks! Your message is ready to send.';
  form.reset();
});