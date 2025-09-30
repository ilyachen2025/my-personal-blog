// 兴趣爱好页面JavaScript

// 示例兴趣爱好数据
const hobbiesData = [
    {
        id: 1,
        title: '摄影',
        category: 'arts',
        categoryName: '艺术创作',
        image: 'https://picsum.photos/id/10/600/400',
        description: '记录生活中的美好瞬间，捕捉自然与人文的精彩画面。',
        duration: '5年',
        intensity: '中等',
        fullDescription: `
            <p>摄影是我生活中不可或缺的一部分，已经有5年的摄影经历了。从最初的手机摄影到现在的专业单反相机，我一直在学习和探索摄影的魅力。</p>
            <p>我特别喜欢风景摄影和人文纪实，喜欢在旅途中用镜头记录下那些令人难忘的瞬间。摄影不仅让我学会了观察生活中的美，也让我更加珍惜每一个美好的时刻。</p>
            <p>通过摄影，我结交了许多志同道合的朋友，我们一起交流经验，互相学习，共同进步。摄影已经成为我表达自我、记录生活的重要方式。</p>
        `,
        highlights: [
            { title: '风景摄影', icon: 'fa-mountain' },
            { title: '人文纪实', icon: 'fa-people-watching' },
            { title: '后期修图', icon: 'fa-image' }
        ],
        gallery: [
            'https://picsum.photos/id/11/400/300',
            'https://picsum.photos/id/12/400/300',
            'https://picsum.photos/id/13/400/300',
            'https://picsum.photos/id/14/400/300'
        ]
    },
    {
        id: 2,
        title: '瑜伽',
        category: 'sports',
        categoryName: '运动健身',
        image: 'https://picsum.photos/id/20/600/400',
        description: '通过身心的练习，提升身体柔韧性和内心平静。',
        duration: '3年',
        intensity: '低等',
        fullDescription: `
            <p>瑜伽是我每天必做的运动，已经坚持了3年。最初接触瑜伽是为了缓解工作压力和改善睡眠质量，没想到逐渐爱上了这项运动。</p>
            <p>瑜伽不仅让我的身体变得更加柔软和强壮，也让我的内心变得更加平静和专注。每天早晨的瑜伽练习已经成为我开启美好一天的仪式。</p>
            <p>我喜欢尝试不同类型的瑜伽，如哈他瑜伽、流瑜伽和阴瑜伽等。每种类型都有其独特的益处，我会根据自己的身体状况和心情选择适合的练习方式。</p>
        `,
        highlights: [
            { title: '提升柔韧', icon: 'fa-child' },
            { title: '内心平静', icon: 'fa-spa' },
            { title: '改善睡眠', icon: 'fa-moon' }
        ],
        gallery: [
            'https://picsum.photos/id/21/400/300',
            'https://picsum.photos/id/22/400/300',
            'https://picsum.photos/id/23/400/300',
            'https://picsum.photos/id/24/400/300'
        ]
    },
    {
        id: 3,
        title: '编程',
        category: 'tech',
        categoryName: '科技数码',
        image: 'https://picsum.photos/id/30/600/400',
        description: '探索代码的世界，创造有趣的应用和解决实际问题。',
        duration: '7年',
        intensity: '高等',
        fullDescription: `
            <p>编程是我的职业也是我的爱好，已经有7年的编程经验了。我喜欢通过代码来解决实际问题，创造有用的应用程序。</p>
            <p>我精通多种编程语言，如JavaScript、Python和Java等。最近，我对前端开发特别感兴趣，喜欢研究各种前端框架和库，如React、Vue和Angular等。</p>
            <p>编程让我学会了逻辑思维和解决问题的能力，也让我不断保持学习的状态。我喜欢参与开源项目，与全球的开发者一起合作，共同推动技术的进步。</p>
        `,
        highlights: [
            { title: '前端开发', icon: 'fa-code' },
            { title: '问题解决', icon: 'fa-puzzle-piece' },
            { title: '开源贡献', icon: 'fa-code-branch' }
        ],
        gallery: [
            'https://picsum.photos/id/31/400/300',
            'https://picsum.photos/id/32/400/300',
            'https://picsum.photos/id/33/400/300',
            'https://picsum.photos/id/34/400/300'
        ]
    },
    {
        id: 4,
        title: '烘焙',
        category: 'food',
        categoryName: '美食烹饪',
        image: 'https://picsum.photos/id/40/600/400',
        description: '用烤箱创造美味的甜点，享受烘焙的乐趣和分享的喜悦。',
        duration: '2年',
        intensity: '中等',
        fullDescription: `
            <p>烘焙是我最近两年才开始的兴趣爱好，但已经深深爱上了它。我喜欢在周末的时候，在家里做一些小蛋糕、饼干和面包，然后和家人朋友一起分享。</p>
            <p>烘焙的过程让我感到非常放松和专注，当看到自己做的甜点成功出炉时，那种成就感是无法言喻的。我特别喜欢尝试新的配方和装饰方式，每次都能带来不同的惊喜。</p>
            <p>通过烘焙，我也学会了耐心和细心，因为一点点的误差都可能影响最终的成品。现在，烘焙已经成为我生活中不可或缺的一部分。</p>
        `,
        highlights: [
            { title: '蛋糕制作', icon: 'fa-birthday-cake' },
            { title: '饼干烘焙', icon: 'fa-cookie' },
            { title: '创意装饰', icon: 'fa-magic' }
        ],
        gallery: [
            'https://picsum.photos/id/41/400/300',
            'https://picsum.photos/id/42/400/300',
            'https://picsum.photos/id/43/400/300',
            'https://picsum.photos/id/44/400/300'
        ]
    },
    {
        id: 5,
        title: '徒步旅行',
        category: 'nature',
        categoryName: '自然探索',
        image: 'https://picsum.photos/id/50/600/400',
        description: '走进大自然，探索未知的路径，享受徒步的乐趣和自然的美景。',
        duration: '4年',
        intensity: '高等',
        fullDescription: `
            <p>徒步旅行是我最喜欢的户外活动之一，已经有4年的徒步经验了。我喜欢走进大自然，呼吸新鲜空气，欣赏美丽的风景，感受大自然的魅力。</p>
            <p>我已经走过许多著名的徒步路线，如黄山、张家界和稻城亚丁等。每次徒步都是一次挑战自我和放松身心的过程，让我在忙碌的工作之余，能够找到内心的平静。</p>
            <p>徒步旅行也让我结交了许多志同道合的朋友，我们一起分享徒步的经验和感受，互相鼓励和支持。我相信，徒步旅行将会伴随我的一生。</p>
        `,
        highlights: [
            { title: '自然探索', icon: 'fa-tree' },
            { title: '体能挑战', icon: 'fa-person-hiking' },
            { title: '风景欣赏', icon: 'fa-mountain-sun' }
        ],
        gallery: [
            'https://picsum.photos/id/51/400/300',
            'https://picsum.photos/id/52/400/300',
            'https://picsum.photos/id/53/400/300',
            'https://picsum.photos/id/54/400/300'
        ]
    },
    {
        id: 6,
        title: '手绘插画',
        category: 'arts',
        categoryName: '艺术创作',
        image: 'https://picsum.photos/id/60/600/400',
        description: '用画笔记录生活，表达情感，创造属于自己的艺术世界。',
        duration: '6年',
        intensity: '中等',
        fullDescription: `
            <p>手绘插画是我从小就喜欢的爱好，已经坚持了6年。我喜欢用画笔记录生活中的点点滴滴，表达自己的情感和想法。</p>
            <p>我擅长水彩画和素描，特别喜欢画风景和人物。绘画让我学会了观察生活中的细节，发现平凡中的美好。每当我感到压力大或者心情烦躁的时候，绘画总能让我平静下来。</p>
            <p>最近，我开始尝试数字绘画，使用平板电脑和绘图软件创作插画。这种新的创作方式给我带来了更多的可能性和乐趣。我希望将来能够出版自己的插画集。</p>
        `,
        highlights: [
            { title: '水彩绘画', icon: 'fa-palette' },
            { title: '素描创作', icon: 'fa-pencil-alt' },
            { title: '数字插画', icon: 'fa-tablet-alt' }
        ],
        gallery: [
            'https://picsum.photos/id/61/400/300',
            'https://picsum.photos/id/62/400/300',
            'https://picsum.photos/id/63/400/300',
            'https://picsum.photos/id/64/400/300'
        ]
    }
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initHobbiesPage();
});

