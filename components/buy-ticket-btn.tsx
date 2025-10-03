"use client";

import { HiTicket } from "react-icons/hi2";
import { useContext, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { TicketContext } from "@/components/ticket-context";

import { Event } from "@/types";

interface BuyTicketBtnProps {
  event: Event;
}

export const BuyTicketBtn = ({ event }: BuyTicketBtnProps) => {
  const context = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!context) {
    throw new Error("TicketContext must be used within a TicketProvider");
  }

  const { buyNow, itemAmount, totalPrice, increaseAmount, decreaseAmount } =
    context;

  const handleBuyNow = () => {
    setIsLoading(true);
    buyNow(event);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      <div className="w-50 md:w-75 p-2 flex items-center justify-between rounded-full bg-secondary">
        <button
          type="button"
          className="size-12 flex items-center justify-center bg-accent cursor-pointer select-none rounded-full"
          onClick={decreaseAmount}
        >
          <BiMinus className="text-lg" />
        </button>
        <div>{itemAmount}</div>
        <button
          type="button"
          className="size-12 flex items-center justify-center bg-accent cursor-pointer select-none rounded-full"
          onClick={increaseAmount}
        >
          <BiPlus className="text-lg" />
        </button>
      </div>
      <button
        type="button"
        className="p-4 w-full rounded-full bg-accent hover:bg-accent-hover transition-colors duration-300 cursor-pointer"
        onClick={handleBuyNow}
      >
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Processing...</div>
          ) : (
            <div className="flex items-center gap-4">
              <HiTicket size={24} />
              <div>{`${itemAmount} x ticket - $${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};
