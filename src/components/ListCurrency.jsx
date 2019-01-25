import React, { Component } from 'react';

class ListCurrency extends Component {
    render() {
        const { list, remove } = this.props
        return (
            <div className="row margin-on">
                <div className="col-sm-11 no-padding">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="card-title text-left">{ list.name }</h3>
                                </div>
                                <div className="col-sm-6">
                                    <h3 className="card-title text-right">{ list.value*10.0000 }</h3>
                                </div>
                            </div>
                            <h6 className="card-title">{ list.name }</h6>
                            <h6 className="card-title">1 USD = { list.name } { list.value }</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1 no-padding button-delete" onClick={ () => remove(list.name) }>
                    Remove
                </div>
            </div>
        );
    }
}

export default ListCurrency;