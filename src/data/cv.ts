import type { Lang } from '../i18n/ui';

export type Localized = Record<Lang, string>;

/** 'AAAA-MM' ou só 'AAAA' quando o mês não importa. Use null em `end` para "atual". */
type Month = `${number}-${number}` | `${number}`;

export interface Job {
  role: Localized;
  company: string | Localized;
  url?: string;
  location?: Localized;
  start: Month;
  end: Month | null;
  summary?: Localized;
  highlights?: Localized[];
  stack?: string[];
}

export interface OtherJob {
  role: Localized;
  company: string;
  start: Month;
  end: Month | null;
}

export interface Education {
  course: Localized;
  school: string;
  start?: Month;
  end?: Month | null;
  /** Ex.: "previsão de conclusão: 2030" */
  note?: Localized;
}

// ------------------------------------------------------------------
// Tudo que aparece na página /portfolio. Itens com [ ] são para preencher.
// ------------------------------------------------------------------
export const cv = {
  name: 'Vitor dos Santos Silva',
  headline: {
    en: 'Software Developer · Computer Science student',
    pt: 'Desenvolvedor de Software · Estudante de Ciência da Computação',
  } satisfies Localized,
  location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' } satisfies Localized,

  summary: {
    en: "Programming since I was 13 and working as a developer since 2019, currently building enterprise management systems with SAPUI5, C# and MongoDB at BR GAAP, while studying Computer Science at UNIP. I like understanding how things work under the hood — that's why I run Arch Linux and spend my days in Neovim. Looking to keep growing as a software engineer on projects that solve real problems.",
    pt: 'Programo desde os 13 anos e trabalho como desenvolvedor desde 2019, hoje construindo sistemas de gestão empresarial com SAPUI5, C# e MongoDB na BR GAAP, enquanto curso Ciência da Computação na UNIP. Gosto de entender como as coisas funcionam por dentro — por isso uso Arch Linux e passo meus dias no Neovim. Busco continuar crescendo como engenheiro de software em projetos que resolvem problemas reais.',
  } satisfies Localized,

  contact: {
    email: 'vitor.sannctorum@hotmail.com',
    github: 'https://github.com/h411v',
    // Opcional: URL do perfil (vazio = não aparece)
    linkedin: '',
  },

  experience: [
    {
      role: { en: 'Software Developer (cooperative member)', pt: 'Desenvolvedor de Software (cooperado)' },
      company: 'BR GAAP',
      start: '2026-03',
      end: null,
      summary: {
        en: 'Building complete enterprise management systems for business clients.',
        pt: 'Desenvolvimento de sistemas completos de gestão empresarial para clientes corporativos.',
      },
      highlights: [
        {
          en: 'Develop front-end applications with SAPUI5 and back-end services in C#',
          pt: 'Desenvolvimento de front-end com SAPUI5 e serviços de back-end em C#',
        },
        {
          en: 'Model and query data with MongoDB',
          pt: 'Modelagem e consulta de dados com MongoDB',
        },
        {
          en: 'Work in a team following an agile methodology',
          pt: 'Trabalho em equipe seguindo metodologia ágil',
        },
      ],
      stack: ['SAPUI5', 'C#', 'MongoDB'],
    },
    {
      role: { en: 'Software Developer', pt: 'Desenvolvedor de Software' },
      company: { en: 'Self-employed', pt: 'Autônomo' },
      start: '2019',
      end: null,
      summary: {
        en: 'Developing software projects for clients as an independent developer.',
        pt: 'Desenvolvimento de projetos de software para clientes de forma independente.',
      },
    },
  ] as Job[],

  // Trabalhos fora da área: uma linha cada. Deixe a lista vazia para esconder a seção.
  otherExperience: [
    {
      role: {
        en: 'Parking Operator → CGC Operator',
        pt: 'Operador de Estacionamento → Operador CGC',
      },
      company: 'Estapar',
      start: '2022-06',
      end: '2023-03',
    },
    {
      role: { en: 'Administrative Assistant (temporary)', pt: 'Assistente Administrativo (temporário)' },
      company: 'Spy Car',
      start: '2023-10',
      end: '2023-12',
    },
  ] as OtherJob[],

  education: [
    {
      course: { en: 'B.Sc. in Computer Science', pt: 'Bacharelado em Ciência da Computação' },
      school: 'UNIP',
      start: '2026',
      end: null,
      note: { en: 'Expected graduation: 2030', pt: 'Previsão de conclusão: 2030' },
    },
  ] as Education[],

  // Grupos de habilidades. Coloque só o que você conseguiria discutir numa entrevista.
  skills: [
    {
      label: { en: 'Languages', pt: 'Linguagens' },
      items: ['TypeScript', 'JavaScript', 'C#', 'C', 'Ruby'],
    },
    { label: { en: 'Frameworks & DB', pt: 'Frameworks e BD' }, items: ['SAPUI5', 'MongoDB'] },
    { label: { en: 'Tools', pt: 'Ferramentas' }, items: ['Linux (Arch)', 'Neovim', 'Git'] },
  ] satisfies { label: Localized; items: string[] }[],

  languages: [
    { name: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' } },
    { name: { en: 'English', pt: 'Inglês' }, level: { en: 'Intermediate · advanced reading', pt: 'Intermediário · leitura avançada' } },
  ] satisfies { name: Localized; level: Localized }[],
};
