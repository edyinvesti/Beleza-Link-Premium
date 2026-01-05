import React, { useEffect } from 'react';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
            <h1 className="text-3xl font-bold animate-pulse">Beleza Link</h1>
        </div>
    );
};

export default SplashScreen;
