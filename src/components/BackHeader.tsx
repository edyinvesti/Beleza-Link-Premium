import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackHeaderProps {
    title: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center p-4 bg-zinc-900 border-b border-zinc-800">
            <button onClick={() => navigate(-1)} className="mr-4">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-bold">{title}</h1>
        </div>
    );
};

export default BackHeader;
