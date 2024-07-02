// components/SidebarNavigation.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Page {
    title: string;
    href: string;
    children?: Page[];
}

interface SidebarNavigationProps {
    pages: Page[];
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ pages }) => {
    const router = useRouter();

    const renderNestedItems = (items: Page[], level: string = 'x') => {

        return items.map((item) => (
            <span key={item.href}>
                <Link href={item.href} className={router.pathname === item.href ? 'toc active' : 'toc'}>
                    <div className={'toc ' + level + (router.pathname === item.href ? ' active' : '')}>{item.title}</div>
                </Link>
                {item.children && item.children.length > 0 && (
                    renderNestedItems(item.children, level + 'x')
                )}
            </span>
        ));
    };

    return (
        <nav className="sidebar-navigation" >
            <div className="flex column">
                {renderNestedItems(pages)}
            </div>
            <style jsx>{`
                .sidebar-navigation div {
                    list-style-type: none;
                    padding-left: 0;
                    margin-top: 18px;
                }

                nav {
                    position: sticky;
                    top: var(--top-nav-height);
                    height: calc(100vh - var(--top-nav-height));
                    flex: 0 0 240px;
                    overflow-y: auto;
                    padding: 2.5rem 2rem 2rem;
                    
                }
                
                @media screen and (max-width: 600px) {
                    nav {
                    display: none;
                    }
                }
                

            `}</style>
        </nav>
    );
};

export default SidebarNavigation;