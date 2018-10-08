(function () {
    var currentTab = 0;
    var nextBtn = document.getElementById("nextBtn")
    var prevBtn = document.getElementById("prevBtn")
    nextBtn.addEventListener("click", function(){ nextPrev(1)})
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