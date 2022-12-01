"use client";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <html>
      <head />
      <body>
        <div>Header</div>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ＋
        </button>
        {children}
      </body>
    </html>
  );
}
