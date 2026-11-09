/** "9 November 2026" from an ISO date, independent of the visitor's time zone. */
export const fmtDate = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
