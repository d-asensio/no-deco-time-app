"use client"

import * as React from "react";

import {Label} from "@/components/ui/label";
import {InputWithUnits} from "@/components/app/input-with-units";

interface GasOxygenPercentageFieldProps {
  name: string,
  label: string
}

export function GasOxygenPercentageField({name, label}: GasOxygenPercentageFieldProps) {
  return (
    <div className="grid items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <InputWithUnits
        id={name}
        units="% O2"
        type="number"
        min={1}
        max={100}
        step={1}
      />
    </div>
  );
}
