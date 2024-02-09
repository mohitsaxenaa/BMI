const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / (height * height) * 10000).toFixed(2);
        result.innerHTML = `<span>${bmi} <br></span>`;



        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi} <br>you are under-weight</span>`;
        }
        else if (bmi>= 18.6 && bmi<=24.9){
            result.innerHTML = `<span>${bmi} <br>you are normal weighted</span>`;
        }
        else if (bmi>24.9){
            result.innerHTML = `<span>${bmi} <br>you are 0ver-weighted</span>`;
        }
       
    }
});
