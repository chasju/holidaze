import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";
import ProfileCard from "@/components/profileCard/ProfileCard";
import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import useGetAuth from "@/hooks/useGetAuth";
import { useEffect, useState } from "react";
import MyBookingsCard from "@/components/myBookingsCard/MybookingsCard";
import Link from "next/link";
import NotLoggedIn from "@/components/notLoggedIn/NotLoggedIn";

export default function profilePage() {
  const storageProfile = getStorage("profile");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  useEffect(() => {
    if (storageProfile) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [storageProfile]);

  const { data, isLoading, isError, reFetch } = useGetAuth(`${BASE_URL}/profiles/${storageProfile?.name}?_bookings=true&_venues=true`);

  const [getData, setGetData] = useState([]);

  useEffect(() => {
    if (data) {
      setGetData(data);
    }
  }, [data]);

  const venues = getData?.venues;
  const bookings = getData?.bookings;

  const [active, setActive] = useState("venues");

  const handleChange = (button) => {
    setActive(button);
  };

  const onDelete = () => {
    reFetch();
    setGetData(data);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 700 }}>
      {isLoggedIn && (
        <>
          <h1 className="text-primary">Profile</h1>
          <div className="mt-4 d-flex align-items-center gap-3">
            <div className="position-relative" style={{ width: 80 }}>
              <img src={data?.avatar} alt="avatar" className="rounded-circle shadow" style={{ width: 70, height: 70, objectFit: "cover" }} />
              <Link href={`/profile/edit?name=${getData?.name}`}>
                <FontAwesomeIcon icon={faPen} className="position-absolute end-0 bottom-0 text-primary" />
              </Link>
            </div>
            <p className="mb-0 text-primary fw-semibold fs-4">Hello {getData?.name}</p>
          </div>
          <div className="w-100 mt-4 d-flex gap-3 overflow-hidden overflow-scroll">
            <Button variant="secondary" active={active === "venues" ? true : false} onClick={() => handleChange("venues")} style={{ width: 150 }} className="flex-shrink-0">
              My Venues
            </Button>
            <Button variant="secondary" active={active === "myBookings" ? true : false} onClick={() => handleChange("myBookings")} style={{ width: 150 }} className="flex-shrink-0">
              My Bookings
            </Button>
            <Button variant="secondary" active={active === "info" ? true : false} onClick={() => handleChange("info")} style={{ width: 150 }} className="flex-shrink-0">
              My Info
            </Button>
          </div>
          <div className="mt-5 row row-lg-cols-2 gap-5 justify-content-between">
            {active === "venues" &&
              venues?.map((venue) => {
                return <ProfileCard key={venue?.id} venue={venue} onDelete={onDelete} />;
              })}
            {active === "myBookings" &&
              bookings?.map((booking) => {
                return <MyBookingsCard key={booking?.id} data={booking?.venue} dateFrom={booking?.dateFrom} dateTo={booking?.dateTo} />;
              })}
            {active === "info" && (
              <Container className="bg-lighter border-1 p-4 mt-4 rounded-1">
                <div>email: {storageProfile.email}</div>
              </Container>
            )}
          </div>
        </>
      )}
      {!isLoggedIn && <NotLoggedIn />}
    </Container>
  );
}
