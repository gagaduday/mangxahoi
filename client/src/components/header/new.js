import React from "react";
import { connect } from "react-redux";
import { signInFB, signOutFB } from "../../actions";
import FacebookLogin from "react-facebook-login";

// class FacebookAuth extends React.Component {
//   componentDidMount(response) {
//     this.responseFacebook(response);
//   }

//   // responseFacebook = response => {
//   //   console.log(response);
//   // };

//   onAuthChange = isSignedIn => {
//     if (isSignedIn) {
//       this.props.signInFB(this.props.isSignedIn.auth.userId);
//     } else {
//       this.props.signOutFB();
//     }
//   };

//   onSignInClick = () => {
//     this.auth.signInFB();
//   };

//   onSignOutClick = () => {
//     this.auth.signOutFB();
//   };

//   renderAuthButton() {
//     if (this.props.isSignedIn === null) {
//       return null;
//     } else if (this.props.isSignedIn) {
//       return (
//         <button
//           onClick={this.onSignOutClick}
//           className="ui blue facebook button"
//         >
//           <i className="facebook icon" />
//           Log Out
//         </button>
//       );
//     } else {
//       return (
//         <button
//           onClick={this.onSignInClick}
//           className="ui blue facebook button"
//         >
//           <i className="facebook icon" />
//           Log In
//         </button>
//       );
//     }
//   }

//   render() {
//     return (
//       <FacebookLogin
//         appId="727522131018654" //APP ID NOT CREATED YET
//         fields="name,email,picture"
//         callback={this.responseFacebook}
//       />
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     isSignedIn: state.auth.isSignedIn
//   };
// };

// export default connect(
//   mapStateToProps,
//   { signInFB, signOutFB }
// )(FacebookAuth);

// class FacebookAuth extends React.Component {
//   state = {
//     user: ""
//   };

//   componentDidMount() {
//     window.fbAsyncInit = function() {
//       window.FB.init({
//         appId: "727522131018654",
//         autoLogAppEvents: true,
//         xfbml: true
//       });
//     };

//     let finished_rendering = function() {
//       console.log("finished rendering plugins");
//       let spinner = document.getElementById("spinner");
//       spinner.removeAttribute("style");
//       spinner.removeChild(spinner.childNodes[0]);
//     };
//     window.FB.Event.subscribe("xfbml.render", finished_rendering);
//   }

//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

//   login = () => {
//     window.FB.login(
//       response => {
//         this.statusChangeCallback(response);
//       },
//       { scope: "email, public_profile" }
//     );
//   };

//   statusChangeCallback(response) {
//     console.log("statusChangeCallback", response);
//     if (response.status === "connected") {
//       this.apiCall();
//     } else if (response.status === "not_authorized") {
//       console.log("Logged into Facebook, but not the app.");
//     } else {
//       console.log("Not logged into Facebook or other.");
//     }
//   }

//   apiCall() {
//     window.FB.api("/me", function(response) {
//       console.log(JSON.stringify(response));
//       console.log("Logged into as:" + response.name);

//       this.setState({
//         user: response.name
//       });
//     }).bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <div
//           id="spinner"
//           // style="
//           //     background: #4267b2;
//           //     border-radius: 5px;
//           //     color: white;
//           //     height: 40px;
//           //     text-align: center;
//           //     width: 250px;"
//         >
//           Loading
//           <div
//             clasNames="fb-login-button"
//             data-max-rows="1"
//             data-size="large"
//             data-button-type="continue_with"
//             data-use-continue-as="true"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default FacebookAuth;

class FacebookAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedStatus: false,
      id: ""
    };
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "727522131018654",
        cookie: true,
        xfbml: true,
        version: "v2.11"
      });

      window.FB.getLoginStatus(
        function(response) {
          this.statusChangeCallback(response);
        }.bind(this)
      );
    }.bind(this);

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=''";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  loggedIn(response) {
    this.setState({
      loggedStatus: true,
      id: response.authResponse.userID
    });
  }

  loggedOut() {
    this.setState({
      loggedStatus: false
    });
  }

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      this.loggedIn(response);
      console.log(this.state);
    } else if (response.status === "not_authorized") {
      this.loggedOut();
      console.log(this.state.loggedStatus);
    } else {
      this.loggedOut();
      console.log(this.state.loggedStatus);
    }
  }

  checkLoginState() {
    window.FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  handleClick() {
    window.FB.login(this.checkLoginState());
  }

  // onSignInClick = () => {
  //   this.FB.login();
  // };

  // onSignOutClick = () => {
  //   this.FB.logout();
  // };

  render() {
    if (!this.state.loggedStatus) {
      return (
        <div
          className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        />
      );
    } else {
      return <div>{this.state.id}</div>;
    }
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signInFB, signOutFB }
)(FacebookAuth);
