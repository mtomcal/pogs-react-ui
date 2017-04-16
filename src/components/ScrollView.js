import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollCard from "./ScrollCard";

class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let styles = {
      width: '100%',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '100vh',
      paddingBottom: '20vh'
    };
    const {scrollItems} = this.props;

    return (
      <div style={styles}>
        {scrollItems.map(function (item, index) {
          return <ScrollCard data={item} key={index} />;
        })}
      </div>
    );
  }
}

ScrollView.propTypes = {
  scrollItems: PropTypes.array.isRequired
};

export default ScrollView;
