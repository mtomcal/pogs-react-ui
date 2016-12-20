import React, {PropTypes, Component} from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let styles = {};

    return (
      <div>
          <nav>
              <div className="nav-wrapper">
                  <a href="#" className="brand-logo">POGs DB</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                      <li><a href="sass.html">Sass</a></li>
                      <li><a href="badges.html">Components</a></li>
                      <li><a href="collapsible.html">JavaScript</a></li>
                  </ul>
              </div>
          </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
}

export default Navbar;
