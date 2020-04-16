import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=>this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={()=>this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map((el) => <li key={el.id} onClick={()=>this.props.onDeleteResult(el.id)}>{el.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter : () => dispatch(actionCreators.increment()),
        onDecrementCounter : () => dispatch(actionCreators.decrement()),
        onAddCounter : (val) => dispatch(actionCreators.add(val)),
        onSubtractCounter : (val) => dispatch(actionCreators.sub(val)),
        onStoreResult : (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult : (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);