import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";

export default function Message() {
  // 각 `useSelector`는 특정 리듀서의 상태에 초점을 맞춥니다.
  // 이렇게 각각의 상태를 개별적으로 가져오면, 해당 상태만 변할 때 해당 상태를 사용하는 컴포넌트가 다시 렌더링됩니다.
  // 이를 통해 불필요한 렌더링을 최소화하며 코드의 명확성도 향상됩니다.
  const { stock } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
    };
  });

  const { message } = useSelector((state) => {
    return {
      message: state.stockReducer.message,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (stock <= 0) {
      dispatch(soldOut());
    } else {
      dispatch(sale());
    }
  }, [stock]);

  return <div>{message}</div>;
}
