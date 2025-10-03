"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

import { Event, Seat, TicketData } from "@/types";

interface TicketContextType {
  event: Event | null;
  seat: Seat;
  showMenu: boolean;
  itemAmount: number;
  totalPrice: number;
  checkoutData: TicketData | null;
  handleSeat: (seat: "frontseat" | "backseat" | "vip", price: number) => void;
  setSeat: React.Dispatch<React.SetStateAction<Seat>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  buyNow: (event: Event) => void;
  initializeEvent: (fetchedEvent: Event) => void;
  increaseAmount: () => void;
  decreaseAmount: () => void;
}

export const TicketContext = createContext<TicketContextType | undefined>(
  undefined
);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [seat, setSeat] = useState<Seat>({ seat: "frontseat", price: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [itemAmount, setItemAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutData, setCheckoutData] = useState<TicketData | null>(null);

  const initializeEvent = (fetchedEvent: Event) => {
    setEvent(fetchedEvent);
    setItemAmount(1);

    const frontseat = fetchedEvent?.seats.find(
      (seat: Seat) => seat.seat === "frontseat"
    );

    if (frontseat) {
      setSeat({ seat: frontseat.seat, price: frontseat.price });
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".custom-select")) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(seat.price * itemAmount);
  }, [seat.price, itemAmount]);

  const handleSeat = (
    seat: "frontseat" | "backseat" | "vip",
    price: number
  ) => {
    setSeat({ seat, price });
    setShowMenu(false);
  };

  const buyNow = (event: Event) => {
    const ticketData = {
      eventId: event.id,
      eventName: event.title,
      ticketType: seat.seat,
      ticketPrice: seat.price,
      amount: itemAmount,
      totalPrice,
    };

    setCheckoutData(ticketData);
  };

  const increaseAmount = () => {
    setItemAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    setItemAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  return (
    <TicketContext.Provider
      value={{
        event,
        seat,
        showMenu,
        itemAmount,
        totalPrice,
        checkoutData,
        handleSeat,
        setSeat,
        setShowMenu,
        buyNow,
        initializeEvent,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
