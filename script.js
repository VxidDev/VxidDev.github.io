// Toggle Drawer Activator Function
function toggleAbstract(id) {
    const activeDrawer = document.getElementById(id);
    if (!activeDrawer) return;

    if (activeDrawer.classList.contains('open')) {
        activeDrawer.classList.remove('open');
    } else {
        activeDrawer.classList.add('open');
    }
}

// Global Keydown Handler (Closes opened panels on pressing Escape)
window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.abstract-drawer').forEach(panel => {
            panel.classList.remove('open');
        });
    }
});

// Initialize setup elements when document parses cleanly
window.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});