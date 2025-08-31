// 等待 DOM 載入完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始初始化...');
    initNavigation();
    initScrollAnimations();
    initProjectFilter();
    initSkillBars();
    initSmoothScrolling();
    initParallaxEffects();
    initProjectModals(); // 新增：專案詳細資訊模態框功能
    console.log('所有功能初始化完成');
});

// 導航選單功能
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 漢堡選單切換
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 點擊導航連結後關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 滾動時改變導航欄樣式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 高亮當前頁面區塊
    window.addEventListener('scroll', highlightCurrentSection);
}

// 滾動動畫
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .about-item, .skill-item, .project-card, .timeline-item'
    );

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 專案篩選功能
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // 更新按鈕狀態
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 篩選專案卡片
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category.includes(filter)) {
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
        });
    });
}



// 技能條動畫
function initSkillBars() {
    const skillBars = document.querySelectorAll('.level-fill');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));
}

// 平滑滾動
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // 考慮導航欄高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 視差效果
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Hero 背景視差
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // 移除浮動卡片的 3D 旋轉效果，保持固定角度
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            // 只保留輕微的傾斜角度，不隨滾動變化
            profileCard.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(-5deg)';
        }
    });
}

// 高亮當前頁面區塊
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}



function showNotification(message, type = 'info') {
    // 創建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
            </span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // 添加樣式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Noto Sans TC', sans-serif;
    `;

    // 添加到頁面
    document.body.appendChild(notification);

    // 顯示動畫
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // 自動移除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 數字計數動畫
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
        const finalNumber = parseInt(number.textContent);
        const duration = 400; // 0.4秒
        const increment = finalNumber / (duration / 16); // 60fps
        let currentNumber = 0;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                number.textContent = finalNumber + (number.textContent.includes('+') ? '+' : number.textContent.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                number.textContent = Math.floor(currentNumber);
            }
        }, 16);
    });
}

// 觀察統計數字區塊，觸發計數動畫
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// 在 DOM 載入後觀察統計區塊
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// 打字機效果（用於 Hero 標題）
function typewriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 在頁面載入時啟動打字機效果
window.addEventListener('load', function() {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        setTimeout(() => {
            typewriter(nameElement, originalText, 150);
        }, 1000);
    }
});

// 滑鼠追蹤效果（可選）
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// 載入動畫
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // 開始頁面動畫
    document.body.classList.add('loaded');
});

// 主題切換功能（深色/淺色模式）
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// 響應式圖片載入
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 頁面效能優化 - 防抖函數
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 滾動效能優化
const debouncedScroll = debounce(function() {
    highlightCurrentSection();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('頁面發生錯誤:', e.error);
    // 可以在這裡添加錯誤回報功能
});



// 專案詳細資訊模態框功能
function initProjectModals() {
    console.log('初始化專案模態框功能...');
    
    // 等待一下確保 DOM 完全載入
    setTimeout(() => {
        const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
        console.log('找到', learnMoreBtns.length, '個了解更多按鈕');
        
        if (learnMoreBtns.length === 0) {
            console.error('沒有找到任何了解更多按鈕！');
            return;
        }
        
        learnMoreBtns.forEach((btn, index) => {
            console.log(`為第 ${index + 1} 個按鈕添加點擊事件，按鈕文字:`, btn.textContent);
            
            // 移除舊的事件監聽器（如果有的話）
            btn.removeEventListener('click', handleLearnMoreClick);
            
            // 添加新的事件監聽器
            btn.addEventListener('click', handleLearnMoreClick);
            
            // 測試按鈕是否可以被點擊
            console.log(`按鈕 ${index + 1} 樣式:`, window.getComputedStyle(btn));
            console.log(`按鈕 ${index + 1} 是否可見:`, btn.offsetParent !== null);
        });
        
        console.log('所有按鈕事件監聽器已添加完成');
    }, 100);
}

// 統一的點擊處理函數
function handleLearnMoreClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('了解更多按鈕被點擊！');
    console.log('事件對象:', e);
    console.log('按鈕元素:', this);
    
    const projectCard = this.closest('.project-card');
    if (!projectCard) {
        console.error('找不到專案卡片！');
        return;
    }
    
    const projectTitle = projectCard.querySelector('.project-title');
    if (!projectTitle) {
        console.error('找不到專案標題！');
        return;
    }
    
    const title = projectTitle.textContent;
    console.log('專案標題:', title);
    
    // 收集專案的技術標籤
    const techTags = [];
    const techElements = projectCard.querySelectorAll('.tech-tag');
    techElements.forEach(tag => {
        techTags.push(tag.textContent);
    });
    console.log('專案技術標籤:', techTags);
    
    // 觸發頁面淡出動畫
    fadeOutAndNavigate(title, techTags);
}

// 新增：頁面淡出後跳轉的函數
function fadeOutAndNavigate(projectTitle, techTags) {
    // 創建淡出遮罩
    const fadeOverlay = document.createElement('div');
    fadeOverlay.className = 'page-fade-overlay';
    document.body.appendChild(fadeOverlay);
    
    // 觸發淡出動畫
    setTimeout(() => {
        fadeOverlay.classList.add('fade-out');
        
        // 動畫完成後跳轉
        setTimeout(() => {
            const projectPageUrl = `project-details.html?project=${encodeURIComponent(projectTitle)}&tech=${encodeURIComponent(techTags.join(','))}`;
            window.location.href = projectPageUrl;
        }, 500); // 500ms 後跳轉
    }, 50);
}

function showProjectModal(title) {
    console.log('顯示模態框:', title);
    // 創建模態框
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="project-details">
                    <!-- 內容區域先留空 -->
                    <p>專案詳細內容將在這裡顯示...</p>
                </div>
            </div>
        </div>
    `;
    
    // 添加到頁面
    document.body.appendChild(modal);
    console.log('模態框已添加到頁面');
    
    // 關閉模態框
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', () => closeModal(modal));
    
    // ESC 鍵關閉
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
    
    // 顯示動畫
    setTimeout(() => {
        modal.classList.add('show');
        console.log('模態框顯示動畫完成');
    }, 10);
}

function closeModal(modal) {
    console.log('關閉模態框');
    modal.classList.remove('show');
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
            console.log('模態框已從頁面移除');
        }
    }, 300);
}
