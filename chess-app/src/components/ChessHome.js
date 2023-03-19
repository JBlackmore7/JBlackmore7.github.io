import "../App.css";
import styles from "./ChessHome.module.css";
import { useState, useRef } from "react";
import { Chess } from "../Chess";
import ChessEngine from "../Engine";
import { useSize } from "./hooks";
import { useModal } from "./hooks";
import Modal from "./Modal";

function ChessHome() {
  const [game, setGame] = useState(new Chess());
  const [showGame, setShowGame] = useState(false);
  const containerRef = useRef();
  const { width } = useSize(containerRef);
  const { isShowing, toggle } = useModal();
  const [boardOrientation, setBoardOrientation] = useState();
  const [gameEndModal, setGameEndModal] = useState(null);

  function takeBack() {
    const gameCopy = { ...game };
    gameCopy.undo();
    gameCopy.undo();
    setGame(gameCopy);
  }

  return (
    <div ref={containerRef} className={!showGame ? styles.mainEnd : styles.mainCenter}>
      {!showGame ? (
        <button
          className="myButton"
          onClick={() => {
            toggle();
          }}
        >
          New Game
        </button>
      ) : null}
      <Modal isShowing={isShowing} hide={toggle}>
        <button
          className="playAsWhite"
          onClick={() => {
            setShowGame(true);
            toggle();
            setBoardOrientation("white");
            setGame(new Chess());
          }}
        >
          <img src={require("../images/white-king.png")} alt=""></img>
          <br></br>
          Play as White
        </button>
        <button
          className="playAsBlack"
          onClick={() => {
            setShowGame(true);
            toggle();
            setBoardOrientation("black");
            setGame(new Chess());
          }}
        >
          <img src={require("../images/black-king.png")} alt=""></img>
          <br></br>
          Play as Black
        </button>
      </Modal>
      {gameEndModal}
      {showGame && boardOrientation ? (
        <>
          <div className="board">
            <ChessEngine
              boardWidth={Math.min(780, width)}
              game={game}
              setGame={setGame}
              boardOrientation={boardOrientation}
              setGameEndModal={setGameEndModal}
            />
          </div>
          <div className="buttonWrapper">
            <button className="newGame" onClick={toggle}>
              New Game
            </button>
            <button className="undo" onClick={takeBack}>
              Undo Last Move
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ChessHome;
