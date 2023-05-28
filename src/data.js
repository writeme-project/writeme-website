import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/writeme-project/writeme/releases' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/BabelDev' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/llcors' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/writeme-project' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/writeme-project"> writeme-project</a> · All rights reserved.
  `,
};
