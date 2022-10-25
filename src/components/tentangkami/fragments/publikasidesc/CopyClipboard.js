import React, { useState } from "react";
import styles from "./CopyClipboard.module.css";
import { FiCheck } from "react-icons/fi";

function CopyClipboard(copyText) {
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipBoard(text) {
    if ("clipboard" in navigator) {
      console.log("ini toni");

      return await navigator.clipboard.writeText(text.copyText);
    } else {
      console.log("ini budi");
      return Document.execCommand("copy", true, text.object);
    }
  }
  const handleCopyClick = () => {
    copyTextToClipBoard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {/* <input style={{ display: "none" }} value={copyText}></input>
      <button onClick={handleCopyClick} className={styles["button-copy"]}>
        <p className={styles["button-text"]}>{isCopied ? "Sitasi Tersalin" : "Salin Sitasi"}</p>
      </button> */}
      {isCopied ? (
        <button className={styles["button-copied"]}>
          <FiCheck className={styles["button-copied-icon"]} />
          <p className={styles["button-text"]}>Sitasi Tersalin</p>
        </button>
      ) : (
        <button onClick={handleCopyClick} className={styles["button-copy"]}>
          <p className={styles["button-text"]}>Salin Sitasi</p>
        </button>
      )}
    </div>
  );
}

export default CopyClipboard;
