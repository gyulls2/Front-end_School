const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

function handleDragOver(e) {
  e.preventDefault();

  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItem = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );

  const nextItem = notDraggingItem.find((item) => {
    /* 
    clientY : 뷰포트 내 마우스 포인터의 y좌표
    offsetTop : 뷰포트 시작점에서 요소의 시작점까지 Y좌표
    offsetHeight : 요소의 높이(border 포함)
     */

    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    // console.log("clientY : ", e.clientY, " / offsetTop : ", item.offsetTop, " / offsetHeight : ", item.offsetHeight);
  });

  dropTarget.insertBefore(draggingItem, nextItem)
  // console.log(nextItem);
}

// Target 안에 drag item이 들어왔을 때 실행
dropTarget.addEventListener("dragover", handleDragOver);
