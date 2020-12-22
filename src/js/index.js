window.addEventListener('DOMContentLoaded', (event) => {
  const submitButton = document.querySelector('.submit_button');
  let counter = 0;
  const addProduct = (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('.product_input');
    const categoryList = document.querySelector(`.${getSelectedValue()}`);
    const newListElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Usuń';
    deleteButton.classList.add('remove');
    deleteButton.addEventListener('click', removeElement);
    deleteButton.addEventListener('click', decreaseCounterOfProducts);
    newListElement.innerHTML = `<span class="productName">${
      inputValue.value
    }</span> <br>     ${getNumberValue()} ${
      getRadioValue() === 'kilogramy' ? 'kilogramów' : 'sztuk'
    }<hr>`;
    categoryList.appendChild(newListElement);
    newListElement.appendChild(deleteButton);
    inputValue.value = '';
    const numberInput = document.querySelector('.quantity_input');
    numberInput.value = '';
  };
  const increaseCounterOfProducts = () => {
    counter += 1;
    productCounter.innerHTML = `Liczba produktów:${counter}`;
    return counter;
  };
  const decreaseCounterOfProducts = () => {
    counter -= 1;
    productCounter.innerHTML = `Liczba produktów:${counter}`;
    return counter;
  };

  submitButton.addEventListener('click', addProduct);
  submitButton.addEventListener('click', increaseCounterOfProducts);
  const productCounter = document.createElement('p');
  productCounter.innerHTML = `Liczba produktów:${counter}`;
  document.querySelector('.header').appendChild(productCounter);
  const getSelectedValue = () => {
    const selectElement = document.querySelector('.select_category');
    const result = selectElement.options[selectElement.selectedIndex].value;
    return result;
  };
  const removeElement = (e) => {
    e.target.parentNode.remove();
  };

  const getNumberValue = () => {
    const numberInput = document.querySelector('.quantity_input');
    return numberInput.value;
  };
  const getRadioValue = () => {
    const radioInputs = document.getElementsByName('pieces');
    for (let i = 0, length = radioInputs.length; i < length; i++) {
      if (radioInputs[i].checked) {
        return radioInputs[i].value;
      }
    }
  };
});
