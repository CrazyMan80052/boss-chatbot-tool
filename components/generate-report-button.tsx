"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function GenerateReportButton({ chatId }: { chatId?: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!chatId) {
    return <span className="text-muted-foreground">—</span>;
  }

  const handleClick = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId }),
      });

      if (!resp.ok) {
        // TODO: surface an error to the user (toast)
        console.error("Failed to create report", await resp.text());
        setLoading(false);
        return;
      }

      const { documentId } = await resp.json();
      router.push(`/document?id=${documentId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button disabled={loading} onClick={handleClick}>
      {loading ? "Generating..." : "Generate report"}
    </Button>
  );
}
