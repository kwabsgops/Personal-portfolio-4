// Kinetic Type Page Transition Script
class KineticTransition {
    constructor() {
        this.pages = document.querySelectorAll('.page');
        this.overlay = document.querySelector('.transition-overlay');
        this.lettersContainer = document.querySelector('.letters-container');
        this.currentPage = 'page-1';
        this.isAnimating = false;
        
        // Text to display during transition
        this.transitionText = 'TRANSITION';
        
        this.init();
    }

    init() {
        // Add click listeners to all navigation buttons
        document.querySelectorAll('.next-btn, .prev-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetPage = e.target.dataset.target;
                if (targetPage && !this.isAnimating) {
                    this.navigateTo(targetPage);
                }
            });
        });
    }

    createLetters() {
        // Clear existing letters
        this.lettersContainer.innerHTML = '';
        
        // Create letter spans for each character
        const letters = this.transitionText.split('');
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = letter === ' ' ? '\u00A0' : letter;
            span.style.transitionDelay = `${index * 0.05}s`;
            this.lettersContainer.appendChild(span);
        });
        
        return this.lettersContainer.querySelectorAll('.letter');
    }

    animateLetters(letters, addClass, removeClass, delay = 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                letters.forEach(letter => {
                    letter.classList.add(addClass);
                    if (removeClass) {
                        letter.classList.remove(removeClass);
                    }
                });
                
                // Wait for animation to complete
                setTimeout(resolve, letters.length * 50 + 500);
            }, delay);
        });
    }

    async navigateTo(targetPage) {
        if (this.isAnimating || targetPage === this.currentPage) return;
        
        this.isAnimating = true;
        
        // Show overlay
        this.overlay.classList.add('active');
        
        // Create and animate letters in
        const letters = this.createLetters();
        await this.animateLetters(letters, 'animate');
        
        // Wait a moment before switching pages
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Switch active page
        this.pages.forEach(page => {
            page.classList.remove('active');
        });
        
        const targetElement = document.querySelector(`.${targetPage}`);
        if (targetElement) {
            targetElement.classList.add('active');
        }
        
        this.currentPage = targetPage;
        
        // Animate letters out
        await this.animateLetters(letters, 'exit', 'animate');
        
        // Hide overlay
        this.overlay.classList.remove('active');
        
        // Clean up
        setTimeout(() => {
            this.lettersContainer.innerHTML = '';
            this.isAnimating = false;
        }, 300);
    }
}

// Alternative transition effect with random letters
class RandomKineticTransition {
    constructor() {
        this.pages = document.querySelectorAll('.page');
        this.overlay = document.querySelector('.transition-overlay');
        this.lettersContainer = document.querySelector('.letters-container');
        this.currentPage = 'page-1';
        this.isAnimating = false;
        
        this.init();
    }

    init() {
        document.querySelectorAll('.next-btn, .prev-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetPage = e.target.dataset.target;
                if (targetPage && !this.isAnimating) {
                    this.navigateTo(targetPage);
                }
            });
        });
    }

    getRandomChar() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    createRandomLetters() {
        this.lettersContainer.innerHTML = '';
        
        const totalLetters = 20;
        for (let i = 0; i < totalLetters; i++) {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = this.getRandomChar();
            span.style.transitionDelay = `${Math.random() * 0.5}s`;
            span.style.fontSize = `${2 + Math.random() * 2}rem`;
            this.lettersContainer.appendChild(span);
        }
        
        return this.lettersContainer.querySelectorAll('.letter');
    }

    async navigateTo(targetPage) {
        if (this.isAnimating || targetPage === this.currentPage) return;
        
        this.isAnimating = true;
        this.overlay.classList.add('active');
        
        const letters = this.createRandomLetters();
        
        // Animate in
        await new Promise(resolve => {
            setTimeout(() => {
                letters.forEach(letter => {
                    letter.classList.add('animate');
                    // Randomize characters during animation
                    const interval = setInterval(() => {
                        letter.textContent = this.getRandomChar();
                    }, 100);
                    
                    setTimeout(() => clearInterval(interval), 400);
                });
                setTimeout(resolve, 600);
            }, 50);
        });
        
        // Switch page
        this.pages.forEach(page => page.classList.remove('active'));
        const targetElement = document.querySelector(`.${targetPage}`);
        if (targetElement) {
            targetElement.classList.add('active');
        }
        this.currentPage = targetPage;
        
        // Animate out
        letters.forEach(letter => {
            letter.classList.add('exit');
            letter.classList.remove('animate');
        });
        
        await new Promise(resolve => setTimeout(resolve, 600));
        
        this.overlay.classList.remove('active');
        
        setTimeout(() => {
            this.lettersContainer.innerHTML = '';
            this.isAnimating = false;
        }, 300);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Use the standard kinetic transition
    window.kineticTransition = new KineticTransition();
    
    // Or use random kinetic transition instead:
    // window.kineticTransition = new RandomKineticTransition();
});
