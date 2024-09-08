import "./WeatherApp.css";
import CityInfo from "./CityInfo";
import List1 from "./List1";
import TempApp from "./TempApp.js";
import "bootstrap/dist/css/bootstrap.min.css";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;
export default function WeatherApp() {
  return (
    <div className="Wrapper">
      <div className="WeatherApp">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city name..."
                class="form-control"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input type="submit" name="Search" class="button" />
            </div>
          </div>
        </form>

        <CityInfo city="Perth" />
        <List1 date="Tuesday" time="10:00" />
        <TempApp humidity="80" wind="10" temp="19" />
        <h3 class="footer-link-text">
          {"This project was coded by Cheryl Watts 👩‍💻 and is "}

          <a
            href="https://github.com/chezzer84"
            target="blank"
            rel="noopener noreferrer"
          >
            open sourced on Github
          </a>
          {" and "}
          <a
            href="https://celadon-youtiao-b84ec4.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </h3>
      </div>
    </div>
  );
}
