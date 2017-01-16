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
              <div className="row">
                  <div className="col s10 push-s1 pull-s1">
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
