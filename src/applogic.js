import React, { Component } from 'react'
import App from './App'
import { connect } from 'react-redux';
import * as actions from './redux/actions/calculation'

export class Applogic extends Component {
  state = {
    count: '0'
  }
  handleClick = (digit) => {
    let { count } = this.state;
    this.props.reducerdataclear()
    this.setState({
     count: count === '0' ? String(digit) : count + digit
  
    })
  }
  calculatebyform = (e) => {
    this.props.calculateResult(this.state.count);
  }

  handleClear = (e) => {
    //let {count} = this.state
    this.setState({ count: '0' });
    this.props.reducerdataclear()
  }


  render() {
    console.log(this.props.calculations.total, "calculation")
    return (
      <div>
        <App
          handleClick={this.handleClick}
          count={this.props.calculations.total ? this.props.calculations.total : this.state.count}
          calculatebyform={this.calculatebyform}
          handleClear={this.handleClear}
        />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    calculations: state.initialState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculateResult: (data) => dispatch(actions.calculate(data)),
    reducerdataclear: () => dispatch(actions.reducerdatanull())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Applogic);
