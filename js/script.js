(function () {
  var elements = document.querySelectorAll("[data-showtab]");
  elements.forEach(e => e.addEventListener("click", changeTabClick));

  function changeTabClick(event) {
    hideAllTabs();
    var tabName = event.target.dataset.showtab;
    var tabToShow = document.querySelector(".tab[data-tabame=" + tabName + "]");
    show(tabToShow);
  }
  function hideAllTabs() {
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => hide(tab));
  }
  function show(tab) {
    tab.classList.add("show");
  }
  function hide(tab) {
    tab.classList.remove("show");
  }

}())

function valiDcustom() {
  var invalidClassName = 'invalid'
  var inputs = document.querySelectorAll('.form__input')
  var signInBtn = document.querySelector('.form__sign-in')
  const customMessages = {
    valueMissing: 'Please fill out this field!',
    emailMismatch: 'Ooops, you entered an invalid email',
  }

  inputs.forEach(function (input) {
    input.addEventListener('invalid', function () {
      input.classList.add(invalidClassName)
      signInBtn.classList.add(invalidClassName)
    })
    input.addEventListener('input', function () {
      if (input.validity.valid) {
        input.classList.remove(invalidClassName)
      }
    })
    function checkValidity() {
      const message = input.validity.valid
        ? null
        : getCustomMessage(input.type, input.validity, customMessages)
      input.setCustomValidity(message || '')
    }
    input.addEventListener('input', checkValidity)
    input.addEventListener('invalid', checkValidity)
  })

  function getCustomMessage(type, validity) {
    if (validity.typeMismatch) {
      return customMessages[`${type}Mismatch`]
    } else {
      for (const invalidKey in customMessages) {
        if (validity[invalidKey]) {
          return customMessages[invalidKey]
        }
      }
    }
  }
}
valiDcustom() 