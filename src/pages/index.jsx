import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="Welcome to Assistica requests">
      <p>
      Here you can make a custom inquiry specially tailored for your needs. 
      </p>  
      <br/>
      {/* <p>
       📚 It uses concepts from the
        {` `}
        <a className="underline text-blue-500" href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/">
          client-only routes section
        </a>
        {` `} and {` `}
        <a className="underline text-blue-500" href="https://www.gatsbyjs.org/tutorial/authentication-tutorial">
          making a site with user authentication
        </a>
        {` `}
        tutorial in the official gatsby doc.
      </p> */}
      <br/>
      <p>
        Please login or create a profile:  
        <br/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right" type="button">
          <Link to="/app/profile">Go to your profile</Link>
        </button>
      </p>
    </View>
  </Layout>
)

export default Index
