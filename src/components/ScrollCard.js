import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let styles = {
      card: {
        width: '100%',
        borderBottom: '1px solid #CCC',
        padding: '1.6rem'
      },
    };

    const {data} = this.props;

    return (
      <div className="scroll-card" style={styles.card}>
        <h3>{data.id}</h3>
        <p>{data.description}</p>
      </div>
    );
  }
}

ScrollCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ScrollCard;
