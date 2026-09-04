"use client";

import { startTransition, useEffect, useState } from "react";
import { DrawablyButton, DrawablyCard, DrawablyUnderline } from "drawably/react";
import { quotes } from "@/lib/site";

function pickIndex(exclude?: number) {
  const count = quotes.length;
  let next = Math.floor(Math.random() * count);
  if (exclude === undefined || count < 2) return next;

  while (next === exclude) {
    next = Math.floor(Math.random() * count);
  }
  return next;
}

export function QuotesView() {
  const [index, setIndex] = useState(0);
  const [drawKey, setDrawKey] = useState(0);
  const quote = quotes[index] ?? quotes[0];

  useEffect(() => {
    startTransition(() => {
      setIndex(pickIndex());
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 py-4 lg:gap-10">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          quotes that i like
        </h1>
        <p className="text-muted lg:max-w-sm lg:text-right">
          one at a time. pull another when you want a fresh sketch.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-6">
        <DrawablyCard
          key={`${index}-${drawKey}`}
          className="flex w-full flex-col gap-4"
        >
          <p className="text-2xl leading-9 sm:text-3xl sm:leading-10">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="font-mono text-sm text-muted">
            <DrawablyUnderline>{quote.author}</DrawablyUnderline>
          </p>
        </DrawablyCard>

        <DrawablyButton
          variant="outline"
          onClick={() => {
            startTransition(() => {
              setIndex((current) => pickIndex(current));
              setDrawKey((key) => key + 1);
            });
          }}
        >
          another
        </DrawablyButton>
      </div>
    </div>
  );
}
