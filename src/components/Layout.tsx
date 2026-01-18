import React from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#09090b] text-white">
            {/* Sidebar - Visible on Desktop (md:block) */}
            <Sidebar />

            {/* Sidebar width is 64 (w-64 = 16rem = 256px) */}
            <main className="md:ml-64 min-h-screen">
                {children}
            </main>

            {/* Mobile Navigation - Visible on Mobile (md:hidden) */}
            <MobileNav />
        </div>
    );
};

export default Layout;
