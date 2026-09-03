"use client";

import {
  DrawablyButton,
  DrawablyCard,
  DrawablyCircle,
  DrawablyRadio,
} from "drawably/react";
import { useEffect, useId, useRef, useState } from "react";

export const DEFAULT_OUTLINE = "#2724d1";
const STORAGE_KEY = "outline-color";

const inks = [
  { name: "pen", hex: "#2724d1" },
  { name: "ink", hex: "#18181b" },
  { name: "red", hex: "#c23a2b" },
  { name: "green", hex: "#188a42" },
  { name: "teal", hex: "#0f766e" },
  { name: "ochre", hex: "#a16207" },
  { name: "violet", hex: "#7c3aed" },
  { name: "gray", hex: "#474645" },
] as const;

function isHexColor(value: string) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

export function applyOutlineColor(color: string) {
  const root = document.documentElement;
  root.style.setProperty("--drawably-stroke", color);
  root.style.setProperty("--drawably-fill", color);
  root.style.setProperty("--drawably-ink", color);
  root.style.setProperty("--pen", color);
}

function chooseColor(next: string, setColor: (color: string) => void) {
  setColor(next);
  applyOutlineColor(next);
  window.localStorage.setItem(STORAGE_KEY, next);
}

export function OutlineColorPicker() {
  const groupName = useId();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState(DEFAULT_OUTLINE);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isHexColor(stored)) {
      setColor(stored);
      applyOutlineColor(stored);
    }
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-flex">
      <DrawablyButton
        variant={open ? "solid" : "outline"}
        aria-label="pick outline color"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex items-center gap-2 font-mono text-sm">
          ink
          <DrawablyCircle>
            <span
              aria-hidden
              className="inline-block size-2.5 rounded-full align-middle"
              style={{ backgroundColor: color }}
            />
          </DrawablyCircle>
        </span>
      </DrawablyButton>

      {open ? (
        <div className="absolute top-full right-0 z-20 mt-3 w-56">
          <DrawablyCard
            id={panelId}
            role="dialog"
            aria-label="outline inks"
            className="flex flex-col gap-3"
          >
            <p className="font-mono text-xs text-muted">pick an ink</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {inks.map((ink) => {
                const selected = color.toLowerCase() === ink.hex;
                return (
                  <label
                    key={ink.hex}
                    className="flex cursor-pointer items-center gap-2 font-mono text-sm"
                  >
                    <DrawablyRadio
                      name={groupName}
                      value={ink.hex}
                      checked={selected}
                      stroke={ink.hex}
                      fill={ink.hex}
                      onChange={() => chooseColor(ink.hex, setColor)}
                    />
                    {ink.name}
                  </label>
                );
              })}
            </div>
          </DrawablyCard>
        </div>
      ) : null}
    </div>
  );
}
