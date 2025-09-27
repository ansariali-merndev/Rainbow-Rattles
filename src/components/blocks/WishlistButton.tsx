"use client";

import { addToWishList, removeFromWishlist } from "@/lib/slices/WishlistSlice";
import { TypeStore } from "@/lib/store";
import { handleToastSwal } from "@/utils/Swal";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export const WishlistButton = ({ itemId }: { itemId: number }) => {
  const wishlist = useSelector((s: TypeStore) => s.wishlist);
  const dispatch = useDispatch();
  const [isWhislist, setIsWhislist] = useState<boolean>(
    wishlist.some((val) => val.id === itemId)
  );

  useEffect(() => {
    setIsWhislist(wishlist.some((val) => val.id === itemId));
  }, [itemId, wishlist]);

  const handleCTA = () => {
    if (!isWhislist) {
      dispatch(addToWishList(itemId));
      setIsWhislist(true);
      handleToastSwal(
        "success",
        "This item has been added to your wishlist. You can view it anytime!"
      );
    } else {
      dispatch(removeFromWishlist(itemId));
      setIsWhislist(false);
      handleToastSwal("info", "The item has been removed from your wishlist.");
    }
  };

  return (
    <button
      onClick={handleCTA}
      className={`px-4 py-1.5 rounded-md bg-[#0F83B2] pb-1 cursor-pointer`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <FaHeart fill={isWhislist ? "#FF0000" : "#ffffff"} size={21} />
    </button>
  );
};
