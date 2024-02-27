const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

div1.addEventListener('click', () => {
    div1.classList.toggle('bg-red');
})
div2.addEventListener('click', () => {
    div2.classList.toggle('bg-red');
})