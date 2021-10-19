import "./Message.css";

const Message = ({ message, action }) => {
  return (
    <div className="message">
      {message}
      <span>{action}</span>
    </div>
  );
};

export default Message;
