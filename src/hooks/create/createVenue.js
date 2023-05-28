import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import axios from "axios";

const createVenue = async ({ title, description, price, maxGuests, images, meta, country }, handleShow, handleFail) => {
  try {
    const storageProfile = getStorage("profile");
    const accessToken = storageProfile.accessToken;

    const response = await axios.post(
      `${BASE_URL}/venues`,
      {
        name: title,
        description: description,
        price: price,
        maxGuests: maxGuests,
        media: images,
        rating: 0,
        meta: meta,
        location: { country: country },
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

    return response;
  } catch (error) {
    const message = `${error?.message}. If the problem persists please contact us.`;
    // Sending error message
    handleFail(message);
  }
};

export default createVenue;
