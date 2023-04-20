import { ResolveThunks } from "react-redux";
import { ApplicationState } from "../RootReducer";

import { actions as MeetingroomActionType } from "./MeetingRoomStore";

const mapStateToProps = (state: ApplicationState) => state.meetingRoom;

export type MeetingRoomProps = ReturnType<typeof mapStateToProps> & Pick<
  ResolveThunks<typeof MeetingroomActionType>, | "getMeetingRooms" | "setMeetingRoom">

export interface IMeetingRoom {
  Id?: number;
  Name?: string;
  Location?: string;
  RoomCapacity?: number;
}