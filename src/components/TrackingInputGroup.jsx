import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TrackingInputGroup = ({ onTrack }) => {
  const [trackingCode, setTrackingCode] = useState("");

  const handleTrack = () => {
    if (trackingCode.trim()) {
      onTrack(trackingCode);
    }
  };

  return (
    <div className="mt-5 flex gap-3 w-full max-w-md">
      <Input
        className="bg-dubraWhite p-5 text-lg placeholder:text-lg"
        placeholder="Ej: 123456789"
        value={trackingCode}
        onChange={(e) => setTrackingCode(e.target.value)}
      />
      <Button
        className="button-dubraSecondary group font-bold p-5 text-lg"
        onClick={handleTrack}
      >
        <p className="hover:scale-105 transition-all duration-200">Seguir</p>
      </Button>
    </div>
  );
};

export default TrackingInputGroup;
