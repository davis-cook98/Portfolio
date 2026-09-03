"use client";

import { DrawablyCard, DrawablyUnderline } from "drawably/react";
import { quotes } from "@/lib/site";

export function QuotesView() {
  return (
    <div className="flex flex-col gap-8 py-4">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        quotes that i like
      </h1>

      <div className="flex flex-col gap-6">
        {quotes.map((quote) => (
          <DrawablyCard key={quote.author} className="flex flex-col gap-3">
            <p className="text-lg leading-8">&ldquo;{quote.text}&rdquo;</p>
            <p className="font-mono text-sm text-muted">
              <DrawablyUnderline>{quote.author}</DrawablyUnderline>
            </p>
          </DrawablyCard>
        ))}
      </div>
    </div>
  );
}
