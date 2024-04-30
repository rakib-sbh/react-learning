import React, { memo } from "react";

const Message = () => {
  console.log("Message rendering");
  return <div>Message</div>;
};

export default memo(Message);
