// 主JavaScript文件

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置导航栏激活状态
    setActiveNavItem();
    
    // 平滑滚动
    enableSmoothScroll();
    
    // 返回顶部按钮
    setupBackToTopButton();
    
    // 图片懒加载
    setupImageLazyLoad();
    
    // 移动端菜单切换
    setupMobileMenu();
    
    // 页面切换动画
    setupPageTransition();
});

// 页面加载完成后的动画
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// 设置导航栏激活状态
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    if (!navLinks.length) return;
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        if (currentPath === linkPath || (currentPath === '/' && linkPath.includes('index.html'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 平滑滚动
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 返回顶部按钮
function setupBackToTopButton() {
    // 检查是否已存在返回顶部按钮
    let backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) {
        // 创建返回顶部按钮
        backToTopButton = document.createElement('button');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopButton.style.cssText = `
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(backToTopButton);
    }
    
    // 滚动事件监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // 点击事件
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 图片懒加载
function setupImageLazyLoad() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (!lazyImages.length) return;
    
    // 检查是否支持IntersectionObserver
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // 降级方案：立即加载所有图片
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

// 移动端菜单切换
function setupMobileMenu() {
    // 获取DOM元素
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    
    if (!header || !nav || !navList) return;
    
    // 检查是否已存在菜单按钮
    let menuButton = document.querySelector('.mobile-menu-btn');
    
    if (!menuButton) {
        // 创建菜单按钮
        menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-btn';
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        menuButton.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--text-color);
            padding: 15px;
            position: absolute;
            top: 0;
            right: 10px;
            z-index: 1000;
        `;
        
        // 添加到header
        header.appendChild(menuButton);
    }
    
    // 初始化时设置样式
    updateMobileMenuStyles();
    
    // 窗口大小变化时更新样式
    window.addEventListener('resize', updateMobileMenuStyles);
    
    // 菜单按钮点击事件
    menuButton.addEventListener('click', toggleMobileMenu);
    
    // 定义更新样式的函数
    function updateMobileMenuStyles() {
        if (window.innerWidth <= 768) {
            // 移动端样式
            menuButton.style.display = 'block';
            navList.style.display = 'none';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '60px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.background = 'var(--white)';
            navList.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            navList.style.padding = '0';
            navList.style.margin = '0';
            
            // 设置列表项样式
            const navItems = navList.querySelectorAll('li');
            navItems.forEach(item => {
                item.style.width = '100%';
                item.style.textAlign = 'center';
            });
            
            // 设置链接样式
            const navLinks = navList.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.display = 'block';
                link.style.padding = '15px 10px';
                link.style.width = '100%';
            });
        } else {
            // 桌面端样式
            menuButton.style.display = 'none';
            navList.style.display = 'flex';
            navList.style.flexDirection = 'row';
            navList.style.position = 'static';
            navList.style.width = 'auto';
            navList.style.background = 'transparent';
            navList.style.boxShadow = 'none';
            navList.style.padding = '0';
            navList.style.margin = '0';
            
            // 重置列表项样式
            const navItems = navList.querySelectorAll('li');
            navItems.forEach(item => {
                item.style.width = 'auto';
                item.style.textAlign = 'left';
            });
            
            // 重置链接样式
            const navLinks = navList.querySelectorAll('a');
            navLinks.forEach(link => {
                link.style.display = 'inline-block';
                link.style.padding = '15px 10px';
                link.style.width = 'auto';
            });
        }
    }
    
    // 定义切换菜单的函数
    function toggleMobileMenu() {
        if (navList.style.display === 'none' || navList.style.display === '') {
            navList.style.display = 'flex';
        } else {
            navList.style.display = 'none';
        }
    }
}

// 页面切换动画
function setupPageTransition() {
    const links = document.querySelectorAll('a');
    
    if (!links.length) return;
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是锚点链接或外部链接，不做处理
            if (!href || href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://')) {
                return;
            }
            
            // 添加页面切换动画
            e.preventDefault();
            
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        });
    });
}