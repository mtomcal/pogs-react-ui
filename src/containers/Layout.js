import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
          <Navbar />
          <div className="container">
              <div className="row">
                  <div className="col-sm-10 col-sm-pull-1 col-sm-push-1">
                      {this.props.children}
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.element
};

export default Layout;
