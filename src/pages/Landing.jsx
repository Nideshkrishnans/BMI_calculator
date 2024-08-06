import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    <>
    <div className="row w-100">
      <div className="col-md-4"></div>

      <div className="col-md-4 mt-5" >

        <h4 className='text-center text-light fs-3 fw-bold'>BODY MASS INDEX</h4>
        <p className='text-center text-light fs-5 fw-bold'>calculator</p>

        <div className='card '></div>

        <div className="row">

          <div className="col-md-6 d-flex justify-content-center" >
            <div className='card border border-light mt-5 d-flex align-items-center' style={{width:'200px', height:'300px',backgroundImage:"url('https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwbWFufGVufDB8fDB8fHww')",backgroundSize:'cover',backgroundPosition:'center'}}>
              <Link to={'/male'}><button className='btn border border-light px-4 text-light fw-bold mx-4 mt-2'><FontAwesomeIcon icon={faMars} />Male</button></Link>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center" >
            <div className='card mt-5 mb-5 d-flex align-items-center border border-light' style={{width:'200px', height:'300px',backgroundImage:"url('https://i0.wp.com/pixahive.com/wp-content/uploads/2020/08/Female-gym-trainer-25362-pixahive.jpg?fit=1890%2C2560&ssl=1')",backgroundSize:'cover'}}>

              
              <Link to={'/female'}><button className='btn mt-2 border px-4 border-light fw-bold text-light mx-4'><FontAwesomeIcon icon={faVenus} />Female</button></Link>
            </div>
          </div>


        </div>
      </div>

      <div className="col-md-4"></div>
    </div>
    </>
  )
}

export default Landing