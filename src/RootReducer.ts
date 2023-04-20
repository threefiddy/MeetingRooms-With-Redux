import { combineReducers } from "redux";
import meetingRoomReducer from "./meeting-room/MeetingRoomStore";

const RootReducer = combineReducers({
  meetingRoom: meetingRoomReducer
});

export type ApplicationState = ReturnType<typeof RootReducer>;

export default RootReducer;
