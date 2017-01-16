import React, {PropTypes, Component} from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    let styles = {};

    return (
        <div className="card">
            <div className="card-content">
                {this.props.children}
            </div>
        </div>
    );
  }
}

Card.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Card;
