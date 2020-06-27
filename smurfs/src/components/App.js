import React from "react";
import Smurfs from './Smurfs.js';
import SmurfForm from './Form.js'
import { getSmurfs, addSmurfs } from '../actions/index.js';
import { connect } from 'react-redux';
import './App.css';

const App = props => {

return(
<div className="App">
<h1>THE SMURFS SPIRNT</h1>
<h3>React-Redux</h3>
<div className='smurf-wrapper'>
<Smurfs getSmurfs={props.getSmurfs} smurfs={props.smurfs} isFetching={props.isFetching} />
</div>

<SmurfForm addSmurfs={props.addSmurfs} />
</div>
)
}



const mapStateToProps = state => {
return {
smurfs: state.smurfs,
isFetching: state.isFetching,
error: state.error
}
}

const mapDispatchToProps = { getSmurfs, addSmurfs };

export default connect(mapStateToProps, mapDispatchToProps)(App);
