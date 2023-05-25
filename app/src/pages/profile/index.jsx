import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import ProfileCard from "@/components/profileCard/ProfileCard";
import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import useGetAuth from "@/hooks/useGetAuth";
import { useState } from "react";
import MyBookingsCard from "@/components/myBookingsCard/MybookingsCard";
import Link from "next/link";

export default function profilePage() {
  const profile = getStorage("profile");

  const { data, isLoading, isError } = useGetAuth(`${BASE_URL}/profiles/${profile?.name}?_bookings=true&_venues=true`);

  const venues = data?.venues;
  const bookings = data?.bookings;

  const [active, setActive] = useState("venues");

  const handleChange = (button) => {
    setActive(button);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-primary">Profile</h1>
      <div className="mt-4 d-flex align-items-center gap-3">
        <div className="position-relative" style={{ width: 80 }}>
          <img src={data?.avatar} alt="avatar" className="rounded-circle shadow" style={{ width: 70, height: 70, objectFit: "cover" }} />
          <Link href={`/profile/edit?name=${data?.name}`}>
            <FontAwesomeIcon icon={faPen} className="position-absolute end-0 bottom-0 text-primary" />
          </Link>
        </div>
        <p className="mb-0 text-primary fw-semibold fs-4">Hello {data?.name}</p>
      </div>
      <div className="w-100 mt-4 d-flex gap-3 overflow-hidden overflow-scroll">
        <Button variant="secondary" active={active === "venues" ? true : false} onClick={() => handleChange("venues")} style={{ width: 150 }} className="flex-shrink-0">
          My Venues
        </Button>
        <Button variant="secondary" active={active === "bookings" ? true : false} onClick={() => handleChange("bookings")} style={{ width: 150 }} className="flex-shrink-0">
          My Bookings
        </Button>
        <Button variant="secondary" active={active === "info" ? true : false} onClick={() => handleChange("info")} style={{ width: 150 }} className="flex-shrink-0">
          My Info
        </Button>
      </div>
      {active === "venues" &&
        venues?.map((venue) => {
          return <ProfileCard key={venue?.id} data={venue} />;
        })}
      {active === "bookings" &&
        bookings?.map((booking) => {
          return <MyBookingsCard key={booking?.id} data={booking?.venue} dateFrom={booking?.dateFrom} dateTo={booking?.dateTo} />;
        })}
      {active === "info" && (
        <Container className="bg-lighter border-1 p-4 mt-4 rounded-1">
          <div>email: {profile.email}</div>
        </Container>
      )}
    </Container>
  );
}
