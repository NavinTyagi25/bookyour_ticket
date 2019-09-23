import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import './../containers/bookyourticket.css';

const options = [
    { value: 'London', label: 'London' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'France', label: 'France' },
];





class BookYourTicket extends React.Component {
    let  
    constructor(props) {
        super(props);
        this.state = {
            signUp: true,
            startDate: new Date(),
            fromlocation: null,
            tolocation: null,
            apiresponse: this.props.fligts
        };
    }


    handleDateWise = date => {
        this.setState({
            startDate: date
        });
    };

    handleFromLocation = fromlocation => {
        const fromApiresponse = this.props.fligts.filter(function(item) {
            return item.from  == fromlocation.value;
        })
        this.setState({ fromlocation, 
            apiresponse : fromApiresponse});
       
        
            this.setState({  
                apiresponse : fromApiresponse});    
    };

    handleToLocation = tolocation => {
        const toApiresponse = this.props.fligts.filter(function(item) {
            return item.to  == tolocation.value;
        })
        this.setState({ tolocation ,
            apiresponse: toApiresponse
        });
  
    };


    render() {
       
        let apiResponse = this.state.apiresponse ? this.state.apiresponse :this.props.fligts;

        
        return (

            <div className="container">
                <h2>Flights Details</h2>
                    <div className="form-inline" >
                        <div className="from-group">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateWise}
                            />
                        </div>
                        <div className="form-group from-select-box">
                            <Select
                                value={this.state.fromlocation}
                                onChange={this.handleFromLocation}
                                options={options}
                            />
                        </div>
                        <div className="form-group from-select-box">
                            <Select
                                value={this.state.tolocation}
                                onChange={this.handleToLocation}
                                options={options}
                            />
                        </div>

                        
                    </div>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" > Flight Number</th>
                            <th scope="col" >Flight Name</th>
                            <th scope="col" >Email</th>
                            <th scope="col" >Departure</th>
                            <th scope="col">Arrival time</th>
                            <th scope="col">Total duration</th>
                            <th scope="col">Price</th>
                            <th scope="col">Seat availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiResponse && apiResponse.map((item, key) => {
                                return <tr key={key}>
                                     <td>{item.fNumner}</td>
                                     <td>{item.fName}</td>
                                     <td>{item.email}</td>
                                     <td>{item.departure}</td>
                                     <td>{item.arrival}</td>
                                     <td>{item.price}</td>
                                     <td>{item.seatAvaible}</td>
                                 </tr>
                             })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default BookYourTicket;

