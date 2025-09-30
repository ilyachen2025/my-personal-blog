// 关于页面 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 技能条动画
    const animateSkills = () => {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.style.width;
                    // 重置宽度，然后添加动画
                    skillBar.style.width = '0';
                    
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(skillBar);
                }
            });
        }, {
            threshold: 0.1
        });
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    };
    
    animateSkills();
    
    // 头像悬停效果
    const avatar = document.querySelector('.avatar-container');
    
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = 'scale(1) rotate(0)';
    });
    
    // 社交链接动画
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0) rotate(0)';
        });
    });
    
    // 详细信息卡片动画
    const detailItems = document.querySelectorAll('.detail-item');
    
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                itemObserver.unobserve(item);
            }
        });
    }, {
        threshold: 0.1
    });
    
    detailItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        itemObserver.observe(item);
    });
    
    // 二维码悬停效果
    const qrcode = document.querySelector('.contact-qrcode img');
    
    if (qrcode) {
        qrcode.addEventListener('mouseenter', () => {
            qrcode.style.transform = 'scale(1.1)';
            qrcode.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });
        
        qrcode.addEventListener('mouseleave', () => {
            qrcode.style.transform = 'scale(1)';
            qrcode.style.boxShadow = 'none';
        });
    }
    
    // 添加页面滚动动画
    const sections = document.querySelectorAll('.about-intro, .about-details');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
});