let button = document.getElementById("btn");

function BMI() {
     let height = document.getElementById("height").value;

     let weight = document.getElementById("weight").value;

     if (height === '' || height <= 0) {
          document.getElementById("results").innerHTML =
            "Height cannot be empty nor a negative value";
     }
     else if (weight === '' || weight <= 0) {
          document.getElementById("results").innerHTML =
            "Weight cannot be empty nor a negative value";
     }
     else {
          let bmi = Math.round(weight / (height ** 2));

          if (bmi < 18.5) {
               document.getElementById("results").innerHTML =
                    "Your BMI is " + bmi + ", so you are underweight.";
          }
          else if (bmi >= 18.5 && bmi <= 24.9) {
               document.getElementById("results").innerHTML =
                    "Your BMI is " + bmi + ", so you have a normal weight.";
          }
          else if (bmi > 24.9) {
               document.getElementById("results").innerHTML =
                    "Your BMI is " + bmi + ", so you are overweight.";
          }
     }
}

   button.addEventListener ('click', BMI) 
