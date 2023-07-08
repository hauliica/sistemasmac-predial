import React from 'react';

interface LayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  sidebar,
  children,
}) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>{header}</div>
      <div
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <div>{sidebar}</div>
        <div>{children}</div>
      </div>
      <div>{footer}</div>
    </div>
  );
};

export default Layout;
