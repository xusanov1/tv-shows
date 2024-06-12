fetch('https://api.tvmaze.com/shows')
    .then(response => response.json())
    .then(data => {
        const appContainer = document.getElementById('app');
        const showList = document.createElement('div');
        showList.className = 'show-list';

        data.forEach(show => {
            const showCard = document.createElement('div');
            showCard.className = 'show-card';
            showCard.addEventListener('click', () => {
                window.location.href = show.url;
                
            })


            const image = document.createElement('img');
            image.src = show.image?.medium || 'placeholder.jpg';
            image.alt = show.name;

            const title = document.createElement('h3');
            title.textContent = show.name;

            const description = document.createElement('p');
            description.textContent = show.summary;


            showCard.appendChild(image);
            showCard.appendChild(title);
            showCard.appendChild(description);

            showList.appendChild(showCard);
        });

        appContainer.appendChild(showList);
    })
    .catch(error => {
        console.error('Error fetching TV show data:', error);
    });
