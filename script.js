const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
});
// const parag = document.querySelectorAll("p");
// parag.forEach(item => {
//     item.addEventListener('click', function () {
//         var prox =  this.nextSibling.nextSibling;
//         prox.classList.remove('hide');
//         if (prox.classList.contains('fim')) {
//             prox.classList.remove('fim');
//             var final =  prox.nextElementSibling;
//             final.style.display = 'block';
//             final.classList.add('center');
//         }
//     })
// });
