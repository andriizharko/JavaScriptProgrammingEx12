/**
 * Andrii Zharko
 * Ex12
 * 2024/03/15
 * 
 * Query the DOM for an element or elements by supplied selector
 * @param {string} selector The css selector
 * @returns {NodeListOf<Element> | Element}
 */
const $ = (selector) => {
  const query = document.querySelectorAll(selector);

  if (!!query) {
    if (query.length > 1) return query;
    else return query[0];
  }

  return query;
};

const fName = $("#firstName");
const lName = $("#lastName");
const form = $("form");

// form.addEventListener('submit', evt => {
//     console.log(evt);
//     evt.preventDefault(); // Cancels the default behavior of form submission

//     fName.innerText = form.firstName.value.trim();
//     lName.innerText = form.lastName.value.trim();
// });

// or

form.onsubmit = (evt) => {
  console.log(evt);
  evt.preventDefault(); // Cancels the default behavior of form submission

  fName.innerText = form.firstName.value.trim();
  lName.innerText = form.lastName.value.trim();
};