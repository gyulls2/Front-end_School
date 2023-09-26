import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";

export default function Message() {
  const { stock, message } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
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
