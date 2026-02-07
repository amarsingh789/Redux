import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6 items-center">
          <h2 className="text-3xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAll();
            }}
            className="bg-red-600 active:scale-95 cursor-pointer transition text-white px-6 py-3 rounded text-lg font-medium"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-3xl text-center font-medium">Empty Collection</h2>
      )}

      <div className="flex flex-wrap gap-6 justify-start w-full">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
