import { IconType } from "react-icons";

export type Seat = {
  seat: "frontseat" | "backseat" | "vip";
  price: number;
};

export type Organizer = {
  img_avatar: string;
  name: string;
  job: string;
  social: {
    icon: IconType;
    path: string;
  }[];
};

export type Event = {
  id: string;
  type: "music" | "art" | "food" | "sport";
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
