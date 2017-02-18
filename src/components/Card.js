import React, {PropTypes, Component} from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let styles = {};

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
