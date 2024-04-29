import { useState } from "react";

function LikedButton(props) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked
        ? `You liked comment number ${
            props.index + 1
          }. Do you want to unlike it?`
        : "Like"}
    </button>
  );
}

export default LikedButton;
