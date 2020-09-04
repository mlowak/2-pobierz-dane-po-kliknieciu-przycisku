let btnGetData = document.getElementById('get-data');

const getData = () => {
    
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    // pobiera dane i zmienia je w JavaScript
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            // linia, która oddziela posty
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitle.innerText = `Title ID: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })

        // błąd, np kiedy zrobiło się literówkę
        .catch(error =>{
            console.error(error);
        })
}

btnGetData.addEventListener('click', getData);

