import React, { useEffect, useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBTypography,
  MDBBtn
} from 'mdb-react-ui-kit';
import Profile from './Profile';
import Schedule from './components/Schedule';
import Grades from './components/Grades';

export default function StudentPage({doLogout}) {
  const [verticalActive, setVerticalActive] = useState('tab1');
  const [name, setName] = useState(" ")

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  const initialResult = {
    "cloudarch": "",
    "cpp": "",
    "blockchain": "",
    "sem": "",
    "major": "",
    "id": "",
    "name": "",
    "devops": "",
    "type": "",
    "cppGrade": "",
    "dograde": "",
    "cagrade": "",
    "bcgrade": ""
}

    const [results, setResults] = useState(initialResult)

  function getResults(){
    fetch('https://hiavqlukke.execute-api.eu-west-1.amazonaws.com/Production/results', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify()
    })
    .then(response => response.json())
    .then(response => {
      setResults(response);
      console.log(response)
    })
  }



  useEffect(()=>{
    getResults();
  },[])

  function getSchedule(){
    fetch('https://9xipxb2jui.execute-api.eu-west-3.amazonaws.com/Prod/index', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        endpoint: "getAll"
      }
    )
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  }

  return (
      <MDBContainer className="mt-5">
        <header>
        <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Hello {results.name}!</h1>
        <h4 className='mb-3'>Here you can find all the information regarding your grades and schedule.</h4>
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
                <Grades grades={results}/>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>
                <Schedule/>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>
                <Profile doLogout={doLogout} name={results.name}/>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}