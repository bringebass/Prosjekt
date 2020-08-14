//Dette er javascript til Top10


//øverst



// nederst

const gridContainerTo = document.querySelector('.gridContainerTo');
const toern = document.querySelector('.toern')
const reviewToern = document.querySelector ('.reviewToern');


//nederst

toern.addEventListener('click', () =>  {
    gridContainerTo.classList.toggle('vis')
    if (reviewToern.textContent=='Show more') {
    reviewToern.textContent='Show less'; 
}
    else if (reviewToern.textContent=='Show less') {
    reviewToern.textContent='Show more'
    }

})

reviewToern.addEventListener('click', () =>  {
    gridContainerTo.classList.toggle('vis')
    reviewToern.textContent='Show less';
})

toern.addEventListener('click', () =>  {
    toern.classList.toggle('rotate');
})

reviewToern.addEventListener('click', () =>  {
    toern.classList.toggle('rotate');
})