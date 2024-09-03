/* eslint-disable react/prop-types */
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Card.css";

export default function Card({ source, Title }) {
  return (
    <MDBCard className="card">
      <MDBCardImage
        src={source}
        position="top"
        alt="image"
        className="w-100 card-image "
      />
      <MDBCardBody>
        <MDBCardTitle>
          <span>{Title}</span>
        </MDBCardTitle>
        <MDBBtn href="#">Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
