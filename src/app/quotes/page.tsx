import type { Metadata } from "next";
import { QuotesView } from "@/components/quotes-view";

export const metadata: Metadata = {
  title: "quotes",
  description: "quotes that davis cook likes.",
};

export default function QuotesPage() {
  return <QuotesView />;
}
