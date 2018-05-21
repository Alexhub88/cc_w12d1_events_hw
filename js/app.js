document.addEventListener('DOMContentLoaded', () => {
  console.log("Reading List Form Loaded!");

    let form = document.querySelector('#form-el');
    form.addEventListener('submit', handleForm);
});

const handleForm = function(event){
  event.preventDefault();
  console.log(this);

  // 1. accessing our container from the dom - query selector
  // 2. creating an element and manipulate it
  // 3. appending to our container

 const domContainer = document.querySelector('#saved-result');

 const resultParagraph = document.createElement('p');
    resultParagraph.textContent = `Your choice of Title: ${event.target.item_title.value}\n`
      +`Your choice of Author: ${event.target.author_name.value}\n`
      +`Category: ${event.target.category.value}\n`
      +`Genre: ${event.target.genre.value}\n`;

      domContainer.appendChild(resultParagraph);

}
