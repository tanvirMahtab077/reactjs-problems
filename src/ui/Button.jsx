import React from "react";
export default function Button({ className, btnContent }) {
  return (
    <div>
      <button className={className} type="button">
        {btnContent}
      </button>
    </div>
  );
}
