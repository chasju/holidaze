import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import axios from "axios";

const updateVenue = async ({ media, name, description, meta, price, maxGuests, location }, handleShow, handleFail, id) => {
  try {
    const storageProfile = getStorage("profile");
    const accessToken = storageProfile.accessToken;

    const response = await axios.put(
      `${BASE_URL}/venues/${id}`,
      {
        name: name,
        description: description,
        price: price,
        maxGuests: maxGuests,
        media: media,
        meta: meta,
        location: { country: location?.label },
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

    console.log(response.data);

    return response;
  } catch (error) {
    const message = `${error?.message}. If the problem persists please contact us.`;
    // Sending error message
    handleFail(message);
  }
};

export default updateVenue;
