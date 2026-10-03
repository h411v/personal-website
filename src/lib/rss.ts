import rss from '@astrojs/rss';
import { cv } from '../data/cv';
import { getPosts, postSlug } from './content';
import { localizePath, t, type Lang } from '../i18n/ui';

/** Feed RSS do blog em um idioma */
export async function blogFeed(lang: Lang, site: URL) {
  const posts = await getPosts(lang);
  return rss({
    title: `rotiv — ${t(lang, 'blog.title')}`,
    description: t(lang, 'blog.description'),
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${localizePath(`/blog/${postSlug(post)}`, lang)}/`,
      categories: post.data.tags,
      author: `${cv.contact.email} (${cv.name})`,
    })),
    customData: `<language>${lang === 'pt' ? 'pt-BR' : 'en'}</language>`,
  });
}
