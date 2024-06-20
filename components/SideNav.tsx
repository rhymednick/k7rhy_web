import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Introduction',
    links: [
      {href: '/docs', children: 'The Basics'},
      {href: '/docs/antennas', children: 'My Antennas'},
      {href: '/docs/log', children: 'Call Log'}
    ],
  },
  {
    title: 'Kits',
    links: [
      {href: '/DL20W', children: '20W Dummy Load Kit (BNC)'}
    ],
  }, 
  {
    title: 'Documentation',
    links: [
      {href: '/docs/dl20w_build_guide', children: '20W Dummy Load Build Guide'}
    ],
  }, 
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0 0 0.5rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
