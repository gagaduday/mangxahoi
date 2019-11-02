import React from "react";
import { connect } from "react-redux";
// import { signInFB, signOutFB } from "../../actions";

class FacebookAuth extends React.Component {
  state = { user: null };

  componentDidMount() {
    window.fbAsyncInit = (function() {
      window.FB.init({
        appId: "727522131018654",
        cookie: true,
        xfbml: true,
        version: "4.0"
      });
    })(
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk")
    );
  }

  login = () => {
    window.FB.login(
      response => {
        this.statusChangeCallback(response);
      },
      { scope: "email", return_scopes: true }
    );
  };

  statusChangeCallback(response) {
    console.log("statusChangeCallBack", response);
    if (response.status === "connected") {
      this.apiCall();
    } else {
      console.log("not logged in");
    }
  }

  apiCall() {
    window.FB.api("/me", function(response) {
      console.log(JSON.stringify(response));
      console.log("logged in as" + response.name);
      this.setState({
        user: response.name
      });
    }).bind(this);
  }

  render() {
    return (
      <div>
        {this.state.user} ? {this.state.user} :{" "}
        <button className="ui blue facebook button" onClick={this.login}>
          <i className="facebook icon" />
          Log in
        </button>
      </div>
    );
  }
}

export default FacebookAuth;
