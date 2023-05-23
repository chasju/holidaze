import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import axios from "axios";

const createBooking = async (guests, dateFrom, dateTo, id, handleShow) => {
  try {
    const storageProfile = getStorage("profile");
    const accessToken = storageProfile.accessToken;

    const response = await axios.post(
      `${BASE_URL}/bookings`,
      {
        dateFrom: dateFrom,
        dateTo: dateTo,
        guests: guests,
        venueId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Opening register success modal
    handleShow();

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    const message = `${error?.message}. If the problem persists please contact us.`;
    console.log(message);
    // Sending error message
    // handleFail(message);
  }
};

export default createBooking;
