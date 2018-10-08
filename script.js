(function () {
  var currentTab = 0;
  var nextBtn = document.getElementById("nextBtn")
  var prevBtn = document.getElementById("prevBtn")
  nextBtn.addEventListener("click", function () { activeTab(1) })
  prevBtn.addEventListener("click", function () { activeTab(-1) })

  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
  }

  function activeTab(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
      return false;
    }
    showTab(currentTab);
  }
  showTab(currentTab);
}())

  (function () {
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
  }())
