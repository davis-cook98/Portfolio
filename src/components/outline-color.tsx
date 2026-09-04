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

const DAY = {
  paper: "#e3e3e1",
  ink: "#18181b",
  muted: "#474645",
} as const;

const NIGHT = {
  paper: "#1a1a18",
  ink: "#ece6da",
  muted: "#9b9892",
  hex: "#ece6da",
} as const;

const inks = [
  { name: "pen", hex: "#2724d1" },
  { name: "ink", hex: "#18181b" },
  { name: "red", hex: "#c23a2b" },
  { name: "green", hex: "#188a42" },
  { name: "teal", hex: "#0f766e" },
  { name: "ochre", hex: "#a16207" },
  { name: "violet", hex: "#7c3aed" },
  { name: "gray", hex: "#474645" },
  { name: "night", hex: NIGHT.hex, swatch: NIGHT.paper },
] as const;

function isHexColor(value: string) {
  return /^#[0-9a-f]{6}$/i.test(value);
}

function isNight(color: string) {
  return color.toLowerCase() === NIGHT.hex;
}

export function applyOutlineColor(color: string) {
  const root = document.documentElement;
  const night = isNight(color);
  const paper = night ? NIGHT.paper : DAY.paper;
  const text = night ? NIGHT.ink : DAY.ink;
  const muted = night ? NIGHT.muted : DAY.muted;

  root.style.setProperty("--drawably-stroke", color);
  root.style.setProperty("--drawably-fill", color);
  root.style.setProperty("--drawably-ink", color);
  root.style.setProperty("--drawably-paper", paper);
  root.style.setProperty("--pen", color);
  root.style.setProperty("--paper", paper);
  root.style.setProperty("--ink", text);
  root.style.setProperty("--muted", muted);
  root.style.colorScheme = night ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", paper);
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
  const currentSwatch = isNight(color)
    ? `linear-gradient(135deg, ${NIGHT.ink} 50%, ${NIGHT.paper} 50%)`
    : color;

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
        key={open ? "ink-open" : "ink-closed"}
        variant={open ? "solid" : "outline"}
        aria-label="pick outline color"
        aria-expanded={open}
        aria-controls={panelId}
        // Keep the label on page text colors, not the selected pen. Drawably
        // buttons default to --drawably-ink for text, which becomes unreadable
        // once the pen changes (and on solid fills that match dark ink).
        style={{ color: open ? "var(--paper)" : "var(--ink)" }}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex items-center gap-2 font-mono text-sm">
          ink
          <DrawablyCircle>
            <span
              aria-hidden
              className="inline-block size-2.5 rounded-full align-middle transition-[background] duration-700 ease-out"
              style={{ background: currentSwatch }}
            />
          </DrawablyCircle>
        </span>
      </DrawablyButton>

      {open ? (
        <div className="absolute top-full right-0 z-50 mt-3 w-56">
          <DrawablyCard
            id={panelId}
            role="dialog"
            aria-label="outline inks"
            className="ink-menu flex flex-col gap-3"
          >
            <p className="font-mono text-xs text-muted">pick an ink</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {inks
                .filter((ink) => ink.name !== "night")
                .map((ink) => {
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
            <label className="flex cursor-pointer items-center gap-2 font-mono text-sm">
              <DrawablyRadio
                name={groupName}
                value={NIGHT.hex}
                checked={isNight(color)}
                stroke={NIGHT.paper}
                fill={NIGHT.hex}
                onChange={() => chooseColor(NIGHT.hex, setColor)}
              />
              <span
                aria-hidden
                className="size-2.5 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${NIGHT.ink} 50%, ${NIGHT.paper} 50%)`,
                }}
              />
              night
            </label>
          </DrawablyCard>
        </div>
      ) : null}
    </div>
  );
}
