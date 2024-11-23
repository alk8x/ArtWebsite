// JavaScript for Filtering and Sorting by Date
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

    // Sort gallery items by date (newest first)
    galleryItems.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; // Newer dates first
    });

    // Append sorted items back to the gallery grid
    galleryItems.forEach(item => galleryGrid.appendChild(item));

    // Add filtering functionality
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all filter items
            filterItems.forEach(filter => filter.classList.remove('active'));
            // Add 'active' class to clicked filter
            item.classList.add('active');

            // Get filter category
            const filter = item.getAttribute('data-filter');

            // Show/Hide gallery items based on filter
            galleryItems.forEach(galleryItem => {
                if (filter === 'all' || galleryItem.getAttribute('data-category') === filter) {
                    galleryItem.classList.remove('hidden');
                } else {
                    galleryItem.classList.add('hidden');
                }
            });
        });
    });
});


