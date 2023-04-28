import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Profile({doLogout, isFac, name}) {
  return (
    
      <MDBContainer>
        <div>
        <MDBRow className="justify-content-start">
          <MDBCol md="9" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  {
                    !isFac ?
                  
                  <div className="flex-grow-1 ms-4">
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>Graduate Student</MDBCardText>

                    <div className="d-flex justify-content-center rounded-3 p-4 mb-6"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Major</p>
                        <p className="mb-0">Cloud Computing</p>
                      </div>
                      <div className="px-1">
                        <p className="small text-muted mb-1">Semester</p>
                        <p className="mb-0">1</p>
                      </div>
                    </div>
                    <div>
                      <MDBBtn rounded className="flex-grow-1" onClick={doLogout}>Sign Out</MDBBtn>
                    </div>
                  </div> :
                  <div className="flex-grow-1 ms-4">
                  <MDBCardTitle>Administrator</MDBCardTitle>
                  <MDBCardText>National College of Ireland</MDBCardText>

                  
                  <div>
                    <MDBBtn rounded className="flex-grow-1" onClick={doLogout}>Sign Out</MDBBtn>
                  </div>
                </div> 
}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </div>
      </MDBContainer>
  );
}