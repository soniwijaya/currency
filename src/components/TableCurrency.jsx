import React, { Component } from 'react';
import swal from 'sweetalert';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showCurrency, getKeyword, addCurrency, removeCurrency } from '../store/currency.action';

import ListCurrency from './ListCurrency';

class TableCurrency extends Component {
    
    constructor(){
        super()
        this.state = {
            statusAddButton: false
        }
    }

    getCurrency = () => {
        const { currency, keyword } = this.props.currency
        this.props.addCurrency(currency , keyword)
    }

    inputCurrency = (event) => {
        event.preventDefault()
        this.props.getKeyword(event.target.value)
    }

    deleteCurrency = (name) => {
        const { currency } = this.props.currency
        swal({
            title: 'Are you sure?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal('success delete', {
                icon: 'success',
              })
              this.props.removeCurrency(currency, name)
            }else{
              swal('Failed delete')
            }
        })
    }

    componentDidMount(){
        this.props.showCurrency()
    }

    render() {
        const { loading, error, currency, list } = this.props.currency
        if(loading){
            return (
                <div>
                    ...Loading
                </div>
            )
        }else if (error){
            return (
                <div>
                    ..error
                </div>
            )
        }else{
            return (
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <h5 className="card-title">USD - United States Dollars</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="card-title text-left">USD</h3>
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="card-title text-right">10.0000</h3>
                                </div>
                            </div>
                            <hr />

                            {
                                
                                currency.map(
                                    (rate, index) => (
                                        <ListCurrency  list={rate} key={index} remove={ this.deleteCurrency }/>    
                                    )
                                )
                            }

                            {
                                this.state.statusAddButton ?
                                <div className="form-inline">
                                    <label className="add-margin">Choose Currency</label>
                                    <select onChange={ this.inputCurrency } className="form-control width-form add-margin" name="keyword">
                                        <option>Choose...</option>
                                        {
                                            list.map(
                                                (rate,index) => (
                                                    <option key={index} value={ rate.name }>{ rate.name }</option>
                                                )
                                            )
                                        }
                                        
                                    </select>

                                    <button type="button" className="btn btn-primary add-margin" onClick={ () => this.getCurrency(this.state.keyword) } >Submit</button>
                                </div>
                                :
                                <button type="button" className="btn btn-primary add-width" onClick={ () => this.setState({ statusAddButton:true }) }>Add More Currency</button>
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currency : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showCurrency, getKeyword, addCurrency, removeCurrency }, dispatch)
}

export default connect( mapStateToProps, mapDispatchToProps )(TableCurrency);