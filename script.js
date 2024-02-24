fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
        .then((res) => res.json())
        .then((data) => {
          console.log("API response data:", data);
          displayData(data.places);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
        function displayData(places) {
          const container = document.getElementById("data-container");
          places.forEach((place) => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
                <h2>City Name: ${place.name}</h2>
                <p>City's Details: ${place.info}</p>
                <h3>City's Image</h3>
                <img src="${place.image}" alt="${place.name}"/>
                <hr/>`;
            container.appendChild(postElement);
          });
        }