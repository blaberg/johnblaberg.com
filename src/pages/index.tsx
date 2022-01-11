import * as React from "react"
import {Link} from "gatsby";

// markup
const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <div className={"bg-blue-400"}>
                <h1>Welcome to my Gatsby site!</h1>
                <Link to="/about">About</Link>
                <p>I'm making this by following the Gatsby Tutorial.</p>
            </div>
        </main>
    )
}

export default IndexPage
