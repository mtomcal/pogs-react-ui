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
          <div className="container-fluid">
            {this.props.children}
          </div>
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.element
};

export default Layout;
