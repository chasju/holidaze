import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import axios from "axios";

const deleteVenue = async (id, handleShow, handleFail) => {
  try {
    const storageProfile = getStorage("profile");
    const accessToken = storageProfile.accessToken;

    const response = await axios.delete(`${BASE_URL}/venues/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Opening register success modal
    // handleShow();

    return response;
  } catch (error) {
    const message = `${error?.message}. If the problem persists please contact us.`;
    // Sending error message
    // handleFail(message);
  }
};

export default deleteVenue;
