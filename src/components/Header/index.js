import React, { PropTypes } from "react"
import { Link } from "react-router"
import styles from "./index.css"

const HEADER_LINKS = [ "Events", "Presenters", "About", "Contact" ]

const Header = () => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        {
          HEADER_LINKS.map((link) => {
            return (
              <Link
                key={ link }
                className={ styles.link }
                to={ `/${(link === "Events" ? "" : link).toLowerCase()}` }
              >
                { link }
              </Link>
            )
          })
        }
      </div>
      <div className={ styles.navPart2 }>
        <Link className={ styles.link } to="/">
          <img src="/assets/icon.png" />
        </Link>
      </div>
    </nav>
    <div className={ styles.callout } >
      { "Next Event: " }
      <span style={ { color: "#eee" } }>{ " AI For Good" }</span>
      <a
        href="http://www.meetup.com/New-York-Artificial-Intelligence-Meetup-NYAIM/events/234787881/"
        className={ styles.calloutButton }
      >
        { "Join Us" }
      </a>
    </div>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
