import React from "react";
import { useSelector } from "react-redux";
import Column from "./Column";

function Home() {
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;

  return (
    <div
      className={"bg-[#f4f7fd]  scrollbar-hide h-screen flex    dark:bg-[#20212c] overflow-x-scroll gap-6"}>
      {columns.length > 0 ? (
        <>
          {columns.map((col, index) => (
            <Column key={index} colIndex={index} />
          ))}
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
}

export default Home;
