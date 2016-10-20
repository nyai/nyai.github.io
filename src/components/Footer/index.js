import React from "react"
import { Link } from "react-router"
import load from "little-loader"
import styles from "./index.css"

const FOOTER_LINKS = [ "Events", "Presenters", "About", "Contact" ]

class Footer extends React.Component {

  componentDidMount() {
    load("//platform.twitter.com/widgets.js", function() {})
  }

  render() {
    return (
      <footer className={ styles.footer }>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <h3>
                  { "I want to present!" }
                </h3>
                <p>
                { "Great! Send an email to info@ny-ai.com" }
                { "with your presentation idea and we will get back to you." }
                { " We love accepting talks from the community " }
                { "and encourage all to apply." }
                </p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h3>
                  { "Latest Tweets" }
                </h3>
                <div>
                  <a
                    data-height="250"
                    className="twitter-timeline"
                    href="https://twitter.com/NYAIMeetup"
                  >
                    { "Tweets by NYAIMeetup" }
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <h3>
                  { "Site Map" }
                </h3>
                <div>
                  {
                    FOOTER_LINKS.map((link) => {
                      return (
                        <Link
                          key={ link }
                          className={ styles.link }
                          to={ `/${(link === "Events" ? "" : link)
                          .toLowerCase()}` }
                        >
                          { link }
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
