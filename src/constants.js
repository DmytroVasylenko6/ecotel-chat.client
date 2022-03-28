export const USER_KEY = "chat_app_user";
export const SERVER_URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : process.env.NODE_ENV === "production"
    ? "https://vasel-chatik.herokuapp.com"
    : "";
