import axios from "axios";
const { SERVER_URI } = require("constants");

const upload = async ({ file, roomId }) => {
  try {
    const body = new FormData();
    body.append("file", file);

    const response = await axios.post(`${SERVER_URI}/upload`, body, {
      headers: {
        "x-room-id": roomId,
      },
    });

    if (!response.ok) throw response;

    const pathToFile = response.data;
    console.log(pathToFile);
    return pathToFile;
  } catch (e) {
    throw e;
  }
};

const fileApi = { upload };

export default fileApi;