// 初始化兴趣爱好页面
function initHobbiesPage() {
    // 渲染兴趣爱好卡片
    renderHobbiesCards(hobbiesData);
    
    // 设置分类标签切换
    setupCategoryTabs();
    
    // 设置兴趣爱好详情模态框
    setupHobbyModal();
}

// 渲染兴趣爱好卡片
function renderHobbiesCards(hobbies) {
    const hobbiesGrid = document.getElementById('hobbies-grid');
    if (!hobbiesGrid) return;
    
    // 清空网格
    hobbiesGrid.innerHTML = '';
    
    // 如果没有数据，显示提示信息
    if (hobbies.length === 0) {
        hobbiesGrid.innerHTML = `
            <div class="no-hobbies">
                <p>没有找到相关兴趣爱好</p>
            </div>
        `;
        return;
    }
    
    // 渲染每张卡片
    hobbies.forEach(hobby => {
        const hobbyCard = document.createElement('div');
        hobbyCard.className = 'hobby-card';
        hobbyCard.dataset.id = hobby.id;
        hobbyCard.dataset.category = hobby.category;
        hobbyCard.innerHTML = `
            <div class="hobby-image">
                <img src="${hobby.image}" alt="${hobby.title}" loading="lazy">
                <div class="hobby-category-badge">${hobby.categoryName}</div>
            </div>
            <div class="hobby-content">
                <h3 class="hobby-title">${hobby.title}</h3>
                <p class="hobby-description">${hobby.description}</p>
                <div class="hobby-stats">
                    <div class="hobby-duration">
                        <i class="fas fa-clock"></i>
                        <span>${hobby.duration}</span>
                    </div>
                    <div class="hobby-intensity">
                        <i class="fas fa-bolt"></i>
                        <span>${hobby.intensity}</span>
                    </div>
                </div>
            </div>
        `;
        
        // 添加点击事件
        hobbyCard.addEventListener('click', function() {
            const hobbyId = parseInt(this.dataset.id);
            showHobbyDetails(hobbyId);
        });
        
        hobbiesGrid.appendChild(hobbyCard);
    });
}

