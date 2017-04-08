import React, {Component} from "react";
// import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-sm-12">
            <div className="col-sm-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {};

export default Card;
