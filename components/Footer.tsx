import React from 'react';
import Link from 'next/link';

export function TableOfContents({children: links, landing}) {
    const copyright = (
        <div>©️ 2024 Rhy Mednick - All Rights Reserved</div>
      );
    
      const disclaimer = (
        <span className="disclaimer">
          This site was{' '}
          <a href="" className="live-edit">
            built using Markdoc
          </a>
          <style jsx>
            {`
              .disclaimer {
                color: rgba(24, 24, 27, 0.5);
                padding-left: 2rem;
                font-size: 15px;
                font-weight: 400;
                line-height: 27px;
              }
    
              .disclaimer button {
                display: inline-block;
                padding: 0;
                color: inherit;
                text-decoration: underline;
                font-weight: regular;
              }
    
              :global(body.dark) .disclaimer {
                color: var(--white);
              }
    
              @media screen and (max-width: 1000px) {
                .disclaimer {
                  display: none;
                }
              }
            `}
          </style>
        </span>
      );
    
    
      return (
        <>
          <footer className="desktop">
            <div className="flex">
              <div className="left gap">{copyright}</div>
              <div className="right gap">
                {disclaimer}
              </div>
            </div>
          </footer>
          <footer className="mobile gap">
            {copyright}
            {disclaimer}
          </footer>
          <style jsx>
            {`
              :global(.gap) {
                display: flex;
                align-items: center;
                gap: 1.5rem;
              }
    
              footer {
                position: relative;
                display: flex;
                z-index: 100;
                width: 100%;
                color: var(--dark);
                padding: 1rem 0;
              }
    
              footer.desktop {
                flex-direction: column;
              }
    
              footer.mobile {
                display: none;
                flex-direction: column;
                padding: 0;
              }
    
              .right {
                margin-left: auto;
              }
    
              @media screen and (max-width: 600px) {
                footer.mobile {
                  display: flex;
                }
                footer.desktop {
                  display: none;
                }
              }
            `}
          </style>
        </>
      );
}