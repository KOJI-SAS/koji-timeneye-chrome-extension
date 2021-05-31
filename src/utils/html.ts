export function emitChangeEvent(selectElement: HTMLSelectElement) {
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    selectElement.dispatchEvent(evt);
  } else {
    (selectElement as any).fireEvent("onchange");
  }
}

export function htmlDecode(input: string) {
  var e = document.createElement("textarea");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
