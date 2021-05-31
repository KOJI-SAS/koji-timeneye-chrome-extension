/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"content_script": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/content_script.tsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ProjectPicker.tsx":
/*!******************************************!*\
  !*** ./src/components/ProjectPicker.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const minisearch_1 = __importDefault(__webpack_require__(/*! minisearch */ "./node_modules/minisearch/dist/es5m/index.js"));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const async_1 = __importDefault(__webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.esm.js"));
const html_1 = __webpack_require__(/*! ../utils/html */ "./src/utils/html.ts");
const getFlatProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const { projects } = yield fetch("https://track.timeneye.com/json/project/getProjects").then((res) => res.json());
    const transformedProjects = projects
        .map((project) => project.tasks
        .map((task) => ({
        id: Math.floor(Math.random() * 5000),
        label: html_1.htmlDecode(`${project.name} / ${task.name}`),
        value: {
            task: task,
            project: project,
        },
    }))
        .filter((data) => {
        return data.value.project.isActive && data.value.task.isOpen;
    }))
        .reduce((projects, item) => projects.concat(item), []);
    return transformedProjects;
});
const getProjectTask = (projectId, taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield getFlatProjects();
    return projects.find((project) => project.value.task.taskId === taskId && project.value.project.projectId === projectId);
});
const searchProject = (inputValue) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield getFlatProjects();
    const projectsMiniSearch = new minisearch_1.default({
        fields: ["label"],
        storeFields: ["label", "value"],
    });
    projectsMiniSearch.addAll(projects);
    return projectsMiniSearch.search(inputValue, { fuzzy: 0.2 });
});
exports.ProjectPicker = (props) => {
    const { projectInputContainer, taskInputContainer } = props;
    const [value, setValue] = react_1.useState(null);
    const projectInput = react_1.useMemo(() => projectInputContainer.querySelector("select"), [projectInputContainer]);
    const taskInput = react_1.useMemo(() => taskInputContainer.querySelector("select"), [taskInputContainer]);
    react_1.useEffect(() => {
        if (!projectInput || !taskInput) {
            return;
        }
        const currentProject = projectInput.value;
        const currentTask = taskInput.value;
        getProjectTask(+currentProject, +currentTask).then((project) => {
            setValue(project);
        });
    }, [projectInput, taskInput]);
    const onChange = react_1.useCallback((value) => {
        if (!projectInput || !taskInput) {
            return;
        }
        projectInput.value = value.value.project.projectId;
        html_1.emitChangeEvent(projectInput);
        setTimeout(() => {
            taskInput.value = value.value.task.taskId;
            html_1.emitChangeEvent(taskInput);
        });
        setValue(value);
    }, [projectInput, taskInput]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(async_1.default, { styles: { menu: (styles) => (Object.assign(Object.assign({}, styles), { zIndex: 999 })) }, placeholder: "Search for a project or a phase", cacheOptions: true, defaultOptions: true, value: value, loadOptions: searchProject, onChange: onChange })));
};


/***/ }),

/***/ "./src/content_script.tsx":
/*!********************************!*\
  !*** ./src/content_script.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const ProjectPicker_1 = __webpack_require__(/*! ./components/ProjectPicker */ "./src/components/ProjectPicker.tsx");
