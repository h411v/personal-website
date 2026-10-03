import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

// Data de nascimento: a idade na bio é calculada a cada build
const BIRTHDAY = { year: 2004, month: 5, day: 3 };

function ageOn(date: Date): number {
  const [year, month, day] = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' })
    .format(date)
    .split('-')
    .map(Number);
  const hadBirthday =
    month > BIRTHDAY.month || (month === BIRTHDAY.month && day >= BIRTHDAY.day);
  return year - BIRTHDAY.year - (hadBirthday ? 0 : 1);
}

const age = ageOn(new Date());

// Texto do index. Edite à vontade: bio curta + "fatos" rápidos sobre você.
export const profile = {
  name: 'rotiv',

  // "Ouvindo agora" no index. Coloque seu usuário do Last.fm aqui e a chave da API
  // no arquivo .env (veja .env.example). Deixe vazio para esconder.
  lastfm: {
    user: 'h4kv',
  },

  bio: {
    en: `Hi, I'm Vitor — a ${age}-year-old software developer from São Paulo, Brazil. I've been programming since I was 12, and today I build enterprise systems at BR GAAP while studying Computer Science.`,
    pt: `Oi, eu sou o Vitor — desenvolvedor de software de ${age} anos, de São Paulo. Programo desde os 12 e hoje construo sistemas empresariais na BR GAAP enquanto curso Ciência da Computação.`,
  } satisfies Localized,

  // Aparecem como "rótulo  valor" em mono. Adicione/remova linhas livremente.
  facts: [
    { label: { en: 'os', pt: 'sistema' }, value: { en: 'arch linux', pt: 'arch linux' } },
    { label: { en: 'wm', pt: 'wm' }, value: { en: 'sway', pt: 'sway' } },
    { label: { en: 'editor', pt: 'editor' }, value: { en: 'neovim', pt: 'neovim' } },
    {
      label: { en: 'studying', pt: 'estudando' },
      value: { en: 'computer science', pt: 'ciência da computação' },
    },
    { label: { en: 'reading', pt: 'lendo' }, value: { en: 'how linux works', pt: 'how linux works' } },
    {
      label: { en: 'making', pt: 'fazendo' },
      value: { en: 'a game · out jun 2027', pt: 'um jogo · sai em jun/2027' },
    },
    { label: { en: 'based in', pt: 'moro no' }, value: { en: 'brazil', pt: 'brasil' } },
  ] satisfies { label: Localized; value: Localized }[],
};
