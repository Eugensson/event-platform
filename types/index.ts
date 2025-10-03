export type SeatType = "frontseat" | "backseat" | "vip";

export type EventType = "music" | "art" | "food" | "sport";

export type Seat = {
  seat: SeatType;
  price: number;
};

export type Social = {
  icon: string;
  path: string;
};

export type Organizer = {
  img_avatar: string;
  name: string;
  job: string;
  social: Social[];
};

export type Event = {
  id: string;
  type: EventType;
  img_sm: string;
  img_lg: string;
  date: string;
  hour: string;
  title: string;
  location: string;
  description: string;
  seats: Seat[];
  organizers: Organizer[];
  recommended: boolean;
};

export type TicketData = {
  eventId: string;
  eventName: string;
  ticketType: SeatType;
  ticketPrice: number;
  amount: number;
  totalPrice: number;
};
