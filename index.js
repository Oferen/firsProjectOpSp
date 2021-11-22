const inputs = document.querySelectorAll("input");
const pass = document.getElementById("pwdField");

document.getElementById("btnOk").addEventListener("click", function() {
    if (pass.value === "TrustNo1") {
        inputs[0].disabled = true;
        inputs[1].disabled = true;
        for (let i = 2; i < inputs.length - 1; i++) {
            inputs[i].disabled = false;
        }
    } else {
        alert("Incorrect password");
    }
});

const launcher = document.getElementById("launchBtn");
launcher.addEventListener("click", function () {
    document.querySelector(".rocket").classList.toggle("rocketLaunch");
})

const checkBtn = document.querySelectorAll("input[type='checkbox']");
const levers = document.querySelectorAll("input[type='range']");
const controls = document.querySelector(".control-panel__inner");

function checkboxes() {
    for (let m = 0; m < checkBtn.length; m++) {
        if (checkBtn[m].checked !== true) {return false}
    } return true
}

function checkRange() {
    for (let n = 0; n < levers.length; n++) {
        if (levers[n].value !== "10") {return false}
    } return true
}

for (let z = 2; z < inputs.length - 1; z++) {
    inputs[z].onchange = function () {
        if (checkboxes() === true && checkRange() === true) {
            launcher.disabled = false;
        }
    }
}