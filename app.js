const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const switchLabel = document.querySelector('.switch');
const toggle = document.querySelector('#toggle');
const basicPlan = document.querySelector('#price-basic');
const proPlan = document.querySelector('#price-pro');
const businessPlan = document.querySelector('#price-business');
const periods = document.querySelectorAll('.period');
const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');

menu.addEventListener('click', () => {
    header.classList.toggle('active');
    overlay.classList.toggle('active');
});


switchLabel.addEventListener('click', () => {
    console.log(toggle)
    if (toggle.checked === true){
        basicPlan.innerText = '$190.00';
        proPlan.innerText = '$390.00';
        businessPlan.innerText = '$990.00';
        periods.forEach(period => {
            period.innerText = 'per year';
        });
        yearly.style.opacity = '1';
        monthly.style.opacity = '0.5';
    } else {
        basicPlan.innerText = '$19.00';
        proPlan.innerText = '$39.00';
        businessPlan.innerText = '$99.00';
        periods.forEach(period => {
            period.innerText = 'per month';
        });
        yearly.style.opacity = '0.5';
        monthly.style.opacity = '1';
    }
})