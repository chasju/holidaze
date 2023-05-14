import { BASE_URL } from "@/utils/baseUrl";
import axios from "axios";

const registerData = async ({ fullName, email, password, avatar }) => {
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

    console.log("Insert success message here");

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default registerData;
