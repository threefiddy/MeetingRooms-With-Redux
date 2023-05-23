import "./App.css";
import MeetingRoomDetailsPage from "./meeting-room-details/MeetingRoomDetails";
import { MeetingRoomsPage } from "./meeting-room/MeetingRoom";

function App() {
  return (
    <div className="App">
      <div className={"meeting-room-styling"} >
        <MeetingRoomsPage />
      </div>
      <div className={"meeting-room-styling"} >
        <MeetingRoomDetailsPage />
      </div>
    </div>
  );
}

export default App;
