import Header from "./components/Header";
import React, { Component } from "react";
import ShowWeather from "./components/ShowWeather";
import SearchInput from "./components/SearchInput";
import Spinner from "./components/Helpers/Spinner";
import fetchService from "./actions/API/fetchService.js";
import moment from "moment";
import "moment-timezone";

class Main extends Component {
  state = {
    isLoading: false,
    city_coords: "",
    response: null,
    result: "",
    icon: "",
    temp: "",
    time: "",
    message: "",
    isOffline: false
  };

  componentDidMount() {
    this.checkInternet();
  }

  handleSelect = async e => {
    this.setState({ result: "", isLoading: true });

    this.checkInternet();

    fetchService
      .getForecast(e.target.value)
      .then(async res => {
        let data = JSON.parse(res.data);
        if (data && data.currently) {
          this.setState({
            response: data.currently,
            temp: data.currently.temperature,
            result: data.currently.summary,
            icon: data.currently.icon,
            message: "",
            isLoading: false
          });

          let time = moment(data.currently.time * 1000)
            .tz(data.timezone)
            .format("LT");
          this.setState({ time: time });
        } else {
          this.setState({
            message:
              "There might be an error with the API. Please try again later.",
            isLoading: false
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          message:
            "There might be an error with the API. Please try again later.",
          isLoading: false
        });
      });
  };

  checkInternet = () => {
    if (navigator.onLine) {
      this.setState({ isOffline: false });
    } else {
      this.setState({ isOffline: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchInput
          handleSelect={this.handleSelect}
          doSearch={this.doSearch}
        />
        {this.state.isLoading && <Spinner />}
        {this.state.message && !this.state.isOffline && (
          <p className="message col-10 mx-auto text-center mt-5">
            {this.state.message}
          </p>
        )}
        {this.state.isOffline && (
          <div className="offline-warning col-10 mx-auto text-center mt-5 ">
            We're sorry but the app needs internet to access the weather data.
          </div>
        )}
        {!this.state.isLoading && this.state.response && (
          <ShowWeather
            result={this.state.result}
            icon={this.state.icon}
            temp={this.state.temp}
            time={this.state.time}
            classNameOffline={this.state.internetStatusClass}
          />
        )}

        <footer>
          <a
            href="https://darksky.net/poweredby/"
            rel="noopener noreferrer"
            target="_blank"
            className="api-credits"
          >
            Powered by Dark Skys
          </a>
          <a
            href="https://github.com/MichelleFuchs"
            rel="noopener noreferrer"
            target="_blank"
            className="author-credits"
          >
            &#169; Michelle Fuchs
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Main;