let eventsFixed = false;
let inputUpdated = true;
function checkForWindow() {
    const projectInputContainer = document.querySelector('div[data-intercom-target="Project selector"]');
    const taskInputContainer = document.querySelector('div[data-intercom-target="Phase selector"]');
    const registerTimeContainer = document.querySelector('div[class="registerTime_formCont"]');
    if (registerTimeContainer && projectInputContainer && taskInputContainer) {
        if (!eventsFixed) {
            chrome.storage.sync.get({
                disableRefresh: true,
            }, (items) => {
                if (items.disableRefresh) {
                    function eventsFixer() {
                        try {
                            console.debug("Setup Timeyene+ fixes");
                            console.time("Setup Timeyene+ fixes");
                            const calendar = TE.Calendar.getCalendarInstance();
                            const oldFn = calendar.weekUpdateData;
                            calendar.weekUpdateData = function (pWeekId, pEntityType) {
                                if (pEntityType === "suggestion") {
                                    return;
                                }
                                return oldFn.bind(this)(pWeekId, pEntityType);
                            };
                            const registerTimeDialog = DMDialog.dialogList.find((i) => i.name === "registerTime");
                            const oldSaveEntry = registerTimeDialog.saveEntry;
                            registerTimeDialog.saveEntry = function (pMood) {
                                const myElFormCont = jQuery(".registerTime_formCont", this.htmlBody);
                                if (TE.Gui.validate(myElFormCont)) {
                                    $('div[data-item-type="suggestion"][data-item-id="' + this.suggestionId + '"]').remove();
                                    oldSaveEntry.bind(this)(pMood);
                                }
                            };
                            console.timeEnd("Setup Timeyene+ fixes");
                        }
                        catch (error) {
                            console.error("Failed to setup Timeyene+ fixes");
                            console.error(error);
                        }
                        // $("body").off("TEDataUpdate_timeEntries", (jQuery as any)._data( document.body, "events" ).TEDataUpdate_timeEntries[0].handler)
                    }
                    var script = document.createElement("script");
                    script.appendChild(document.createTextNode("(" + eventsFixer + ")();"));
                    (document.body || document.head || document.documentElement).appendChild(script);
                }
            });
            eventsFixed = true;
        }
        if (!inputUpdated) {
            const firstRow = registerTimeContainer.querySelector("div");
            Array.from(firstRow.children).forEach((child) => {
                child.style.display = "none";
            });
            const reactContainer = document.createElement("div");
            reactContainer.innerHTML = '<div class="col-xs-12" id="magic-project-picker" />';
            firstRow.appendChild(reactContainer);
            react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
                react_1.default.createElement("div", { className: "form-group" },
                    react_1.default.createElement(ProjectPicker_1.ProjectPicker, { projectInputContainer: projectInputContainer, taskInputContainer: taskInputContainer }))), document.getElementById("magic-project-picker"));
            inputUpdated = true;
        }
    }
    else if (inputUpdated) {
        inputUpdated = false;
    }
    setTimeout(checkForWindow, 500);
}
if (window.location.href.startsWith("https://track.timeneye.com")) {
    checkForWindow();
}


/***/ }),

