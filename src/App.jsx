import LikedButton from "./components/LikedButton";
import IronhackButton from "./components/IronhackButton";

function App() {
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>

      <div>
        This is the first comment.
        <div className="like_button_container">
          <LikedButton index={0} />
        </div>
      </div>

      <div>
        This is the second comment.
        <div className="like_button_container">
          <LikedButton index={1} />
        </div>
      </div>

      <div>
        This is the third comment.
        <div className="like_button_container">
          <LikedButton index={2} />
        </div>
      </div>

      <div style={{ margin: "40px 0" }}>
        <IronhackButton />
      </div>
    </>
  );
}

export default App;
