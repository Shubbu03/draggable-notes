/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Trash from "../icons/Trash";
import { useEffect, useRef, useState } from "react";
import { setNewOffset, autoGrow, setZIndex } from "../utils.js";

const NoteCard = ({ note }) => {
  const [position, setPosition] = useState(JSON.parse(note.position));
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);
  const textAreaRef = useRef(null);

  let mouseStartPos = { x: 0, y: 0 };

  const cardRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const mouseDown = (e) => {
    setZIndex(cardRef.current);
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    let mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        style={{ backgroundColor: colors.colorHeader }}
        onMouseDown={mouseDown}
      ></div>
      <Trash />
      <div className="card-body">
        <textarea
          ref={textAreaRef}
          style={{ color: colors.colorText }}
          defaultValue={body}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
          onFocus={() => {
            setZIndex(cardRef.current);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default NoteCard;
