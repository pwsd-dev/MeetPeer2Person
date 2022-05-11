import React from "react";
import { postData } from "../../api/postData.jsx";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItems,
  itemsAdapter,
  itemsReceived,
  selectAllUsers,
  selectUserEntities,
  selectUserById,
  selectTotalUsers,
} from "../../store/slices/itemsSlice";

function ItemMain() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const selectEntities = useSelector((state) => state.items);

  console.log(selectEntities);

  return (
    <div className="item-main">
      <div className="left-side">
      </div>
      {/* {selectedEntities.map((item) => (
        <li key={`${item.name}`}>{`${item.name}`}</li>
      ))} */}
    </div>
  );
}

export default ItemMain;