// 设置分类标签切换
function setupCategoryTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (!tabBtns.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有标签的激活状态
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // 添加当前标签的激活状态
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // 筛选并渲染兴趣爱好
            if (category === 'all') {
                renderHobbiesCards(hobbiesData);
            } else {
                const filteredHobbies = hobbiesData.filter(hobby => hobby.category === category);
                renderHobbiesCards(filteredHobbies);
            }
        });
    });
}

// 设置兴趣爱好详情模态框
function setupHobbyModal() {
    const modal = document.getElementById('hobby-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal || !closeModal) return;
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        // 恢复页面滚动
        document.body.style.overflow = '';
    });
    
    // 点击模态框外部关闭模态框
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            // 恢复页面滚动
            document.body.style.overflow = '';
        }
    });
    
    // 按ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            // 恢复页面滚动
            document.body.style.overflow = '';
        }
    });
}

// 显示兴趣爱好详情
function showHobbyDetails(hobbyId) {
    const modal = document.getElementById('hobby-modal');
    const hobbyDetailContent = document.querySelector('.hobby-detail-content');
    
    if (!modal || !hobbyDetailContent) return;
    
    // 查找兴趣爱好数据
    const hobby = hobbiesData.find(h => h.id === hobbyId);
    
    if (!hobby) return;
    
    // 生成亮点内容
    const highlightsHtml = hobby.highlights.map(highlight => `
        <div class="highlight-item">
            <div class="highlight-icon">
                <i class="fas ${highlight.icon}"></i>
            </div>
            <div class="highlight-title">${highlight.title}</div>
        </div>
    `).join('');
    
    // 生成画廊内容
    const galleryHtml = hobby.gallery.map(img => `
        <div class="detail-gallery-item">
            <img src="${img}" alt="${hobby.title}">
        </div>
    `).join('');
    
    // 更新模态框内容
    hobbyDetailContent.innerHTML = `
        <div class="hobby-detail-header">
            <div class="hobby-detail-image">
                <img src="${hobby.image}" alt="${hobby.title}">
            </div>
            <div class="hobby-detail-info">
                <h2 class="hobby-detail-title">${hobby.title}</h2>
                <span class="hobby-detail-category">${hobby.categoryName}</span>
                <div class="hobby-detail-meta">
                    <div><i class="fas fa-clock"></i> ${hobby.duration}</div>
                    <div><i class="fas fa-bolt"></i> ${hobby.intensity}强度</div>
                </div>
            </div>
        </div>
        
        <div class="hobby-detail-section">
            <h3>关于这项爱好</h3>
            <div class="hobby-detail-description">
                ${hobby.fullDescription}
            </div>
        </div>
        
        <div class="hobby-detail-section">
            <h3>爱好亮点</h3>
            <div class="hobby-detail-highlights">
                ${highlightsHtml}
            </div>
        </div>
        
        <div class="hobby-detail-section">
            <h3>作品展示</h3>
            <div class="hobby-detail-gallery">
                ${galleryHtml}
            </div>
        </div>
    `;
    
    // 显示模态框
    modal.style.display = 'block';
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    
    // 为画廊图片添加点击放大效果
    const galleryImages = document.querySelectorAll('.detail-gallery-item');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // 这里可以添加图片放大查看功能
            alert('点击了图片，可以实现图片放大查看功能');
        });
    });
}

// 添加动画效果
function addAnimation() {
    const hobbyCards = document.querySelectorAll('.hobby-card');
    
    hobbyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}