const awwReddit = fetch('https://www.reddit.com/r/aww/.json')
awwReddit
    .then(response => {
        return response.json();
    })
    .then(data => {
        const results = data.data.children.splice(0, 10)
        console.log(results);
            for (let result of results) {
                console.log(result);
                const div = document.createElement('div');
                const h2 = document.createElement('h2');
                const h3 = document.createElement('h3');
                const a = document.createElement('a');
                const img = document.createElement('img');
                const link = "http://www.reddit.com"+result.data.permalink;
                if (result.data.thumbnail === "default") {
                    img.setAttribute('src', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f2341f8-fcf0-4158-be94-5c3a374e71e7/d8w5gj3-b933c9f2-7ded-461d-8e05-c8425fd4090b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmMjM0MWY4LWZjZjAtNDE1OC1iZTk0LTVjM2EzNzRlNzFlN1wvZDh3NWdqMy1iOTMzYzlmMi03ZGVkLTQ2MWQtOGUwNS1jODQyNWZkNDA5MGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2ZZoUSSs4XzKICmQuA5Irw2rSip47OVO9-CL7KVsMFI');
                    img.style.width = "128px"
                } else {
                    img.setAttribute('src', result.data.thumbnail);
                }
                a.setAttribute('href', link);
                h2.innerText = result.data.title;
                h3.innerText = "Author: "+result.data.author;
                a.innerText = "Link here!";
                div.append(img);
                div.append(h2);
                div.append(a);
                div.append(h3);
                document.querySelector('#posts').append(div);
            }
    });