import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <h5 className='text-center'>Team Members</h5>
      <br></br>

      <div class="text-center">
        <img src="https://mdbootstrap.com/img/logo/mdb192x192.webp" class="img-fluid" alt="" />
        <p>Hari Kumar Giri Sir</p>
      </div>
      <br></br>

      <MDBRow className='align-items-center d-flex flex-row'>

        <MDBCol lg='2' md='7' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
        <MDBCol lg='2' md='6' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
        <MDBCol lg='2' md='6' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
        <MDBCol lg='2' md='6' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
        
        <MDBCol lg='2' md='6' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
        <MDBCol lg='2' md='6' className='mb-4'>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp"
            class="img-fluid rounded"
            alt="Townhouses and Skyscrapers"
          />
          <p className='text-center'>Member 1</p>
        </MDBCol>
      </MDBRow>
    </>
  );
}