import React from "react";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
