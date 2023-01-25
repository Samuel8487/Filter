const instructors = [
  {
    image: './images/1 (1).jpg',
    name: 'john  doe',
    position: 'react developer',
  },
  {
    image: './images/1 (2).jpg',
    name: 'sarah smith',
    position: 'javascript developer',
  },
  {
    image: './images/1 (3).jpg',
    name: 'peter parker',
    position: 'designer developer',
  },
  {
    image: './images/1 (4).jpg',
    name: 'rapheal sampson',
    position: 'full stack',
  },
  {
    image: './images/1 (1).jpg',
    name: 'edward timothy',
    position: 'product manager',
  },
  {
    image: './images/1 (1).jpg',
    name: 'frank donald',
    position: 'product manager',
  },
];

const filterInstructors = document.querySelector('.filter-instructor');
const searchInput = document.querySelector('.search-input');
let listItem = [];
console.log(listItem);

searchInput.addEventListener('input', (e) => {
  data(e.target.value);
});

function display() {
  instructors.forEach(({image, name, position}) => {
    const div = document.createElement('div');
    listItem.push(div);
    div.classList.add('instructor-container');
    div.innerHTML = `
      <img src="${image}" alt="" />
          <div class="info">
            <h5>${name}</h5>
            <p>${position}</p>
          </div>
  `;
    filterInstructors.appendChild(div);
  });
}
display();
function data(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
