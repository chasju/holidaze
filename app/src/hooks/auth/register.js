import { BASE_URL } from "@/utils/baseUrl";
import axios from "axios";

const registerUser = async ({ fullName, email, password, avatar }, handleShow, handleFail) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      {
        name: fullName,
        email: email,
        password: password,
        avatar: avatar,
        venueManager: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Opening register success modal
    handleShow();

    return response;
  } catch (error) {
    const message = error?.response?.data?.errors?.[0]?.message;
    // Sending error message
    handleFail(message);
  }
};

export default registerUser;
