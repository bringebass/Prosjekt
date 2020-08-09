//Dette er javascript til Top10


//øverst



// nederst

const gridContainerTo = document.querySelector('.gridContainerTo');
const toern = document.querySelector('.toern')
const reviewToern = document.querySelector ('.reviewToern');


//nederst

toern.addEventListener('click', () =>  {
    gridContainerTo.classList.toggle('vis')
    if (reviewToern.textContent=='Vis mer') {
    reviewToern.textContent='Vis mindre'; 
}
    else if (reviewToern.textContent=='Vis mindre') {
    reviewToern.textContent='Vis mer'
    }

})

reviewToern.addEventListener('click', () =>  {
    gridContainerTo.classList.toggle('vis')
    reviewToern.textContent='Vis mindre';
})

toern.addEventListener('click', () =>  {
    toern.classList.toggle('rotate');
})

reviewToern.addEventListener('click', () =>  {
    toern.classList.toggle('rotate');
})