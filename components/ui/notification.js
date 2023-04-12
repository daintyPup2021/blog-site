import ReactDOM from "react-dom";
import { notification, success, error } from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  const statusClasses = status === "success" ? success : error;

  const cssClasses = `${notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
