import deleteVenue from "@/hooks/delete/deleteVenue";
import { faPen, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Ratio } from "react-bootstrap";

const ProfileCard = ({ data, onDelete }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    await deleteVenue(data?.id);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Card className="mx-auto border-0 shadow col-md-4  p-0 flex-grow-1" style={{ maxWidth: 550 }}>
      <div className="position-relative">
        <Ratio aspectRatio="4x3">
          <Card.Img variant="top" src={data?.media?.[0]} alt={data?.name} style={{ objectFit: "cover" }} />
        </Ratio>
        <Link href={`/venue/update?id=${data?.id}`} className="text-decoration-none">
          <Card.Text aria-label="edit" className="position-absolute d-flex justify-content-center align-items-center bg-white rounded-circle" style={{ width: 35, height: 35, top: 25, right: 25 }}>
            <FontAwesomeIcon icon={faPen} />
          </Card.Text>
        </Link>
      </div>
      <Card.Body className="d-flex justify-content-between">
        <div>
          <Link href={`/venue?id=${data?.id}`} className="text-decoration-none">
            <Card.Title>
              <h2 className="fs-4 text-primary">{data?.name}</h2>
            </Card.Title>
          </Link>
          <Card.Text aria-label="Price per night" className="text-secondary">
            {data?.price} kr per night
          </Card.Text>
        </div>
        <div>
          <Card.Text aria-label="Max number of people" className="ms-auto position-relative d-flex justify-content-center align-items-center" style={{ width: 35, height: 35 }}>
            <FontAwesomeIcon icon={faUser} />
            <span className="position-absolute top-0 start-0">{data?.maxGuests}</span>
          </Card.Text>
          <div aria-label="delete" onClick={handleClick} className="d-flex justify-content-center align-items-center position-relative" style={{ zIndex: 10 }}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
