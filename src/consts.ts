// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Nadia Lotfi';
export const SITE_DESCRIPTION = 'The engineering portfolio of Nadia Lotfi.';

export const CV_URL = '/Nadia_Lotfi_Resume.pdf';

export const CONTACT = {
  organization: 'Nadia Lotfi',
  addressLines: [
    'Northwestern University',
    'Biomedical Engineering',
  ],
  emails: [
    'nadialotfi2028@u.northwestern.edu',
  ],
};

export type SocialIcon =
  | 'website'
  | 'scholar'
  | 'email'
  | 'github'
  | 'linkedin'
  | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'Email',
    href: 'mailto:nadialotfi2028@u.northwestern.edu',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadia-lotfi/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/nadialotfi1',
    icon: 'github',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Nadia Lotfi',
  designerUrl: 'https://nadialotfi1.github.io',
  sourceLabel: '',
  sourceUrl: '',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
