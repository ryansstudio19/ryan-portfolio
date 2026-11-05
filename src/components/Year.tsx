'use client';

import { useEffect, useState } from 'react';

// Current year, refreshed in the browser so the footer never shows a stale year.
export default function Year() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
