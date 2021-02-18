import '../UserRegistrationStyle.css';
import React from 'react'

const UserRegistrationComponent = () => {
    return (
        <div className="container-fluid bg-image">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form className="form-container">
                    <div class="container px-2">
                        <div class="row">
                        <div class="col">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Middle Name</label>
                                    <input type="text" className="form-control" placeholder="Middle Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Address"/>
                                </div>
                            </div>
                            <div class="col">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="form-group">
                                    <label>Contact No.</label>
                                    <input type="text" className="form-control" placeholder="Contact No."/>
                                </div>    
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                        <button type="submit" className="btn btn-success btn-block">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRegistrationComponent
