import React from "react";
import ReactDOM from "react-dom";
import { ProjectPicker } from "./components/ProjectPicker";

let eventsFixed = false;
let inputUpdated = true;

declare const TE: any;
declare const DMDialog: any;

function checkForWindow() {
  const projectInputContainer = document.querySelector('div[data-intercom-target="Project selector"]');
  const taskInputContainer = document.querySelector('div[data-intercom-target="Phase selector"]');
  const registerTimeContainer = document.querySelector('div[class="registerTime_formCont"]');

  if (registerTimeContainer && projectInputContainer && taskInputContainer) {
    if (!eventsFixed) {
      chrome.storage.sync.get(
        {
          disableRefresh: true,
        },
        (items) => {
          if (items.disableRefresh) {
            function eventsFixer() {
              try {
                console.debug("Setup Timeyene+ fixes");
                console.time("Setup Timeyene+ fixes")

                const calendar = TE.Calendar.getCalendarInstance();
                const oldFn = calendar.weekUpdateData;
                calendar.weekUpdateData = function (pWeekId: string, pEntityType: string) {
                  if (pEntityType === "suggestion") {
                    return;
                  }
                  return oldFn.bind(this)(pWeekId, pEntityType);
                };

                const registerTimeDialog = DMDialog.dialogList.find((i: any) => i.name === "registerTime");
                const oldSaveEntry = registerTimeDialog.saveEntry;

                registerTimeDialog.saveEntry = function (pMood: any) {
                  const myElFormCont = jQuery(".registerTime_formCont", this.htmlBody);
                  if (TE.Gui.validate(myElFormCont)) {
                    $('div[data-item-type="suggestion"][data-item-id="' + this.suggestionId + '"]').remove();
                    oldSaveEntry.bind(this)(pMood);
                  }
                };

                console.timeEnd("Setup Timeyene+ fixes");
              } catch (error) {
                console.error("Failed to setup Timeyene+ fixes");
                console.error(error);
              }
              // $("body").off("TEDataUpdate_timeEntries", (jQuery as any)._data( document.body, "events" ).TEDataUpdate_timeEntries[0].handler)
            }

            var script = document.createElement("script");
            script.appendChild(document.createTextNode("(" + eventsFixer + ")();"));
            (document.body || document.head || document.documentElement).appendChild(script);
          }
        }
      );

      eventsFixed = true;
    }

    if (!inputUpdated) {
      const firstRow = registerTimeContainer.querySelector("div");
      Array.from(firstRow!.children).forEach((child) => {
        (child as any).style.display = "none";
      });

      const reactContainer = document.createElement("div");
      reactContainer.innerHTML = '<div class="col-xs-12" id="magic-project-picker" />';

      firstRow!.appendChild(reactContainer);

      ReactDOM.render(
        <React.StrictMode>
          <div className="form-group">
            <ProjectPicker projectInputContainer={projectInputContainer as any} taskInputContainer={taskInputContainer} />
          </div>
        </React.StrictMode>,
        document.getElementById("magic-project-picker")
      );

      inputUpdated = true;
    }
  } else if (inputUpdated) {
    inputUpdated = false;
  }

  setTimeout(checkForWindow, 500);
}

if (window.location.href.startsWith("https://track.timeneye.com")) {
  checkForWindow();
}
