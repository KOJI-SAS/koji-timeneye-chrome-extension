import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Options = () => {
  const [disableRefresh, setDisableRefresh] = useState<boolean>();
  const [status, setStatus] = useState<string>()

  useEffect(() => {
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    chrome.storage.sync.get(
      {
        disableRefresh: true,
      },
      (items) => {
        setDisableRefresh(items.disableRefresh);
      }
    );
  }, []);

  const saveOptions = () => {
    // Saves options to chrome.storage.sync.
    chrome.storage.sync.set(
      {
        disableRefresh: disableRefresh,
      },
      () => {
        // Update status to let user know options were saved.
        setStatus("Options saved.");
        const id = setTimeout(() => {
          setStatus(undefined);
        }, 1000);
        return () => clearTimeout(id);
      }
    );
  };

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={disableRefresh}
            onChange={(event) => setDisableRefresh(event.target.checked)}
          />
          Disable Calendar Refresh
        </label>
      </div>
      <div>{status}</div>
      <button onClick={saveOptions}>Save</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
