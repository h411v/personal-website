export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.home': 'index',
    'nav.blog': 'blog',
    'nav.notes': 'notes',
    'nav.portfolio': 'portfolio',
    'nav.about': 'about',
    'nav.uses': 'uses',
    'home.latestPosts': 'Latest posts',
    'home.latestNotes': 'Latest notes',
    'home.allPosts': 'all posts',
    'home.allNotes': 'all notes',
    'home.setup': 'see my setup',
    'np.now': 'listening now',
    'np.last': 'last played',
    'blog.title': 'Blog',
    'blog.description': "Longer writing about what I'm learning and building.",
    'blog.onlyIn': 'Not translated yet — opens the original',
    'blog.minRead': 'min read',
    'blog.updated': 'updated',
    'blog.older': 'older',
    'blog.newer': 'newer',
    'blog.morePosts': 'More posts',
    'notes.title': 'Notes',
    'notes.description': 'Quick thoughts, written as they come.',
    'notes.one': 'note',
    'notes.many': 'notes',
    'portfolio.title': 'Portfolio',
    'cv.summary': 'summary',
    'cv.experience': 'experience',
    'cv.otherExperience': 'other experience',
    'cv.education': 'education',
    'cv.skills': 'skills',
    'cv.languages': 'languages',
    'cv.contact': 'contact',
    'cv.contactText': 'The best way to reach me is by email:',
    'cv.present': 'present',
    'cv.print': 'save PDF',
    'notFound.title': 'Wrong turn.',
    'notFound.error': 'error',
    'notFound.text': "This page doesn't exist — it may have moved, or it was never built in the first place. Not even the construction crew knows where it is.",
    'wip.status': 'status: under construction',
    'wip.eta': 'eta: soon',
    'wip.detour': 'detour:',
    'wip.blog.title': 'Road closed for construction',
    'wip.blog.text': "I'm still laying the first bricks around here. Posts are on their way — in the meantime, the detour goes through the rest of the site.",
    'wip.notes.title': 'Property under construction',
    'wip.notes.text': 'The notebook is open, but the pages are still blank. Quick notes will start showing up here soon.',
    'theme.toggle': 'Toggle theme',
    'footer.top': 'top',
  },
  pt: {
    'nav.home': 'início',
    'nav.blog': 'blog',
    'nav.notes': 'notas',
    'nav.portfolio': 'portfólio',
    'nav.about': 'sobre',
    'nav.uses': 'setup',
    'home.latestPosts': 'Últimos posts',
    'home.latestNotes': 'Últimas notas',
    'home.allPosts': 'todos os posts',
    'home.allNotes': 'todas as notas',
    'home.setup': 'ver meu setup',
    'np.now': 'ouvindo agora',
    'np.last': 'última que ouvi',
    'blog.title': 'Blog',
    'blog.description': 'Textos mais longos sobre o que estou aprendendo e construindo.',
    'blog.onlyIn': 'Ainda sem tradução — abre o original',
    'blog.minRead': 'min de leitura',
    'blog.updated': 'atualizado em',
    'blog.older': 'anterior',
    'blog.newer': 'próximo',
    'blog.morePosts': 'Mais posts',
    'notes.title': 'Notas',
    'notes.description': 'Pensamentos rápidos, escritos do jeito que vêm.',
    'notes.one': 'nota',
    'notes.many': 'notas',
    'portfolio.title': 'Portfólio',
    'cv.summary': 'resumo',
    'cv.experience': 'experiência',
    'cv.otherExperience': 'outras experiências',
    'cv.education': 'formação',
    'cv.skills': 'habilidades',
    'cv.languages': 'idiomas',
    'cv.contact': 'contato',
    'cv.contactText': 'O melhor jeito de falar comigo é por e-mail:',
    'cv.present': 'atual',
    'cv.print': 'salvar PDF',
    'notFound.title': 'Caminho errado.',
    'notFound.error': 'erro',
    'notFound.text': 'Essa página não existe — pode ter mudado de lugar ou nunca ter sido construída. Nem a equipe de obras sabe onde ela está.',
    'wip.status': 'status: em obras',
    'wip.eta': 'previsão: em breve',
    'wip.detour': 'desvio:',
    'wip.blog.title': 'Rua interditada para obras',
    'wip.blog.text': 'Ainda estou assentando os primeiros tijolos por aqui. Os posts estão a caminho — enquanto isso, o desvio passa pelo resto do site.',
    'wip.notes.title': 'Propriedade em construção',
    'wip.notes.text': 'O caderno está aberto, mas as páginas ainda estão em branco. As notas rápidas começam a aparecer aqui em breve.',
    'theme.toggle': 'Alternar tema',
    'footer.top': 'topo',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'pt' ? 'pt' : defaultLang;
}

/** Caminho sem o prefixo de idioma: /pt/blog -> /blog */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/pt(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Adiciona o prefixo de idioma: ('/blog', 'pt') -> /pt/blog */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}
