// Image data - all the images from the directory
const images = [
    'IMG_0001.JPG', 'IMG_0002.JPG', 'IMG_0003.JPG', 'IMG_0004.JPG', 'IMG_0005.JPG',
    'IMG_0006.JPG', 'IMG_0007.JPG', 'IMG_0008.JPG', 'IMG_0009.JPG', 'IMG_0010.JPG',
    'IMG_0011.JPG', 'IMG_0012.JPG', 'IMG_0013.JPG', 'IMG_0014.JPG', 'IMG_0016.JPG',
    'IMG_0017.JPG', 'IMG_0018.JPG', 'IMG_0019.JPG', 'IMG_0020.JPG', 'IMG_0021.JPG',
    'IMG_0022.JPG', 'IMG_0023.JPG', 'IMG_0024.JPG', 'IMG_0025.JPG', 'IMG_0026.JPG',
    'IMG_0027.JPG', 'IMG_0028.JPG', 'IMG_0029.JPG', 'IMG_0030.JPG', 'IMG_0031.JPG',
    'IMG_0032.JPG', 'IMG_0033.JPG', 'IMG_0034.JPG', 'IMG_0035.JPG', 'IMG_0036.JPG',
    'IMG_0037.JPG', 'IMG_0038.JPG', 'IMG_0039.JPG', 'IMG_0040.JPG', 'IMG_0041.JPG',
    'IMG_0042.JPG', 'IMG_0043.JPG', 'IMG_0044.JPG', 'IMG_0045.JPG', 'IMG_0046.JPG',
    'IMG_0047.JPG', 'IMG_0048.JPG', 'IMG_0049.JPG', 'IMG_0050.JPG', 'IMG_0051.JPG',
    'IMG_0052.JPG', 'IMG_0053.JPG', 'IMG_0054.JPG', 'IMG_0055.JPG', 'IMG_0056.JPG',
    'IMG_0057.JPG', 'IMG_0058.JPG', 'IMG_0059.JPG', 'IMG_0060.JPG', 'IMG_0061.JPG',
    'IMG_0062.JPG', 'IMG_0063.JPG', 'IMG_0064.JPG', 'IMG_0065.JPG', 'IMG_0066.JPG',
    'IMG_0067.JPG', 'IMG_0068.JPG', 'IMG_0069.JPG', 'IMG_0070.JPG', 'IMG_9660.JPG',
    'IMG_9661.JPG', 'IMG_9662.JPG', 'IMG_9663.JPG', 'IMG_9664.JPG', 'IMG_9665.JPG',
    'IMG_9666.JPG', 'IMG_9667.JPG', 'IMG_9668.JPG', 'IMG_9672.JPG', 'IMG_9673.JPG',
    'IMG_9674.JPG', 'IMG_9675.JPG', 'IMG_9676.JPG', 'IMG_9677.JPG', 'IMG_9678.JPG',
    'IMG_9679.JPG', 'IMG_9680.JPG', 'IMG_9681.JPG', 'IMG_9682.JPG', 'IMG_9683.JPG',
    'IMG_9684.JPG', 'IMG_9685.JPG', 'IMG_9686.JPG', 'IMG_9687.JPG', 'IMG_9688.JPG',
    'IMG_9689.JPG', 'IMG_9690.JPG', 'IMG_9692.JPG', 'IMG_9693.JPG', 'IMG_9694.JPG',
    'IMG_9695.JPG', 'IMG_9696.JPG', 'IMG_9697.JPG', 'IMG_9698.JPG', 'IMG_9699.JPG',
    'IMG_9700.JPG', 'IMG_9701.JPG', 'IMG_9702.JPG', 'IMG_9703.JPG', 'IMG_9704.JPG',
    'IMG_9705.JPG', 'IMG_9706.JPG', 'IMG_9707.JPG', 'IMG_9708.JPG', 'IMG_9710.JPG',
    'IMG_9711.JPG', 'IMG_9712.JPG', 'IMG_9713.JPG', 'IMG_9714.JPG', 'IMG_9717.JPG',
    'IMG_9718.JPG', 'IMG_9719.JPG', 'IMG_9720.JPG', 'IMG_9721.JPG', 'IMG_9723.JPG',
    'IMG_9731.JPG', 'IMG_9732.JPG', 'IMG_9733.JPG', 'IMG_9736.JPG', 'IMG_9737.JPG',
    'IMG_9738.JPG', 'IMG_9739.JPG', 'IMG_9740.JPG', 'IMG_9743.JPG', 'IMG_9744.JPG',
    'IMG_9745.JPG', 'IMG_9746.JPG', 'IMG_9747.JPG', 'IMG_9748.JPG', 'IMG_9749.JPG',
    'IMG_9750.JPG', 'IMG_9751.JPG', 'IMG_9752.JPG', 'IMG_9753.JPG', 'IMG_9754.JPG',
    'IMG_9755.JPG', 'IMG_9756.JPG', 'IMG_9757.JPG', 'IMG_9758.JPG', 'IMG_9759.JPG',
    'IMG_9760.JPG', 'IMG_9761.JPG', 'IMG_9762.JPG', 'IMG_9765.JPG', 'IMG_9766.JPG',
    'IMG_9767.JPG', 'IMG_9768.JPG', 'IMG_9770.JPG', 'IMG_9771.JPG', 'IMG_9772.JPG',
    'IMG_9773.JPG', 'IMG_9775.JPG', 'IMG_9776.JPG', 'IMG_9777.JPG', 'IMG_9778.JPG',
    'IMG_9779.JPG', 'IMG_9780.JPG', 'IMG_9784.JPG', 'IMG_9785.JPG', 'IMG_9787.JPG',
    'IMG_9788.JPG', 'IMG_9789.JPG', 'IMG_9790.JPG', 'IMG_9791.JPG', 'IMG_9792.JPG',
    'IMG_9794.JPG', 'IMG_9795.JPG', 'IMG_9796.JPG', 'IMG_9797.JPG', 'IMG_9798.JPG',
    'IMG_9799.JPG', 'IMG_9801.JPG', 'IMG_9802.JPG', 'IMG_9803.JPG', 'IMG_9804.JPG',
    'IMG_9805.JPG', 'IMG_9806.JPG', 'IMG_9807.JPG', 'IMG_9808.JPG', 'IMG_9809.JPG',
    'IMG_9810.JPG', 'IMG_9811.JPG', 'IMG_9812.JPG', 'IMG_9813.JPG', 'IMG_9814.JPG',
    'IMG_9817.JPG', 'IMG_9820.JPG', 'IMG_9821.JPG', 'IMG_9822.JPG', 'IMG_9823.JPG',
    'IMG_9824.JPG', 'IMG_9825.JPG', 'IMG_9826.JPG', 'IMG_9827.JPG', 'IMG_9828.JPG',
    'IMG_9829.JPG', 'IMG_9830.JPG', 'IMG_9831.JPG', 'IMG_9832.JPG', 'IMG_9834.JPG',
    'IMG_9835.JPG', 'IMG_9837.JPG', 'IMG_9839.JPG', 'IMG_9840.JPG', 'IMG_9841.JPG',
    'IMG_9842.JPG', 'IMG_9843.JPG', 'IMG_9844.JPG', 'IMG_9845.JPG', 'IMG_9846.JPG',
    'IMG_9847.JPG', 'IMG_9848.JPG', 'IMG_9849.JPG', 'IMG_9851.JPG', 'IMG_9852.JPG',
    'IMG_9853.JPG', 'IMG_9854.JPG', 'IMG_9855.JPG', 'IMG_9856.JPG', 'IMG_9857.JPG',
    'IMG_9858.JPG', 'IMG_9859.JPG', 'IMG_9860.JPG', 'IMG_9861.JPG', 'IMG_9862.JPG',
    'IMG_9863.JPG', 'IMG_9864.JPG', 'IMG_9866.JPG', 'IMG_9867.JPG', 'IMG_9868.JPG',
    'IMG_9869.JPG', 'IMG_9870.JPG', 'IMG_9871.JPG', 'IMG_9872.JPG', 'IMG_9873.JPG',
    'IMG_9874.JPG', 'IMG_9875.JPG', 'IMG_9876.JPG', 'IMG_9877.JPG', 'IMG_9878.JPG',
    'IMG_9879.JPG', 'IMG_9880.JPG', 'IMG_9881.JPG', 'IMG_9882.JPG', 'IMG_9883.JPG',
    'IMG_9884.JPG', 'IMG_9885.JPG', 'IMG_9886.JPG', 'IMG_9887.JPG', 'IMG_9888.JPG',
    'IMG_9889.JPG', 'IMG_9890.JPG', 'IMG_9891.JPG', 'IMG_9892.JPG', 'IMG_9893.JPG',
    'IMG_9894.JPG', 'IMG_9895.JPG', 'IMG_9896.JPG', 'IMG_9897.JPG', 'IMG_9898.JPG',
    'IMG_9899.JPG', 'IMG_9900.JPG', 'IMG_9901.JPG', 'IMG_9902.JPG', 'IMG_9903.JPG',
    'IMG_9904.JPG', 'IMG_9905.JPG', 'IMG_9906.JPG', 'IMG_9907.JPG', 'IMG_9908.JPG',
    'IMG_9909.JPG', 'IMG_9910.JPG', 'IMG_9911.JPG', 'IMG_9912.JPG', 'IMG_9913.JPG',
    'IMG_9914.JPG', 'IMG_9915.JPG', 'IMG_9916.JPG', 'IMG_9917.JPG', 'IMG_9918.JPG',
    'IMG_9920.JPG', 'IMG_9921.JPG', 'IMG_9922.JPG', 'IMG_9923.JPG', 'IMG_9924.JPG',
    'IMG_9925.JPG', 'IMG_9926.JPG', 'IMG_9927.JPG', 'IMG_9928.JPG', 'IMG_9929.JPG',
    'IMG_9930.JPG', 'IMG_9931.JPG', 'IMG_9932.JPG', 'IMG_9933.JPG', 'IMG_9934.JPG',
    'IMG_9935.JPG', 'IMG_9936.JPG', 'IMG_9937.JPG', 'IMG_9938.JPG', 'IMG_9939.JPG',
    'IMG_9940.JPG', 'IMG_9941.JPG', 'IMG_9942.JPG', 'IMG_9943.JPG', 'IMG_9944.JPG',
    'IMG_9945.JPG', 'IMG_9946.JPG', 'IMG_9947.JPG', 'IMG_9948.JPG', 'IMG_9949.JPG',
    'IMG_9950.JPG', 'IMG_9951.JPG', 'IMG_9953.JPG', 'IMG_9954.JPG', 'IMG_9955.JPG',
    'IMG_9956.JPG', 'IMG_9957.JPG', 'IMG_9958.JPG', 'IMG_9959.JPG', 'IMG_9960.JPG',
    'IMG_9961.JPG', 'IMG_9962.JPG', 'IMG_9963.JPG', 'IMG_9964.JPG', 'IMG_9965.JPG',
    'IMG_9966.JPG', 'IMG_9967.JPG', 'IMG_9968.JPG', 'IMG_9969.JPG', 'IMG_9970.JPG',
    'IMG_9971.JPG', 'IMG_9972.JPG', 'IMG_9973.JPG', 'IMG_9974.JPG', 'IMG_9975.JPG',
    'IMG_9976.JPG', 'IMG_9977.JPG', 'IMG_9978.JPG', 'IMG_9979.JPG', 'IMG_9980.JPG',
    'IMG_9981.JPG', 'IMG_9982.JPG', 'IMG_9983.JPG', 'IMG_9984.JPG', 'IMG_9985.JPG',
    'IMG_9986.JPG', 'IMG_9987.JPG', 'IMG_9988.JPG', 'IMG_9989.JPG', 'IMG_9990.JPG',
    'IMG_9991.JPG', 'IMG_9992.JPG', 'IMG_9993.JPG', 'IMG_9994.JPG', 'IMG_9995.JPG',
    'IMG_9996.JPG', 'IMG_9997.JPG', 'IMG_9998.JPG', 'IMG_9999.JPG'
];

