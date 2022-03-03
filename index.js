const Notification = (props) => {
  const { icon, content, className } = props;
  return (
    <div className={`notification-box ${className}`}>
      <img className="icon" src={icon} />
      <p className="content-message">{content}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        content="Information Message"
        className="information"
      />

      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        content="Success Message"
        className="success"
      />

      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        content="Warning Message"
        className="warning"
      />

      <Notification
        icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        content="Error Message"
        className="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
