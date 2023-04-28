import React, { useState } from "react";
import { MDBContainer,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
 } from "mdb-react-ui-kit";

export default function Schedule() {

    const [course, setCourse] = useState('Select Course');

  return (
    <MDBContainer>
    <MDBDropdown>
                <MDBDropdownToggle color='secondary'>{course}</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={(e)=> setCourse('Dev Ops')}>Dev Ops</MDBDropdownItem>
                    <MDBDropdownItem link onClick={(e)=> setCourse('CPP')}>CPP</MDBDropdownItem>
                </MDBDropdownMenu>
    </MDBDropdown>
    <br/>
      <ul className="timeline">
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">11 March 2023 - 9:00 to 11:00</p>
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">18 March 2023 - 9:00 to 11:00</p>
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">25 March 2023 - 9:00 to 11:00</p>
        </li>
        <li className="timeline-item mb-5">
          <p className="text-muted mb-2 fw-bold">02 April 2023 - 9:00 to 11:00</p>
        </li>
      </ul>
    </MDBContainer>
  );
}