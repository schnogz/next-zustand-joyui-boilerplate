"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joy_1 = require("@mui/joy");
var app_mutations_1 = require("@/store/slices/app/app.mutations");
var useStore_1 = require("@/store/useStore");
function Index() {
    var title = (0, useStore_1.useContentState)().title;
    var sidebarIsOpen = (0, useStore_1.useAppState)().sidebarIsOpen;
    return (<>
      <h1>{title}</h1>
      <h2>isOpen: {sidebarIsOpen}</h2>
      <joy_1.Button onClick={app_mutations_1.toggleSidebarIsOpen}>Update</joy_1.Button>
    </>);
}
exports.default = Index;
