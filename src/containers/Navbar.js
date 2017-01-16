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
              <div className="row">
                  <div className="nav-wrapper col s10 push-s1 pull-s1">
                      <a href="#" className="brand-logo">POGs DB</a>
                      <ul id="nav-mobile" className="right hide-on-med-and-down">
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
};

export default Navbar;
