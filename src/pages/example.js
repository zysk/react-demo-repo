import React from "react"
import "../components/main.css"
import { graphql } from "gatsby"
const example = ({ data }) => {
  return <div>{data.contact.email}</div>
}

export default example
