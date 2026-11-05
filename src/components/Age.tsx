'use client';

import { useEffect, useState } from 'react';
import { person } from '@/data/site';

function ageOn(date: Date) {
  const b = new Date(person.birthDate);
  let a = date.getFullYear() - b.getFullYear();
  if (date.getMonth() < b.getMonth() || (date.getMonth() === b.getMonth() && date.getDate() < b.getDate())) a--;
  return a;
}

// Rendered at build time, then refreshed in the browser so it never goes stale.
export default function Age() {
  const [age, setAge] = useState(() => ageOn(new Date()));
  useEffect(() => setAge(ageOn(new Date())), []);
  return <span suppressHydrationWarning>{age}</span>;
}
