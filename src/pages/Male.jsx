import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import male from '../assets/male.jpg.webp'

function Male() {
  const [user, setUser] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [isHeight,setIsHeight]=useState(true)
  const [isWeight,setIsWeight]=useState(true)
  const [isUser, setIsUser]=useState(true)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const validate = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*$/));

    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'user') {
        setUser(value)
        setIsUser(true)
      }
      else if (name == 'height') {
        setHeight(value)
        setIsHeight(true)
      }
      else {
        setWeight(value)
        setIsWeight(true)
      }
    }
    else {
      if (name == 'user') {
        setIsUser(false)
        setUser(value)
      }
      else if (name == 'height') {
        setIsHeight(false)
        setHeight(value)
      }
      else {
        setIsWeight(false)
        setWeight(value)
      }
    }
  }

  const handleCalculate = (e) => {

    if (user == "" || height == "" || weight == "") {
      alert('please fill the form completly')
    }
    else {
      setBmi((weight / ((height * height) / 10000)).toFixed(1))
      handleShow(true)
    }
    console.log(bmi);
  }

  const handleReset = () => {
    setUser()
    setHeight(0)
    setWeight(0)
    setIsUser(true)
    setIsHeight(true)
    setIsWeight(true)
  }


  return (
    <div style={{height:"100vh"}}>
      <div className='row mt-3 w-100'>
        <div className='col-2 col-md-4'></div>
        <div className='col-9 col-md-4   mt-5 card d-flex align-items-center justify-content-center'>

          <h2 className='p-4'>Calculte Your <span className='text-danger'>BMI</span></h2>

          <div>
            <TextField id="standard-basic" label="name" variant="standard" className='w-100 form-control' onChange={(e) => validate(e)} name='user' value={user||""}/>

          </div>

          <div>
            <TextField id="standard-basic" label="Height" variant="standard" className='w-100 mt-2' onChange={(e) => validate(e)} name='height' value={height|| ""}  />
            {!isHeight && <p className='text-danger' style={{fontSize:'10px'}}>*Invalid Input</p>}

          </div>

          <div>
            <TextField id="standard-basic" label="Weight" variant="standard" className='w-100 mt-2' onChange={(e) => validate(e)} name='weight' value={weight || ""}/>
            {!isWeight && <p className='text-danger' style={{fontSize:'10px'}}>*Invalid Input</p>}

          </div>

          <div className='d-flex justify-content-between'>
            <Button className='m-4 text-danger' type='submit' variant="outlined" onClick={handleCalculate} disabled={isHeight && isWeight? false:true}>CALCULATE</Button>


            <Button className='m-4 text-danger text-2x' variant="outlined" onClick={handleReset}>RESET</Button>
          </div>




        </div>
        <div className='col-md-4'></div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>HI <span className='text-danger'>{user}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>Your BMI:<span style={{ fontSize: "25px" }}> {bmi}</span>
          <div className='row'>
            <div className="col-md-6">
              {bmi < 18.5 ?
                (<>
                  <h6 className='text-danger fw-bold'> Underweight (BMI Below 18.5) </h6>

                  <p style={{ textAlign: 'justify' }}>Being underweight can indicate malnutrition, eating disorders, or other health conditions. It may lead to weakened immune system, osteoporosis, and fertility issues.</p>
                  <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Consult a healthcare provider to determine the underlying causes. Nutritional counseling and a balanced diet may be advised to gain weight healthily.</p>
                  <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                </>)
                :
                (18.5 <= bmi && bmi <= 24.9) ?
                  (<>
                    <h6 className='text-danger fw-bold'> Normal Weight (BMI 18.5 – 24.9)</h6>

                    <p style={{ textAlign: 'justify' }}>This range is considered healthy. Individuals in this category generally have a lower risk of weight-related health problems, such as heart disease, diabetes, and hypertension.</p>
                    <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Maintain a balanced diet, regular physical activity, and healthy lifestyle choices to sustain this weight range.</p>
                    <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                  </>)
                  : (25 <= bmi && bmi <= 29.9) ?
                    (<>
                      <h6 className='text-danger fw-bold'> Overweight (BMI 25.0 – 29.9)</h6>

                      <p style={{ textAlign: 'justify' }}>Being overweight increases the risk of cardiovascular diseases, type 2 diabetes, and high blood pressure. It's often recommended to engage in regular physical activity and adopt a balanced diet to manage weight.</p>
                      <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Adopt a healthier diet, increase physical activity, and monitor weight to prevent further weight gain and reduce the risk of associated health issues.</p>
                      <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                    </>)
                    : (30 <= bmi && bmi <= 34.9) ?
                      (<>
                        <h6 className='text-danger fw-bold'> Obesity Class I (BMI 30.0 – 34.9)</h6>

                        <p style={{ textAlign: 'justify' }}>This range is associated with a higher risk of serious health conditions, including heart disease, diabetes, and certain cancers. Medical guidance is often recommended to help manage and reduce weight.</p>

                        <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Seek guidance from healthcare professionals for a comprehensive weight management plan, which may include dietary changes, increased physical activity, and possibly medical or surgical interventions.</p>
                        <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                      </>)
                      : (35 <= bmi && bmi <= 39.9) ?
                        (<>
                          <h6 className='text-danger fw-bold'>Obesity Class II (BMI 35.0 – 39.9) </h6>

                          <p style={{ textAlign: 'justify' }}>This classification represents a significant risk for severe health complications, such as sleep apnea, osteoarthritis, and increased risk of mortality. </p>
                          <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Intensive lifestyle interventions, possibly including structured weight-loss programs, medical treatments, or bariatric surgery, under professional supervision.</p>
                          <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                        </>)
                        : (bmi >= 40) ?
                          (<>
                            <h6 className='text-danger fw-bold'> Obesity Class III (BMI 40.0 and Above) </h6>

                            <p style={{ textAlign: 'justify' }}>Also known as morbid or extreme obesity, this classification carries the highest risk of developing life-threatening health issues. </p>
                            <p style={{ textAlign: 'justify' }}><span className='fw-bold'>Recommendations:</span> Immediate medical intervention is often necessary. Comprehensive treatment plans may involve multidisciplinary approaches, including dietitians, physicians, physical therapists, and potentially surgical options like bariatric surgery.</p>
                            <a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations ">know more</a>
                          </>)
                          : <><h1>Please retry</h1><h4 className='text-danger'>check your inputs</h4></>



              }

            </div>

            <div className='col-md-6'>
              <img src={male} alt="" width="100%" />
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Male