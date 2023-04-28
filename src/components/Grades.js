import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane, MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

export default function Grades() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  const results =[]

  return (
    <>
      <MDBTabs pills fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Sem - 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Sem - 2
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
             Sem - 3
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
            {
                results.length === 0 ? <>
                     <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Course</th>
          <th scope='col'>Percentage</th>
          <th scope='col'>Grade</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr className='table-success'>
          <th >Cloud Architecture</th>
          <td>50%</td>
          <td>C</td>
        </tr>
        <tr className='table-success'>
          <th >Block Chain</th>
          <td>55%</td>
          <td>B+</td>
        </tr>
        <tr className='table-success'>
          <th >CPP</th>
          <td>70%</td>
          <td>B</td>
        </tr>
        <tr className='table-success'>
          <th >DevOps</th>
          <td>60%</td>
          <td>B-</td>
        </tr>
        </MDBTableBody>
        </MDBTable>
                </> : <>Results Not available</> 
            }
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>Results Not Available</MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>Results Not Available</MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}