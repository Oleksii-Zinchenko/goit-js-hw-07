// task1

// const categoriesList = document.querySelectorAll('#categories .item');

// console.log(`Numbers of categories: ${categoriesList.length}`);

// categoriesList.forEach(category => {
//   const title = category.querySelector('h2').textContent;

//   const elementsCount = category.querySelectorAll('li').length;

//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elementsCount}`);
// });

// task2;

// const images = [
//   {
//     width: 360,
//     height: 300,
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     width: 360,
//     height: 300,
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     width: 360,
//     height: 300,
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
//   {
//     width: 360,
//     height: 300,
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     alt: 'Alpine Spring Meadows',
//   },
//   {
//     width: 360,
//     height: 300,
//     url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     alt: 'Nature Landscape',
//   },
//   {
//     width: 360,
//     height: 300,
//     url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     alt: 'Lighthouse Coast Sea',
//   },
// ];
// const gallery = document.querySelector('.gallery');

// const galleryMarkup = images
//   .map(
//     ({ url, alt, width, height }) =>
//       `<li class="gallery-item">
//           <img
//             class="gallery-img"
//             src="${url}"
//             alt="${alt}"
//             width="${width}"
//             height="${height}"
//             loading="lazy"
//           />
//         </li>`
//   )
//   .join('');

// gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// task3

// const textInput = document.getElementById('name-input');
// const nameOutput = document.getElementById('name-output');

// textInput.addEventListener('input', event => {
//   const trimValue = event.currentTarget.value.trim();
//   nameOutput.textContent = trimValue === '' ? 'Anonymous' : trimValue;
// });

// task4;

// const form = document.querySelector('.js-login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const email = event.target.elements.email.value.trim();
//   const password = event.target.elements.password.value.trim();

//   if (email === '' || password === '') {
//     alert('All form fields must be filled in');
//     return;
//   }

//   const data = {
//     email,
//     password,
//   };
//   console.log(data);

//   form.reset();
// }

// task5;

// const button = document.querySelector('.change-color');
// const colorSpan = document.querySelector('.color');
// const widget = document.querySelector('.widget');

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// button.addEventListener('click', event => {
//   const newColor = getRandomHexColor();
//   document.body.style.backgroundColor = newColor;
//   colorSpan.textContent = newColor;
// });
