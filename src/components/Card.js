import React, {PropTypes, Component} from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    let styles = {};

    return (
        <div class="card">
            <div class="card-content">
                {this.props.children}
            </div>
        </div>
    );
  }
}

Card.propTypes = {
    children: PropTypes.element
}

export default Card;
