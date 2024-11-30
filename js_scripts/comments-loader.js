function getRandomRange(){
    const isFirstLoad = !localStorage.getItem('commentsLoaded');
    localStorage.setItem('commentsLoaded', 'true');
    return isFirstLoad ? {start: 1, limit: 10} : {start: 4, limit: 10};
}

function loadComments() {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments-container');
    const errorMessage = document.getElementById('error-message');

    preloader.style.display = 'block';

    const { start, limit } = getRandomRange();

    fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка');
            }
            return response.json();
        })
        .then(comments => {
            commentsContainer.innerHTML = '';

            // <article className="comment-card">
            //     <div className="comment-header">
            //         <span className="comment-author">${comment.name}</span>
            //         <span className="comment-email">${comment.email}</span>
            //     </div>
            //     <p className="comment-body">${comment.body}</p>
            // </article>

            comments.forEach(comment => {
                const commentCard = document.createElement('article');
                commentCard.classList.add('comment-card');

                const commentHeader = document.createElement('div');
                commentHeader.classList.add('comment-header');

                const author = document.createElement('span');
                author.classList.add('comment-author');
                author.textContent = comment.name;

                const email = document.createElement('span');
                email.classList.add('comment-email');
                email.textContent = comment.email;

                commentHeader.appendChild(author);
                commentHeader.appendChild(email);

                const commentBody = document.createElement('p');
                commentBody.classList.add('comment-body');
                commentBody.textContent = comment.body;

                commentCard.appendChild(commentHeader);
                commentCard.appendChild(commentBody);

                commentsContainer.appendChild(commentCard);
            });

            errorMessage.style.display = 'none';
        })
        .catch(error => {
            console.error('Ошибка загрузки комментариев:', error);
            errorMessage.style.display = 'block';
        })
        .finally(() => {
            preloader.style.display = 'none';
        });
}

document.addEventListener('DOMContentLoaded', loadComments);
