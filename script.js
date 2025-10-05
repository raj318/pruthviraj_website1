// ==================== //
// Full-Page Storybook Navigation
// ==================== //

let pages = [];
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageDisplay = document.getElementById('currentPage');
const totalPagesDisplay = document.getElementById('totalPages');

let currentPage = 1;
let totalPages = 1;

// Initialize
function init() {
    // Wait for pages to be generated
    setTimeout(() => {
        pages = document.querySelectorAll('.page');
        totalPages = pages.length;
        totalPagesDisplay.textContent = totalPages;
        updateNavigation();
        animateSkillBars();
    }, 500);
}

// Update navigation buttons and counter
function updateNavigation() {
    currentPageDisplay.textContent = currentPage;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Go to next page
function goToNextPage() {
    if (currentPage < totalPages) {
        const currentPageElement = pages[currentPage - 1];
        const nextPageElement = pages[currentPage];
        
        currentPageElement.classList.add('exiting');
        currentPageElement.classList.remove('active');
        
        setTimeout(() => {
            nextPageElement.classList.add('active');
            currentPageElement.classList.remove('exiting');
            currentPage++;
            updateNavigation();
            
            // Animate skill bars if on skills page
            if (currentPage === 4) {
                setTimeout(() => animateSkillBars(), 400);
            }
        }, 100);
    }
}

// Go to previous page
function goToPrevPage() {
    if (currentPage > 1) {
        const currentPageElement = pages[currentPage - 1];
        const prevPageElement = pages[currentPage - 2];
        
        currentPageElement.classList.remove('active');
        
        setTimeout(() => {
            prevPageElement.classList.add('active');
            currentPage--;
            updateNavigation();
            
            // Animate skill bars if on skills page
            if (currentPage === 4) {
                setTimeout(() => animateSkillBars(), 400);
            }
        }, 100);
    }
}

// Animate skill bars
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 200);
    });
}

// Event Listeners
prevBtn.addEventListener('click', goToPrevPage);
nextBtn.addEventListener('click', goToNextPage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrevPage();
    }
});

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = Math.abs(touchStartY - touchEndY);
    
    // Only trigger if horizontal swipe is more significant than vertical
    if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > diffY) {
        if (diffX > 0) {
            // Swiped left - go to next page
            goToNextPage();
        } else {
            // Swiped right - go to previous page
            goToPrevPage();
        }
    }
}

// Scroll navigation (optional - can be disabled if not desired)
let isScrolling = false;
document.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    const activePageElement = pages[currentPage - 1];
    const pageInner = activePageElement.querySelector('.page-inner');
    const isAtTop = pageInner.scrollTop === 0;
    const isAtBottom = pageInner.scrollHeight - pageInner.scrollTop === pageInner.clientHeight;
    
    if (e.deltaY > 0 && isAtBottom) {
        // Scrolling down at bottom
        e.preventDefault();
        isScrolling = true;
        goToNextPage();
        setTimeout(() => { isScrolling = false; }, 1000);
    } else if (e.deltaY < 0 && isAtTop) {
        // Scrolling up at top
        e.preventDefault();
        isScrolling = true;
        goToPrevPage();
        setTimeout(() => { isScrolling = false; }, 1000);
    }
}, { passive: false });

// Button press animation
function addButtonFeedback(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

prevBtn.addEventListener('mousedown', () => addButtonFeedback(prevBtn));
nextBtn.addEventListener('mousedown', () => addButtonFeedback(nextBtn));

// Console welcome
console.log('%c📖 Welcome to My Storybook Portfolio!', 'color: #1a1a2e; font-size: 20px; font-weight: bold;');
console.log('%c Use arrow keys, buttons, or swipe to navigate', 'color: #636e72; font-size: 14px;');

// Initialize the storybook
init();
