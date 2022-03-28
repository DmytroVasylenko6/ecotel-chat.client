import { SERVER_URI, USER_KEY } from "constants";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import storage from "utils/storage";

export default function useChat() {
  const user = storage.get(USER_KEY);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [log, setLog] = useState(null);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(SERVER_URI, {
      query: {
        roomId: user.roomId,
        userName: user.userName,
      },
    });

    setSocket(newSocket);

    newSocket.emit("user:add", user);

    newSocket.emit("message:get");

    newSocket.on("log", (log) => {
      setLog(log);
    });

    newSocket.on("user_list:update", (users) => {
      setUsers(users);
    });

    newSocket.on("message_list:update", (messages) => {
      setMessages(messages);
    });

    return () => newSocket.close();
    // eslint-disable-next-line
  }, []);

  const sendMessage = (message) => {
    socket.emit("message:add", message);
  };

  const removeMessage = (message) => {
    socket.emit("message:remove", message);
  };

  return { users, messages, log, sendMessage, removeMessage };
}
