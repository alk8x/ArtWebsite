// JavaScript for Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all filter items
            filterItems.forEach(filter => filter.classList.remove('active'));
            // Add 'active' class to clicked filter
            item.classList.add('active');

            // Get filter category
            const filter = item.getAttribute('data-filter');

            // Show/Hide gallery items
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

