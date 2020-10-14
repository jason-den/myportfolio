import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
// import GithubProjects from "./githubProjects/GithubProjects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
// import Blogs from "./blogs/Blogs";
// import Education from "./education/Education";
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Top />
          <Greeting />
          <Skills />
          {/* <GithubProjects /> */}
          <StartupProject />
          <WorkExperience />
          <StackProgress />
          <Achievement />

          <Profile />
          <Footer />

          {/* <Education /> */}
          {/* <Blogs /> */}
        </StyleProvider>
      </div>
    );
  }
}
