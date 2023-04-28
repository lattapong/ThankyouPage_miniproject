import React, { useState, useEffect } from "react";
import "./thankyouPage.css";

function App() {
  const [downloading, setDownloading] = useState(true);
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (downloading) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      if (count <= 0) {
        setDownloading(false);
        window.location.href = "";
      }

      return () => clearTimeout(timer);
    }
  }, [downloading, count]);

  return (
    <div>
      <div className="downloadingStyles">
        <div className="thankyoufame">
        <h1>ขอบคุณที่ใช้บริการ</h1>
        <h3>จะไปยังหน้าถัดไปใน {count} วินาที</h3>
        <div className="spinnerStyles" />
        </div>
      </div>
    </div>
  );
}

export default App;
