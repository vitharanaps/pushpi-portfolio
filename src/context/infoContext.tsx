"use client";

import { supabase } from "@/utils/supebase/client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface InfoTypes {
  connectDesc: string | null;
  created_at: string;
  cursorText: string | null;
  github: string | null;
  id: number;
  linkedIn: string | null;
  myDesc: string | null;
  myImage: string | null;
  username: string;
  textGenerator: string;
  cvLink: string;
}

// Define a type for the context value, which includes both the info state and the setter
interface InfoContextType {
  info: InfoTypes | null;
  setInfo: React.Dispatch<React.SetStateAction<InfoTypes | null>>;
  loading: boolean;
}

const InfoContext = createContext<InfoContextType | undefined>(undefined);

export const InfoProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<InfoTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data: info, error } = await supabase
        .from("info")
        .select("*")
        .eq("id", 1);

      if (error) {
        console.error("Error fetching data:", error.message);
        return;
      }

      if (info && info.length > 0) {
        setInfo(info[0]);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <InfoContext.Provider value={{ info, setInfo, loading }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error("useInfo must be used within a UserProvider");
  }
  return context;
};
