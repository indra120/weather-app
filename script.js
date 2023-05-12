const $ = (selector) => document.querySelector(selector),
  protocol = "https://",
  domain = "openweathermap.org/",
  apiKey = "3265874a2c77ae4a04bb96236a642d2f";

$("#form").onsubmit = (e) => {
  e.preventDefault();
  const city = $("#search").value;

  if (city) fetch(`${protocol}api.${domain}data/2.5/weather?q=${city}&appid=${apiKey}`, { origin: "cors" })
    .then((res) => res.json())
    .then(({ main, weather }) => {
      const icon = `<img src="${protocol + domain}img/wn/${weather[0].icon}@2x.png" />`;

      $("#main").innerHTML = `
        <div class="weather">
          <h2>
            ${icon}${Math.floor(main.temp - 273.15)}°C${icon}
          </h2>
          <small>${weather[0].main}</small>
        </div>
      `;
    });
};
