
let counts = setInterval(updated);

let upto = 500;
function updated(){
    var count = document.getElementById("counter");
    console.log(count);
    count.innerText = upto++;
    if(upto===1300)
    {
        clearInterval(counts);
    }
};


// Back to top
const fixedNav = document.querySelector(".navbar");
const backToTopBtn = document.querySelector(".arrow-btn");

backToTopBtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})

window.addEventListener("scroll", function() { 
   const scrollHeight = window.pageYOffset;
   if(scrollHeight > 200) {
        fixedNav.classList.add("fixed-nav");
   } else {
       fixedNav.classList.remove("fixed-nav");
   }

// Toggle Back to top Button
   if(scrollHeight > 500) {
       backToTopBtn.classList.add("show-btn");
   } else {
       backToTopBtn.classList.remove("show-btn");
   }
});

// ========== BMI CALCULATOR ============ //
let button = document.querySelector("#btn");

	// Function for calculating BMI
button.addEventListener("click", calculateBMI);

function calculateBMI() {
	// get height input value and convert to int
	let height = parseInt(document.querySelector("#height").value);

    // get weight input value and convert to int
	let weight = parseInt(document.querySelector("#weight").value);
	let result = document.querySelector("#result");

	// Notify your to enter valid values
	if (height === "" || isNaN(height)) {
        result.innerHTML = "Provide a valid Height!";
    } 
    else if (weight === "" || isNaN(weight)) {
		result.innerHTML = "Provide a valid Weight!";
    }
	// If both input is valid, calculate the bmi
	else {
		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

		// interprete results
		if (bmi < 18.6) result.innerHTML = `BMI : <span>${bmi}</span> - You're Under Weight`;

		else if (bmi >= 18.6 && bmi < 24.9) {
			result.innerHTML = `BMI : <span>${bmi}</span> - Normal`;
        }
		else {
            result.innerHTML = `BMI : <span>${bmi}</span> - You're Over Weight`;
        }    
	}
}
