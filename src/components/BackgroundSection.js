import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  StyledClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={StyledClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4">
        {title}
      </h1>
    </BackgroundImage>
  )
}
BackgroundSection.defaultProps = {
  title: "default title",
  StyledClass: "default-background",
}
