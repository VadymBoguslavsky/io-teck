(function () {
    var currentTab = 0;
    var nextBtn = document.getElementById("nextBtn")
    var prevBtn = document.getElementById("prevBtn")
    nextBtn.addEventListener("click", function () { nextPrev(1) })
    prevBtn.addEventListener("click", function () { nextPrev(-1) })

    function showTab(n) {
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
    }

    function nextPrev(n) {
        var x = document.getElementsByClassName("tab");
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            document.getElementById("regForm").submit();
            return false;
        }
        showTab(currentTab);
    }
    showTab(currentTab);
}())

(function () {
    var invalidClassName = 'invalid'
    var buttonClassName = 'valid'
    var inputs = document.querySelectorAll('.form__input')
    var button = document.querySelector('.form__sign-in')
    inputs.forEach(function (input) {
        input.addEventListener('invalid', function () {
            input.classList.add(invalidClassName)
            button.classList.add(invalidClassName)
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
    const customMessages = {
        valueMissing: 'Please fill out this field!',
        emailMismatch: 'Ooops, you entered an invalid email',
        patternMismatch: 'Custom pattern mismatch'
    }

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
