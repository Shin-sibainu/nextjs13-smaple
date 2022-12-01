"use client";

import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>New Todo</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      <input type="submit" />
    </>
  );
}
