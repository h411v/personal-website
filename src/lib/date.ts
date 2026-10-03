// Fuso usado para exibir datas/horas (o build pode rodar em qualquer fuso)
export const TIMEZONE = 'America/Sao_Paulo';

function parts(date: Date, timeZone = TIMEZONE) {
  const values = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  return values as Record<'year' | 'month' | 'day' | 'hour' | 'minute', string>;
}

/** 2026·10·02 — para datas com hora (notas), no fuso local */
export function formatDay(date: Date): string {
  const { year, month, day } = parts(date);
  return `${year}·${month}·${day}`;
}

/**
 * 2026·10·02 — para datas só com dia (posts: `date: 2026-10-02`).
 * Elas são lidas como meia-noite UTC; converter para o fuso local voltaria um dia.
 */
export function formatDate(date: Date): string {
  const { year, month, day } = parts(date, 'UTC');
  return `${year}·${month}·${day}`;
}

/** '2026-03' -> 'Mar 2026' / 'mar. 2026'; '2019' -> '2019' */
export function formatMonth(month: string, lang: 'en' | 'pt'): string {
  const [year, m] = month.split('-').map(Number);
  if (!m) return String(year);
  return new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, m - 1, 1)));
}

/** 21:43 */
export function formatTime(date: Date): string {
  const { hour, minute } = parts(date);
  return `${hour}:${minute}`;
}
