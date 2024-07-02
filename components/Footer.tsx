import React from 'react';

export function Footer() {
    const copyright = (
        <div>Copyright ©️ 2024 K7RHY - All Rights Reserved</div>
      );
    
      return (
        <>
          <footer className="desktop">
            <div className="flex gap">
              {copyright}
            </div>
          </footer>
          <footer className="mobile gap">
            {copyright}
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