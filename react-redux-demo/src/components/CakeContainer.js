import React from "react";

import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Cake Container: {props.numOfCakes} </h1>
      <div className="submit">
        <button onClick={props.buyCake}>Submit</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
