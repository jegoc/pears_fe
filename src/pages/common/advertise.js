import React from 'react';
import a1 from '../../images/3.jpg';

const Advertise = () =>{
        return (
            <> 
              <div className="my-3 p-1 bg-white rounded shadow-sm">
                <div className="media text-muted ">
                  <div className="media-body mb-0 small ">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <a href="#">
                        <img
                        className="d-block w-100"
                        src={a1}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>    

              <div className="my-3 p-1 bg-white rounded shadow-sm">
                <div className="media text-muted ">
                  <div className="media-body mb-0 small ">
                    <div className="d-flex justify-content-between align-items-center w-100">
                    <img
                        className="d-block w-100"
                        src={a1}
                        />
                    </div>
                  </div>
                </div>
              </div>          
            </>
        );
    }
    
export default Advertise;
