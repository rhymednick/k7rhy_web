// site.config.ts
export default {
    // Your existing configuration
    pages: [
      {
        title: 'Introduction',
        href: '/',
      },
      {
        title: 'Products',
        href: '/products',
        children: [
          {
            title: '20W Dummy Load Kit',
            href: '/DL20W',
          },
        ],
      },
      {
        title: 'Guides',
        href: '/guides',
        children: [
            {
                title: '20W Dummy Load (BNC) Assembly',
                href: '/guides/dl20w_bnc'
            },
            // {
            //     title: '20W Dummy Load (SMA) Assembly',
            //     href: '/docs/dl20w_sma',
            // },
        ],
      }
      // Other top-level pages
    ],
  };