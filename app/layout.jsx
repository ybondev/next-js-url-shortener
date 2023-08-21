import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "URL Shortener",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default layout;
