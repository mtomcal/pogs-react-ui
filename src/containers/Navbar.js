import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="row col-sm-12">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">POGs DB</Link>
              </div>
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
