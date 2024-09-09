
let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

let userBlock = document.createElement('div');
userBlock.classList.add('user-block');

// userBlock.innerHTML = `<div><b>id:</b><span> ${user.id}
//    </span><b>name:</b> </div>
//    <div><b>username:</b> <span>${user.username}</span> <b>e-mail:</b> <span>${user.email}</span></div>
// `

userBlock.innerHTML = `
    <h2>${user.name}</h2>
    <hr>
    <div>Username: ${user.username}</div>
    <hr>
    <div>E-mail: ${user.email}</div>
    <hr>
    <div>Street: ${user.address.street}</div>
    <hr>
    <div>Suite: ${user.address.suite}</div>
    <hr>
    <div>City: ${user.address.city}</div>
    <hr>
    <div>Zip: ${user.address.zipcode}</div>
    <hr>
    <div>phone: ${user.phone}</div>
    <hr>
    <div>website: ${user.website}</div>
    <hr>
    <div>company: ${user.company.name}</div>
    <hr>
    <div>catchPhrase: ${user.company.catchPhrase}</div>
    <hr>
    <div>bs: ${user.company.bs}</div>
`;

let btn = document.createElement('button');
btn.textContent = 'post of current user';
userBlock.appendChild(btn);

document.body.appendChild(userBlock);

btn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let div = document.createElement('div');
            div.classList.add('posts');

            for (const post of posts) {
                let postTitle = document.createElement('div');
                let readMore = document.createElement('button');
                readMore.innerText = `More`;
                postTitle.classList.add('postTitle');
                postTitle.innerHTML = `<span>${post.title}</span>`;
                postTitle.appendChild(readMore);
                div.appendChild(postTitle);
                userBlock.insertBefore(div, btn);
                readMore.addEventListener('click', function() {
                    location.href="post-details.html";
                    localStorage.removeItem('post-id');
                    localStorage.setItem('post-id', post.id);
                })
            }
        });
    btn.style.backgroundColor = 'grey';
    btn.disabled = true;
}