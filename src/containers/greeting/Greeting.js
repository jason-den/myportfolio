import React, { useContext } from "react"
import "./Greeting.css"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import { Space, Button } from "antd"

import { greeting } from "../../portfolio"
import { Fade } from "react-reveal"
import emoji from "react-easy-emoji"
import StyleContext from "../../contexts/StyleContext"

export default function Greeting() {
  const { isDark } = useContext(StyleContext)
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {" "}
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>{greeting.subTitle}</p>
              <SocialMedia />
              <Space direction="horizontal">
                <Button type="primary" size="large" shape="round">
                  <a href="#contact">Contact me</a>
                </Button>
                <Button type="primary" shape="round" size="large" children="" newTab={true}>
                  <a href={greeting.resumeLink}>Resume</a>
                </Button>
              </Space>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="saad sitting on table" src={require("../../assets/images/manOnTable.svg")}></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}
