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

    const {data, isSelected, onSelectHandler} = this.props;
    const isSelectedClass = (isSelected) ? `selected` : ``;

    return (
      <a href="#" className="scroll-card-link" onClick={onSelectHandler}>
        <div className={`scroll-card ${isSelectedClass}`} style={styles.card}>
          <h3>{data.id}</h3>
          <p>{data.description}</p>
        </div>
      </a>
    );
  }
}

ScrollCard.propTypes = {
  data: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectHandler: PropTypes.func.isRequired
};

export default ScrollCard;
