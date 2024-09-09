
fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((response) => {
            for (const obj of response) {
                let userDiv = document.createElement('div');
                let userDiveLeft = document.createElement('div');

                userDiv.classList.add('user');
                let userId = document.createElement('span');
                userId.innerText = obj.id;

                let userName = document.createElement('span');
                userName.innerText = obj.name;
                userDiveLeft.appendChild(userId);
                userDiveLeft.appendChild(userName);

                let button = document.createElement('button');
                button.id = obj.id;
                button.classList.add('btn');
                button.innerText = `More...`;

                userDiv.appendChild(userDiveLeft)
                userDiv.appendChild(button);
                document.body.appendChild(userDiv);

                button.addEventListener('click', () => {
                    location.href="user-details.html";
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(obj));
                });
            }
        })

