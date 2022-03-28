import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes/app.routes";
import "./App.scss";

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
