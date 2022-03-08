import { combineReducers } from "redux";
import appStatus, { AppStatusState } from "./appStatus";
import appContent, { AppContentState } from "./appContent";

export type RootState = {
    appStatus: AppStatusState;
    appContent: AppContentState;
}

export default combineReducers({
    appStatus,
    appContent,
});