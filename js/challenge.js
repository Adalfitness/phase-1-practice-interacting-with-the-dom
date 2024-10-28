const counter = document.getElementById('counter');
let count = 0;

let counterInterval = setInterval(() => {
    count += 1;
    counter.textContent = count;

}, 1000);

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
    count += 1;
    counter.textContent = count;

});

minusButton.addEventListener("click", () => {
    count -= 1;
    counter.textContent = count;
})

const likeButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');

const likes = {};

likeButton.addEventListener('click', () => {
    const currentCount = count;

    if (likes[currentCount]){
        likes[currentCount] +=1;

    } else {
        likes[currentCount] = 1;
    }

    displayLikes();
});

function displayLikes(){
    likesList.innerHTML = " ";

    for (let number in likes ){
        const li = document.createElement('li');
        li.textContent = `Number ${number} has been liked ${likes[number]} time(s)`
        likesList.appendChild(li);
    }
};


const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
if(counterInterval){
    clearInterval(counterInterval);
    counterInterval = null;
    pauseButton.textContent = 'resume';

    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;

} else {
    counterInterval = setInterval(() => {
        count += 1;
        counter.textContent = count;

    }, 1000);

    pauseButton.textContent = 'pause';


    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
}
})

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsSection = document.getElementById('list');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();


const commentText = commentInput.value;
if(commentText.trim() !== " "){
    const comment = document.createElement('p');
    comment.textContent = commentText;

    commentsSection.appendChild(comment);

    commentInput.value = " ";

}

});