/***/ "./src/utils/html.ts":
/*!***************************!*\
  !*** ./src/utils/html.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function emitChangeEvent(selectElement) {
    if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        selectElement.dispatchEvent(evt);
    }
    else {
        selectElement.fireEvent("onchange");
    }
}
exports.emitChangeEvent = emitChangeEvent;
function htmlDecode(input) {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
exports.htmlDecode = htmlDecode;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdFBpY2tlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaHRtbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxxQ0FBcUMsbUJBQU8sQ0FBQyxnRUFBWTtBQUN6RCw2QkFBNkIsbUJBQU8sQ0FBQyw0Q0FBTztBQUM1QyxnQ0FBZ0MsbUJBQU8sQ0FBQyxzRkFBb0I7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLDBDQUFlO0FBQ3RDO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWEsS0FBSyxVQUFVO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsQ0FBQztBQUNEO0FBQ0EsV0FBVyw0Q0FBNEM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0RBQXdELFVBQVUsa0RBQWtELFlBQVksY0FBYyxJQUFJLDBKQUEwSjtBQUM1Uzs7Ozs7Ozs7Ozs7OztBQ3JGYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsNENBQU87QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsb0RBQVc7QUFDdkQsd0JBQXdCLG1CQUFPLENBQUMsc0VBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDBCQUEwQjtBQUNoRixrRkFBa0YsdUZBQXVGO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbnRlbnRfc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImNvbnRlbnRfc2NyaXB0XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvY29udGVudF9zY3JpcHQudHN4XCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWluaXNlYXJjaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtaW5pc2VhcmNoXCIpKTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IGFzeW5jXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LXNlbGVjdC9hc3luY1wiKSk7XG5jb25zdCBodG1sXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvaHRtbFwiKTtcbmNvbnN0IGdldEZsYXRQcm9qZWN0cyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgcHJvamVjdHMgfSA9IHlpZWxkIGZldGNoKFwiaHR0cHM6Ly90cmFjay50aW1lbmV5ZS5jb20vanNvbi9wcm9qZWN0L2dldFByb2plY3RzXCIpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRQcm9qZWN0cyA9IHByb2plY3RzXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IHByb2plY3QudGFza3NcbiAgICAgICAgLm1hcCgodGFzaykgPT4gKHtcbiAgICAgICAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMDApLFxuICAgICAgICBsYWJlbDogaHRtbF8xLmh0bWxEZWNvZGUoYCR7cHJvamVjdC5uYW1lfSAvICR7dGFzay5uYW1lfWApLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3QsXG4gICAgICAgIH0sXG4gICAgfSkpXG4gICAgICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEudmFsdWUucHJvamVjdC5pc0FjdGl2ZSAmJiBkYXRhLnZhbHVlLnRhc2suaXNPcGVuO1xuICAgIH0pKVxuICAgICAgICAucmVkdWNlKChwcm9qZWN0cywgaXRlbSkgPT4gcHJvamVjdHMuY29uY2F0KGl0ZW0pLCBbXSk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkUHJvamVjdHM7XG59KTtcbmNvbnN0IGdldFByb2plY3RUYXNrID0gKHByb2plY3RJZCwgdGFza0lkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHlpZWxkIGdldEZsYXRQcm9qZWN0cygpO1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnZhbHVlLnRhc2sudGFza0lkID09PSB0YXNrSWQgJiYgcHJvamVjdC52YWx1ZS5wcm9qZWN0LnByb2plY3RJZCA9PT0gcHJvamVjdElkKTtcbn0pO1xuY29uc3Qgc2VhcmNoUHJvamVjdCA9IChpbnB1dFZhbHVlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHlpZWxkIGdldEZsYXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IHByb2plY3RzTWluaVNlYXJjaCA9IG5ldyBtaW5pc2VhcmNoXzEuZGVmYXVsdCh7XG4gICAgICAgIGZpZWxkczogW1wibGFiZWxcIl0sXG4gICAgICAgIHN0b3JlRmllbGRzOiBbXCJsYWJlbFwiLCBcInZhbHVlXCJdLFxuICAgIH0pO1xuICAgIHByb2plY3RzTWluaVNlYXJjaC5hZGRBbGwocHJvamVjdHMpO1xuICAgIHJldHVybiBwcm9qZWN0c01pbmlTZWFyY2guc2VhcmNoKGlucHV0VmFsdWUsIHsgZnV6enk6IDAuMiB9KTtcbn0pO1xuZXhwb3J0cy5Qcm9qZWN0UGlja2VyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9qZWN0SW5wdXRDb250YWluZXIsIHRhc2tJbnB1dENvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSByZWFjdF8xLnVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiBwcm9qZWN0SW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKSwgW3Byb2plY3RJbnB1dENvbnRhaW5lcl0pO1xuICAgIGNvbnN0IHRhc2tJbnB1dCA9IHJlYWN0XzEudXNlTWVtbygoKSA9PiB0YXNrSW5wdXRDb250YWluZXIucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKSwgW3Rhc2tJbnB1dENvbnRhaW5lcl0pO1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0SW5wdXQgfHwgIXRhc2tJbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICAgICAgZ2V0UHJvamVjdFRhc2soK2N1cnJlbnRQcm9qZWN0LCArY3VycmVudFRhc2spLnRoZW4oKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHNldFZhbHVlKHByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9LCBbcHJvamVjdElucHV0LCB0YXNrSW5wdXRdKTtcbiAgICBjb25zdCBvbkNoYW5nZSA9IHJlYWN0XzEudXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghcHJvamVjdElucHV0IHx8ICF0YXNrSW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSB2YWx1ZS52YWx1ZS5wcm9qZWN0LnByb2plY3RJZDtcbiAgICAgICAgaHRtbF8xLmVtaXRDaGFuZ2VFdmVudChwcm9qZWN0SW5wdXQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9IHZhbHVlLnZhbHVlLnRhc2sudGFza0lkO1xuICAgICAgICAgICAgaHRtbF8xLmVtaXRDaGFuZ2VFdmVudCh0YXNrSW5wdXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIH0sIFtwcm9qZWN0SW5wdXQsIHRhc2tJbnB1dF0pO1xuICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5kZWZhdWx0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhc3luY18xLmRlZmF1bHQsIHsgc3R5bGVzOiB7IG1lbnU6IChzdHlsZXMpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0eWxlcyksIHsgekluZGV4OiA5OTkgfSkpIH0sIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYSBwcm9qZWN0IG9yIGEgcGhhc2VcIiwgY2FjaGVPcHRpb25zOiB0cnVlLCBkZWZhdWx0T3B0aW9uczogdHJ1ZSwgdmFsdWU6IHZhbHVlLCBsb2FkT3B0aW9uczogc2VhcmNoUHJvamVjdCwgb25DaGFuZ2U6IG9uQ2hhbmdlIH0pKSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5jb25zdCByZWFjdF9kb21fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcbmNvbnN0IFByb2plY3RQaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvUHJvamVjdFBpY2tlclwiKTtcbmxldCBldmVudHNGaXhlZCA9IGZhbHNlO1xubGV0IGlucHV0VXBkYXRlZCA9IHRydWU7XG5mdW5jdGlvbiBjaGVja0ZvcldpbmRvdygpIHtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1pbnRlcmNvbS10YXJnZXQ9XCJQcm9qZWN0IHNlbGVjdG9yXCJdJyk7XG4gICAgY29uc3QgdGFza0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtaW50ZXJjb20tdGFyZ2V0PVwiUGhhc2Ugc2VsZWN0b3JcIl0nKTtcbiAgICBjb25zdCByZWdpc3RlclRpbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3M9XCJyZWdpc3RlclRpbWVfZm9ybUNvbnRcIl0nKTtcbiAgICBpZiAocmVnaXN0ZXJUaW1lQ29udGFpbmVyICYmIHByb2plY3RJbnB1dENvbnRhaW5lciAmJiB0YXNrSW5wdXRDb250YWluZXIpIHtcbiAgICAgICAgaWYgKCFldmVudHNGaXhlZCkge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoe1xuICAgICAgICAgICAgICAgIGRpc2FibGVSZWZyZXNoOiB0cnVlLFxuICAgICAgICAgICAgfSwgKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmRpc2FibGVSZWZyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV2ZW50c0ZpeGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2V0dXAgVGltZXllbmUrIGZpeGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZShcIlNldHVwIFRpbWV5ZW5lKyBmaXhlc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxlbmRhciA9IFRFLkNhbGVuZGFyLmdldENhbGVuZGFySW5zdGFuY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRGbiA9IGNhbGVuZGFyLndlZWtVcGRhdGVEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyLndlZWtVcGRhdGVEYXRhID0gZnVuY3Rpb24gKHBXZWVrSWQsIHBFbnRpdHlUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwRW50aXR5VHlwZSA9PT0gXCJzdWdnZXN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2xkRm4uYmluZCh0aGlzKShwV2Vla0lkLCBwRW50aXR5VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdpc3RlclRpbWVEaWFsb2cgPSBETURpYWxvZy5kaWFsb2dMaXN0LmZpbmQoKGkpID0+IGkubmFtZSA9PT0gXCJyZWdpc3RlclRpbWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkU2F2ZUVudHJ5ID0gcmVnaXN0ZXJUaW1lRGlhbG9nLnNhdmVFbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclRpbWVEaWFsb2cuc2F2ZUVudHJ5ID0gZnVuY3Rpb24gKHBNb29kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15RWxGb3JtQ29udCA9IGpRdWVyeShcIi5yZWdpc3RlclRpbWVfZm9ybUNvbnRcIiwgdGhpcy5odG1sQm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChURS5HdWkudmFsaWRhdGUobXlFbEZvcm1Db250KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnZGl2W2RhdGEtaXRlbS10eXBlPVwic3VnZ2VzdGlvblwiXVtkYXRhLWl0ZW0taWQ9XCInICsgdGhpcy5zdWdnZXN0aW9uSWQgKyAnXCJdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRTYXZlRW50cnkuYmluZCh0aGlzKShwTW9vZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChcIlNldHVwIFRpbWV5ZW5lKyBmaXhlc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2V0dXAgVGltZXllbmUrIGZpeGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJChcImJvZHlcIikub2ZmKFwiVEVEYXRhVXBkYXRlX3RpbWVFbnRyaWVzXCIsIChqUXVlcnkgYXMgYW55KS5fZGF0YSggZG9jdW1lbnQuYm9keSwgXCJldmVudHNcIiApLlRFRGF0YVVwZGF0ZV90aW1lRW50cmllc1swXS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIoXCIgKyBldmVudHNGaXhlciArIFwiKSgpO1wiKSk7XG4gICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRzRml4ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5wdXRVcGRhdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHJlZ2lzdGVyVGltZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShmaXJzdFJvdy5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJlYWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCIgaWQ9XCJtYWdpYy1wcm9qZWN0LXBpY2tlclwiIC8+JztcbiAgICAgICAgICAgIGZpcnN0Um93LmFwcGVuZENoaWxkKHJlYWN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlYWN0X2RvbV8xLmRlZmF1bHQucmVuZGVyKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0XzEuZGVmYXVsdC5TdHJpY3RNb2RlLCBudWxsLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChQcm9qZWN0UGlja2VyXzEuUHJvamVjdFBpY2tlciwgeyBwcm9qZWN0SW5wdXRDb250YWluZXI6IHByb2plY3RJbnB1dENvbnRhaW5lciwgdGFza0lucHV0Q29udGFpbmVyOiB0YXNrSW5wdXRDb250YWluZXIgfSkpKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWdpYy1wcm9qZWN0LXBpY2tlclwiKSk7XG4gICAgICAgICAgICBpbnB1dFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlucHV0VXBkYXRlZCkge1xuICAgICAgICBpbnB1dFVwZGF0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgc2V0VGltZW91dChjaGVja0ZvcldpbmRvdywgNTAwKTtcbn1cbmlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly90cmFjay50aW1lbmV5ZS5jb21cIikpIHtcbiAgICBjaGVja0ZvcldpbmRvdygpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBlbWl0Q2hhbmdlRXZlbnQoc2VsZWN0RWxlbWVudCkge1xuICAgIGlmIChcImNyZWF0ZUV2ZW50XCIgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICAgICAgZXZ0LmluaXRFdmVudChcImNoYW5nZVwiLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VsZWN0RWxlbWVudC5maXJlRXZlbnQoXCJvbmNoYW5nZVwiKTtcbiAgICB9XG59XG5leHBvcnRzLmVtaXRDaGFuZ2VFdmVudCA9IGVtaXRDaGFuZ2VFdmVudDtcbmZ1bmN0aW9uIGh0bWxEZWNvZGUoaW5wdXQpIHtcbiAgICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBlLmlubmVySFRNTCA9IGlucHV0O1xuICAgIHJldHVybiBlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwID8gXCJcIiA6IGUuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG59XG5leHBvcnRzLmh0bWxEZWNvZGUgPSBodG1sRGVjb2RlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==