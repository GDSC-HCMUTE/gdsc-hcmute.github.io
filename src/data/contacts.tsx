type Contact = {
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
};

export const CONTACTS = {
  Facebook: {
    link: 'https://www.facebook.com/gdsc.hcmute',
    icon: require('@site/static/img/logo/facebook.svg').default,
  } as Contact,
  Github: {
    link: 'https://github.com/GDSC-HCMUTE',
    icon: require('@site/static/img/logo/github.svg').default,
  } as Contact,
  Email: {
    link: 'mailto:dsc.hcmute@gmail.com',
    icon: require('@site/static/img/logo/email.svg').default,
  } as Contact,
  Website: {
    link: 'https://gdsc.community.dev/ho-chi-minh-city-university-of-technology-and-education-hcmute/',
    icon: require('@site/static/img/logo/www.svg').default,
  } as Contact,
}