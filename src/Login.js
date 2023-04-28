import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, MDBRow, MDBCol
}
from 'mdb-react-ui-kit';


function Forms({doLogin}) {

  const login = {
    email:'',
    password:''
  }


  const [loginState, setLoginState] = useState(login)
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [signupModal, setSignupModal] = useState(false);
  const [forgotModal, setForgotModal] = useState(false);
  const [forgotCheckModal, setForgotCheckModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  
  const signupData ={
    firstname:'',
    lastname:'',
    email:'',
    pincode:''
  }

    const [signupState, setSignupState] = useState(signupData)

    async function setInput(key, value) {
        setSignupState({ ...signupState, [key]: value })
    }

    async function setLogin(key, value) {
        setLoginState({ ...loginState, [key]: value })
    }

  const toogleForgotCheckModal = () => setForgotCheckModal(!forgotCheckModal)
  
  const toogleForgotModal = () => setForgotModal(!forgotModal)
  const toggleSignupModal = () => setSignupModal(!signupModal)
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  function signup(){
    fetch('https://212utffvc3.execute-api.us-west-2.amazonaws.com/Prod/signup', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupState)
    })
    .then(response => response.json())
    .then(response => {
      toggleSignupModal();
      setJustifyActive('tab1')
    })
  }

  function forgotPassword(){
    fetch('https://212utffvc3.execute-api.us-west-2.amazonaws.com/Prod/forgotpassword', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(forgotEmail)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if(response){
            toogleForgotModal();
            toogleForgotCheckModal();
        }
    })
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBModal tabIndex='-1' show={forgotModal} setShow={setForgotModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Forgot Password</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toogleForgotModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Incorrect Password, Please try again.
              </p>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <div className="text-center">
              <h4 className="mt-1 mb-5 pb-1">Students Grade Tracking System</h4>
            </div>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Student Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Faculty Login
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          
          <MDBInput wrapperClass='mb-4' label='User Id' id='form1' type='email' onChange={event=>{setLogin('email', event.target.value)}}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={event=>{setLogin('password', event.target.value)}}/>

          <div justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBBtn className='w-50'  onClick={()=>{doLogin(loginState)}}>Sign in</MDBBtn>
          </div>
          
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

        <MDBInput wrapperClass='mb-4' label='User Id' id='form1' type='email' onChange={event=>{setLogin('email', event.target.value)}}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={event=>{setLogin('password', event.target.value)}}/>

          <div justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBBtn className='w-50'  onClick={()=>{doLogin(loginState)}}>Sign in</MDBBtn>
          </div>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Forms;