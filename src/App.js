import React from 'react';
import { connect } from 'react-redux';
import { addAditionalFeature } from './actions/carSalesActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  // misleading
  // const buyItem = item => {
  //   console.log("we are buying a feature")
  //   console.log(item)
  //   // supposed
  //   addAditionalFeature()
  //   // dipsatch an action here to add an item
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          // only works if the action creator is passed in and called direction
          buyItem={props.addAditionalFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  console.log("map state to props", state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures 
  }
}
export default connect(
  mapStateToProps,
  { addAditionalFeature }
)(App);
// export default App;
