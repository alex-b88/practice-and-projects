
let postID = localStorage.getItem("post-id");
let user = JSON.parse(localStorage.getItem('user'));
let div = document.createElement('div');
div.classList.add('post');

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(res => res.json())
            .then(post =>{
               div.innerHTML = `
                   <h2>${post.title}</h2>
                   <p><b>author:</b> <i>${user.name}</i></p>
                   <p class="post-body">${post.body}</p>
                   <p>comments:</p>
               `;

            });
let commentsBlock = document.createElement('div');
commentsBlock.classList.add('comments-block');
fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
            .then(res => res.json())
            .then(comments => {
                comments.forEach(comment => {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `
                        <p><b>name:</b> ${comment.name}</p>
                        <p><b>email:</b> ${comment.email}</p>
                        <p>${comment.body}</p>
                    `;
                    commentsBlock.appendChild(commentDiv);
                    div.appendChild(commentsBlock);
                });
            })
document.body.appendChild(div);