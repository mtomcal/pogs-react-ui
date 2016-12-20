import React, {PropTypes, Component} from 'react';
import Navbar from './Navbar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let styles = {};

    return (
      <div>
          <Navbar />
          <div>
              {this.props.children}
          </div>
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout;
