"use client";

import { createContext, useEffect, useMemo, useState } from "react";

import { Event } from "@/types";

export const EventContext = createContext<{
  events: Event[];
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedLocation: string | null;
  setSelectedLocation: (selectedLocation: string | null) => void;
  selectedType: string | null;
  setSelectedType: (selectedType: string | null) => void;
  selectedDate: string | undefined;
  setSelectedDate: (selectedDate: string | undefined) => void;
  filteredEvents: Event[];
  handleSubmit: () => void;
  handleClearSearch: () => void;
  isLoading: boolean;
  error: string | null;
  showEventList: boolean;
  setShowEventList: (showEventList: boolean) => void;
}>({
  events: [],
  searchTerm: "",
  setSearchTerm: () => {},
  selectedLocation: null,
  setSelectedLocation: () => {},
  selectedDate: undefined,
  setSelectedDate: () => {},
  filteredEvents: [],
  handleSubmit: () => {},
  handleClearSearch: () => {},
  isLoading: true,
  error: null,
  showEventList: false,
  setShowEventList: () => {},
  selectedType: null,
  setSelectedType: () => {},
});

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showEventList, setShowEventList] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );

  const [appliedFilters, setAppliedFilters] = useState<{
    searchTerm: string;
    selectedLocation: string | null;
    selectedDate: string | undefined;
    selectedType: string | null;
  }>({
    searchTerm: "",
    selectedLocation: null,
    selectedDate: undefined,
    selectedType: null,
  });

  const filteredEvents = useMemo(() => {
    const today = new Date();

    return events.filter((event) => {
      const eventDate = new Date(event.date);
      if (eventDate < today) return false;

      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      const matchesLocation = appliedFilters.selectedLocation
        ? event.location.toLowerCase() ===
          appliedFilters.selectedLocation.toLowerCase()
        : true;

      const matchesDate = appliedFilters.selectedDate
        ? eventDate.toDateString() ===
          new Date(appliedFilters.selectedDate).toDateString()
        : true;

      const matchesType = appliedFilters.selectedType
        ? event.type.toLowerCase() === appliedFilters.selectedType.toLowerCase()
        : true;

      return matchesSearch && matchesLocation && matchesDate && matchesType;
    });
  }, [appliedFilters, events]);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();
        setEvents(data);
      } catch {
        setError("Failed to fetch events");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({
      searchTerm,
      selectedLocation,
      selectedDate,
      selectedType,
    });
    setTimeout(() => setIsLoading(false), 2500);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSelectedLocation(null);
    setSelectedDate(undefined);
    setSelectedType(null);
    setShowEventList(false);

    setAppliedFilters({
      searchTerm: "",
      selectedLocation: null,
      selectedDate: undefined,
      selectedType: null,
    });
  };

  return (
    <EventContext.Provider
      value={{
        error,
        events,
        isLoading,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEventList,
        setShowEventList,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
