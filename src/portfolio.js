
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jason Den",
  title: "Hello! I'm Jason",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Swift / Objective C and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/12NZDqmmjfyeHkl9v-aWPVujNmUGCmQNv/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  gmail: "jason.den.cloud@gmail.com",
  github: "https://github.com/hbxz",
  gitlab: "https://gitlab.com/jason.den",
  linkedin: "https://linkedin.com/in/jason-den",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Develop Clean and Robust RESTful API"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },

    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Machine Learing",
      fontAwesomeClassname: "fad fa-rocket"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of New South Wales",
      logo: require("./assets/images/UNSW.png"),
      subHeader: "Master of Information Technology",
      duration: "July 2018 - June 2020",
      desc: "",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend - React",  
      progressPercentage: "60%" 
    },
    {
      Stack: "Native Development - Swift",  
      progressPercentage: "70%"
    },
    {
      Stack: "Backend - Express.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Infrastructure - AWS",
      progressPercentage: "35%"
    },
    {
      Stack: "Algorithm",
      progressPercentage: "40%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Freelancer",
      company: "",
      companylogo: require("./assets/images/React.png"),
      date: "Oct 2019 – Now",
      desc: "Building fullstack software for customers using MERN stack."
    },
    {
      role: "Application Developer",
      company: "XMind",
      companylogo: require("./assets/images/XMind.png"),
      date: "Apr 2017 – Oct 2017",
      desc: "Developing macOS and iOS software."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hbxz", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "AWS Solution Architect Associate",
      subtitle: "",
      image: require("./assets/images/AWS-SolArchitect-Associate.png"),
      footerLink: [
        { name: "Certification", url: "https://www.youracclaim.com/badges/47916526-6b51-4f89-9c4a-d43ed3827006/public_url" },
      ]
    },

    {
      title: "More to come",
      subtitle: "",
      image: require("./assets/images/rocket.jpeg"),
      footerLink: [
        // { name: "", url: "" },
        // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-478099095",
  email_address: "jason.den.cloud@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo , };
