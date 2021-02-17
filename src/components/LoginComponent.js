import '../LoginStyle.css'
import React from 'react'

const LoginComponent = () => {
    return (
        <div className="container-fluid bg-image">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12"></div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <form className="form-container">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label>
                            <input type="checkbox"/>Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
