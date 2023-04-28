import React, { useState } from 'react';
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

export default function StudentPage() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
      <MDBContainer className="mt-5">
        <header>
        <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Hello Nishanth!</h1>
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
                <Grades/>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>
                <Schedule/>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>
                <Profile/>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
  );
}