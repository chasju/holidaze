import { BASE_URL } from "@/utils/baseUrl";
import { getStorage } from "@/utils/localStorage/getLocalStorage";
import { saveToStorage } from "@/utils/localStorage/saveToStorage";
import axios from "axios";

const createVenue = async (previewImage, name, handleShow, handleFail) => {
  try {
    const storageProfile = getStorage("profile");
    const accessToken = storageProfile.accessToken;

    const response = await axios.put(
      `${BASE_URL}/profiles/${name}/media`,
      {
        avatar: previewImage,
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

    // Update localStorage

    storageProfile.avatar = previewImage;
    saveToStorage("profile", storageProfile);

    console.log(response.data);

    return response;
  } catch (error) {
    const message = `${error?.message}. If the problem persists please contact us.`;
    // Sending error message
    handleFail(message);
  }
};

export default createVenue;
