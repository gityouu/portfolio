import { useEffect } from 'react';

export const useImageProtection = () => {
    useEffect(() => {
        // Prevent context menu (right-click) on images
        const handleContextMenu = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        // Prevent dragging images
        const handleDragStart = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        // Prevent common save / print shortcuts (Ctrl+S, Ctrl+P, etc.)
        const handleKeyDown = (e) => {
            if (
                (e.ctrlKey || e.metaKey) &&
                (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};