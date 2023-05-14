import { BASE_URL } from "@/utils/baseUrl";
import axios from "axios";
import { saveToStorage } from "@/utils/localStorage/saveToStorage";

const loginUser = async ({ email, password }, handleShow, handleFail) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    saveToStorage("profile", response.data);
    handleShow();

    return response;
  } catch (error) {
    const message = error?.response?.data?.errors?.[0]?.message;
    // Sending error message
    handleFail(message);
  }
};

export default loginUser;
