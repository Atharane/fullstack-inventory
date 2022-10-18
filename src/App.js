import { BrowserRouter, Route, Routes } from "react-router-dom";
import { config } from "./config";
import { PublicClientApplication } from "@azure/msal-browser";
import { Component } from "react";
import Login from "./Components/Login/Login.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.tsx";
import Page404 from "./Components/Page404.tsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
    };

    this.username = undefined;

    this.login = this.login.bind(this);

    // initialize the MSAL application object
    this.msalInstance = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
      },
    });
  }

  async login() {
    try {
      // login via popup
      await this.msalInstance.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      this.setState({ isAuthenticated: true });

      // get the user's profile
      const account = this.msalInstance.getAllAccounts()[0];
      const user = await this.msalInstance.acquireTokenSilent({
        scopes: config.scopes,
        account: account,
      });
      // this.setState({ user: user });
      console.log(user);

      // get username
      this.username = user.account.username;
    } catch (error) {
      this.catch(error);
    }
  }

  // logout
  logout = () => {
    const currentAccount = this.msalInstance.getAccountByHomeId(this.msalInstance.getAllAccounts()[0]);
    this.msalInstance.logoutRedirect({
      account: currentAccount,
      postLogoutRedirectUri: "http://localhost:3000/",
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              this.state.isAuthenticated ? (
                <Dashboard logout={this.logout} username={this.username} />
              ) : (
                <Login login={this.login} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard logout={this.logout} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
  catch(error) {
    console.log(error);
  }
}

// console.log(`${App}`)

export default App;
