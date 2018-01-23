import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollCard from "./ScrollCard";

class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }
  onSelectHandler(index) {
    return (event) => {
      event.preventDefault();
      const {onSelectItem, scrollItems} = this.props;
      this.setState({selectedIndex: index}, () => onSelectItem(scrollItems[index]));
    };
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
    const {selectedIndex} = this.state;

    return (
      <div className="z-depth-2" style={styles}>
        {scrollItems.map((item, index) => {
          const isSelected = index === selectedIndex;
          return <ScrollCard data={item} key={index} isSelected={isSelected} onSelectHandler={this.onSelectHandler(index)} />;
        })}
      </div>
    );
  }
}

ScrollView.propTypes = {
  scrollItems: PropTypes.array.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

export default ScrollView;
