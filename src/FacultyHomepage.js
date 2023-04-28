import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBInput, MDBBtn
} from 'mdb-react-ui-kit';
import Forms from './Login';
import Profile from './Profile';

export default function FacultyPage({doLogout}) {

  const [course, setCourse] = useState('Select Course');
  const [sub, setSub] = useState(null)
  const [per, setPer] = useState(0)
  const [verticalActive, setVerticalActive] = useState('tab1');
  const [schedule, setSchedule] = useState('Select schedule')
  const [student, setStudent] = useState({
    name:'Select Student'
})
const fac = true;
  const initialStudents = [
    {
        'id':'000',
        'name':'Nishanth Gone'
    }
  ]
  const [students, setStudents] = useState(initialStudents) 

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  function updateResult(){
    fetch('https://hiavqlukke.execute-api.eu-west-1.amazonaws.com/Production/updateresults', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "course": sub,
        "per" : per
    })
    })
    .then(response => response.json())
    .then(response => {
      alert(response)
    })
   }
  
  return (
      <MDBContainer className="mt-5">
        <header>
        <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Admin Console</h1>
        <h4 className='mb-3'>Admins can use this to change time table and to update results</h4>
      </div>
        </header>
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Grades
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                Schedule
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Profile
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>
            <h6 className='mb-3'>Select Course and then select student to upgrade their grades</h6>
            <MDBDropdown>
                <MDBDropdownToggle>{course}</MDBDropdownToggle>
                <MDBDropdownMenu >
                    <MDBDropdownItem link onClick={(e)=> {setCourse('Dev Ops'); setSub('devops')}}>Dev Ops</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> {setCourse('CPP'); setSub('cpp')}}>CPP</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> {setCourse('Block Chain'); setSub('blockchain')}}>BlockChain</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> {setCourse('Cloud Architecture'); setSub('cloudarch')}}>Cloud Architecture</MDBDropdownItem>
                
                </MDBDropdownMenu>
    </MDBDropdown>
    <br/>
    <MDBDropdown>
                <MDBDropdownToggle>{student.name}</MDBDropdownToggle>
                <MDBDropdownMenu >
                {
                    initialStudents.map(stu =>
                        <MDBDropdownItem link onClick={(e)=> setStudent(stu)}>{stu.name}</MDBDropdownItem>
                    )
                }
                </MDBDropdownMenu>
    </MDBDropdown>
    <br/>
    <div className="d-flex justify-content-center">
    <div>
    <MDBInput onChange={(e)=> setPer(e.target.value)}  label='Percentage' id='form1' type='text' />
    <br/>
    <MDBBtn rounded className='me-1' color='secondary' onClick={updateResult}>
        Update
      </MDBBtn>
    </div>
    </div>
    
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>
            <MDBDropdown>
                <MDBDropdownToggle>{schedule}</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={(e)=> setSchedule('Dev Ops')}>Dev Ops</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> setSchedule('CPP')}>CPP</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> setSchedule('Block Chain')}>BlockChain</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> setSchedule('Cloud Architecture')}>Cloud Architecture</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            <br/>
            <ul className="timeline">
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">11 March 2020 - 9:00 to 11:00 <MDBBtn className="btn-close" color="none" aria-label="Close" /></p> 
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">11 March 2020 - 9:00 to 11:00 <MDBBtn className="btn-close" color="none" aria-label="Close" /></p>
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">11 March 2020 - 9:00 to 11:00 <MDBBtn className="btn-close" color="none" aria-label="Close" /></p>
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">11 March 2020 - 9:00 to 11:00 <MDBBtn className="btn-close" color="none" aria-label="Close" /></p>
        </li>
      </ul>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>
                <Profile doLogout={doLogout} isFac={fac}/>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}