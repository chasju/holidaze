import { BASE_URL } from "@/utils/baseUrl";
import axios from "axios";
import { saveToStorage } from "@/utils/localStorage/saveToStorage";

const loginUser = async ({ email, password }) => {
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

    console.log("Route to profile page here");
    saveToStorage("profile", response.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