// Global variables
let currentImageIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryGrid = document.getElementById('galleryGrid');

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
    setupLightbox();
    setupKeyboardNavigation();
    setupLazyLoading(); // Enable lazy loading
});

// Create the gallery grid
function createGallery() {
    // Show loading state
    galleryGrid.innerHTML = '<div class="loading">Loading beautiful memories...</div>';
    
    // Load images immediately without artificial delay
    galleryGrid.innerHTML = '';
    
    // Create and append all gallery items at once
    const fragment = document.createDocumentFragment();
    images.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        fragment.appendChild(galleryItem);
    });
    galleryGrid.appendChild(fragment);
    
    // Add staggered animation to items
    animateGalleryItems();
}

// Create individual gallery item
function createGalleryItem(imageName, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 0.05}s`; // Reduced delay for faster appearance
    
    const img = document.createElement('img');
    img.dataset.src = imageName; // Use data-src for lazy loading
    img.alt = `Anniversary Memory ${index + 1}`;
    img.loading = 'lazy';
    img.className = 'lazy-image';
    
    // Add error handling
    img.onerror = () => handleImageError(img);
    
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';
    
    const title = document.createElement('div');
    title.className = 'gallery-item-title';
    title.textContent = `Memory ${index + 1}`;
    
    const subtitle = document.createElement('div');
    subtitle.className = 'gallery-item-subtitle';
    subtitle.textContent = 'Click to view';
    
    overlay.appendChild(title);
    overlay.appendChild(subtitle);
    item.appendChild(img);
    item.appendChild(overlay);
    
    // Add click event to open lightbox
    item.addEventListener('click', () => openLightbox(index));
    
    return item;
}

// Animate gallery items with staggered effect
function animateGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.4s ease'; // Faster animation
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 50); // Reduced delay for faster appearance
    });
}

// Setup lightbox functionality
function setupLightbox() {
    // Close button
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeLightbox);
    
    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    showImage(index);
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in effect
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.transition = 'opacity 0.3s ease';
        lightbox.style.opacity = '1';
    }, 10);
}

// Close lightbox
function closeLightbox() {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Show image in lightbox
function showImage(index) {
    if (index >= 0 && index < images.length) {
        lightboxImg.src = images[index];
        lightboxImg.alt = `Anniversary Memory ${index + 1}`;
    }
}

// Show previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Show next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Setup keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add image loading error handling
function handleImageError(img) {
    img.style.display = 'none';
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        background: linear-gradient(135deg, #ffeef8 0%, #ffd6e7 100%);
        color: #ff69b4;
        font-size: 0.9rem;
        border-radius: 20px;
        border: 2px dashed #ff69b4;
    `;
    errorDiv.textContent = 'Image not available';
    img.parentNode.appendChild(errorDiv);
}

// Add intersection observer for lazy loading
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-image');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before image comes into view
            threshold: 0.1
        });
        
        // Observe all lazy images
        document.querySelectorAll('img.lazy-image').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        loadAllImages();
    }
}

// Fallback function for older browsers
function loadAllImages() {
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
    });
}

// Add touch/swipe support for mobile
function setupTouchSupport() {
    let startX = 0;
    let startY = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                showNextImage();
            } else {
                showPreviousImage();
            }
        }
    });
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', function() {
    setupTouchSupport();
});
