// 读书页面JavaScript

// 示例书籍数据
const booksData = [
    {
        id: 1,
        title: '人类简史：从动物到上帝',
        author: '尤瓦尔·赫拉利',
        cover: 'https://picsum.photos/id/24/400/600',
        category: '历史',
        tags: ['人类历史', '文明发展', '哲学思考'],
        readDate: '2023-05',
        rating: 4.5,
        preview: '本书从十万年前有生命迹象开始，讲述了人类如何跃居地球生物链顶端，以及人类文明、宗教、经济、科技的发展历程...',
        content: `
            <p>这是一本非常有启发性的书，作者从宏观的视角审视了人类的发展历程。从认知革命、农业革命到科学革命，赫拉利为我们描绘了一幅完整的人类进化图景。</p>
            <p>最让我印象深刻的是关于"虚构故事"的论述。人类之所以能够形成大规模合作，正是因为我们能够共同相信某些虚构的概念，如国家、金钱、宗教等。这一观点为理解人类社会的运行机制提供了全新的视角。</p>
            <p>书中还讨论了很多当代议题，如人工智能、基因编辑等，引发了我对未来发展的深入思考。读完这本书，我对人类的过去、现在和未来有了更全面的认识。</p>
            <p>总体来说，这是一本值得一读再读的经典著作，强烈推荐给所有对人类历史和未来感兴趣的读者。</p>
        `
    },
    {
        id: 2,
        title: '百年孤独',
        author: '加西亚·马尔克斯',
        cover: 'https://picsum.photos/id/20/400/600',
        category: '文学',
        tags: ['魔幻现实主义', '拉丁美洲', '家族史诗'],
        readDate: '2023-03',
        rating: 4.8,
        preview: '《百年孤独》是哥伦比亚作家加西亚·马尔克斯创作的长篇小说，描写了布恩迪亚家族七代人的传奇故事...',
        content: `
            <p>马尔克斯的文字有一种独特的魔力，能够将现实与幻想完美融合。布恩迪亚家族七代人的命运在他的笔下展开，每一个人物都栩栩如生，每一个故事都让人难以忘怀。</p>
            <p>小说中的"孤独"主题贯穿始终，无论是布恩迪亚上校制作小金鱼，还是蕾梅黛丝升天，都体现了人类在时间长河中的孤独感。这种孤独不是个体的孤独，而是一种集体的、历史性的孤独。</p>
            <p>魔幻现实主义的写作手法让小说充满了神秘色彩，那些看似荒诞的情节却恰恰反映了拉丁美洲的历史和现实。马尔克斯用他独特的方式，为我们展现了一个既真实又虚幻的世界。</p>
            <p>这是一部需要细细品味的作品，每一次阅读都会有新的发现和感悟。</p>
        `
    },
    {
        id: 3,
        title: '小王子',
        author: '安托万·德·圣埃克苏佩里',
        cover: 'https://picsum.photos/id/30/400/600',
        category: '童话',
        tags: ['哲理', '成长', '友情'],
        readDate: '2023-01',
        rating: 4.9,
        preview: '《小王子》是法国作家安托万·德·圣埃克苏佩里创作的最著名的童话书，讲述了小王子从自己星球出发前往地球的过程中...',
        content: `
            <p>这是一本写给成年人的童话，简单的故事背后蕴含着深刻的哲理。小王子的旅程不仅是一次星际旅行，更是一次探索生命意义的心灵之旅。</p>
            <p>"真正重要的东西，用眼睛是看不见的，只有用心才能看得清楚。"这句话一直深深印在我的脑海里。在这个物质主义盛行的时代，我们常常忽略了那些真正重要的东西——爱、友情、责任...</p>
            <p>小王子与狐狸的故事让我明白，"驯化"不仅仅是建立关系，更是彼此需要、彼此依赖的过程。而与玫瑰的故事则让我懂得了爱的真谛——爱是责任，是包容，是珍惜。</p>
            <p>每次重读《小王子》，都会有不同的感悟。这是一部永远不会过时的经典，适合每一个在尘世中迷茫的人阅读。</p>
        `
    },
    {
        id: 4,
        title: '设计心理学',
        author: '唐纳德·A·诺曼',
        cover: 'https://picsum.photos/id/40/400/600',
        category: '设计',
        tags: ['用户体验', '交互设计', '产品设计'],
        readDate: '2023-04',
        rating: 4.7,
        preview: '《设计心理学》是美国认知心理学家唐纳德·A·诺曼创作的设计类著作，首次出版于1988年，主要探讨了设计与心理学的关系...',
        content: `
            <p>这本书彻底改变了我对设计的理解。诺曼用深入浅出的方式，解释了设计背后的心理学原理，让我明白好的设计不仅仅是美观，更是要符合用户的认知习惯。</p>
            <p>"不要责怪用户"是书中的一个重要观点。当用户在使用产品时遇到困难，往往不是用户的问题，而是设计的问题。这让我开始反思自己在设计过程中是否真正站在用户的角度考虑问题。</p>
            <p>书中还介绍了很多实用的设计原则，如反馈原则、约束原则、映射原则等，这些原则对我的设计工作产生了深远的影响。我开始更加注重用户体验，更加关注产品的可用性。</p>
            <p>无论是设计师还是产品经理，都应该读一读这本书。它不仅能帮助你做出更好的设计，还能让你更好地理解人与产品的关系。</p>
        `
    },
    {
        id: 5,
        title: '三体',
        author: '刘慈欣',
        cover: 'https://picsum.photos/id/50/400/600',
        category: '科幻',
        tags: ['宇宙', '物理学', '文明'],
        readDate: '2023-06',
        rating: 4.9,
        preview: '《三体》是刘慈欣创作的长篇科幻小说系列，由《三体》《三体Ⅱ·黑暗森林》《三体Ⅲ·死神永生》组成...',
        content: `
            <p>刘慈欣用他惊人的想象力，为我们构建了一个宏大而深邃的宇宙图景。《三体》不仅仅是一部科幻小说，更是一部关于文明、关于人性、关于宇宙本质的哲学著作。</p>
            <p>"黑暗森林"理论是全书的核心，它为我们解释了费米悖论——为什么我们还没有发现外星文明。这个理论不仅在科幻领域有着深远影响，也引发了人们对现实中宇宙文明的思考。</p>
            <p>书中的人物形象也非常鲜明，叶文洁、罗辑、程心等角色都给我留下了深刻的印象。他们的选择和命运，反映了不同的价值观和人性的复杂性。</p>
            <p>读完《三体》，我对宇宙、对人类文明有了全新的认识。这是一部足以载入世界科幻史册的杰作。</p>
        `
    },
    {
        id: 6,
        title: '活着',
        author: '余华',
        cover: 'https://picsum.photos/id/60/400/600',
        category: '文学',
        tags: ['人生', '苦难', '生存'],
        readDate: '2023-02',
        rating: 4.6,
        preview: '《活着》是中国当代作家余华创作的长篇小说，讲述了农村人福贵悲惨的人生遭遇...',
        content: `
            <p>余华的《活着》是一部让人震撼的作品。小说通过福贵的人生经历，展现了中国人在历史变迁中的生存状态和坚韧精神。</p>
            <p>福贵的一生充满了苦难，亲人一个个离他而去，只剩下他和一头老牛相依为命。但即便如此，他依然选择坚强地活着。这种对生命的执着和热爱，让我深受感动。</p>
            <p>"活着，就是为了活着本身而活着，而不是为了活着之外的任何事物而活着。"这句话是对全书主题的最好诠释。在这个快节奏的时代，我们常常忘记了活着本身的意义。</p>
            <p>《活着》让我重新思考生命的价值和意义。它告诉我们，无论遭遇多大的困难和挫折，都要珍惜生命，好好活着。</p>
        `
    }
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initReadingPage();
});

// 初始化读书页面
function initReadingPage() {
    // 渲染书籍列表
    renderBooksList(booksData);
    
    // 搜索功能
    setupSearch();
    
    // 分类筛选
    setupCategoryFilter();
    
    // 标签筛选
    setupTagFilter();
    
    // 书籍详情模态框
    setupBookDetailsModal();
    
    // 模拟滚动加载更多
    setupInfiniteScroll();
}

// 渲染书籍列表
function renderBooksList(books) {
    const booksGrid = document.querySelector('.books-grid');
    if (!booksGrid) return;
    
    // 清空书籍列表
    booksGrid.innerHTML = '';
    
    // 如果没有书籍，显示提示信息
    if (books.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-books">
                <p>没有找到相关书籍</p>
            </div>
        `;
        return;
    }
    
    // 渲染每本书籍
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.dataset.id = book.id;
        bookItem.dataset.category = book.category;
        bookItem.innerHTML = `
            <div class="book-cover-small">
                <img src="${book.cover}" alt="${book.title}" loading="lazy">
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-meta-info">
                    <span class="book-category">${book.category}</span>
                    <span class="read-date">${book.readDate}</span>
                </div>
                <p class="book-preview">${book.preview}</p>
                <a href="#" class="view-details-btn">查看详情</a>
            </div>
        `;
        
        booksGrid.appendChild(bookItem);
    });
    
    // 添加查看详情按钮的点击事件
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const bookId = parseInt(this.closest('.book-item').dataset.id);
            showBookDetails(bookId);
        });
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('book-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (!searchInput || !searchBtn) return;
    
    // 搜索按钮点击事件
    searchBtn.addEventListener('click', function() {
        const keyword = searchInput.value.trim().toLowerCase();
        searchBooks(keyword);
    });
    
    // 回车键搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const keyword = searchInput.value.trim().toLowerCase();
            searchBooks(keyword);
        }
    });
}

// 搜索书籍
function searchBooks(keyword) {
    if (!keyword) {
        renderBooksList(booksData);
        return;
    }
    
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword) ||
        book.preview.toLowerCase().includes(keyword) ||
        book.content.toLowerCase().includes(keyword) ||
        book.tags.some(tag => tag.toLowerCase().includes(keyword))
    );
    
    renderBooksList(filteredBooks);
}

// 设置分类筛选
function setupCategoryFilter() {
    const categoryLinks = document.querySelectorAll('.categories a');
    
    if (!categoryLinks.length) return;
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有分类的激活状态
            categoryLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前分类的激活状态
            this.classList.add('active');
            
            const category = this.textContent.trim();
            
            if (category === '全部') {
                renderBooksList(booksData);
            } else {
                const filteredBooks = booksData.filter(book => book.category === category);
                renderBooksList(filteredBooks);
            }
        });
    });
}

// 设置标签筛选
function setupTagFilter() {
    const tagLinks = document.querySelectorAll('.tag');
    
    if (!tagLinks.length) return;
    
    tagLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 切换标签的激活状态
            this.classList.toggle('active');
            
            // 获取所有激活的标签
            const activeTags = Array.from(document.querySelectorAll('.tag.active')).map(tag => 
                tag.textContent.trim()
            );
            
            if (activeTags.length === 0) {
                renderBooksList(booksData);
            } else {
                const filteredBooks = booksData.filter(book => 
                    activeTags.some(tag => book.tags.includes(tag))
                );
                renderBooksList(filteredBooks);
            }
        });
    });
}

// 设置书籍详情模态框
function setupBookDetailsModal() {
    const modal = document.getElementById('book-modal');
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
}

// 显示书籍详情
function showBookDetails(bookId) {
    const modal = document.getElementById('book-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;
    
    // 查找书籍数据
    const book = booksData.find(b => b.id === bookId);
    
    if (!book) return;
    
    // 生成星级评分
    const starsHtml = generateStarRating(book.rating);
    
    // 更新模态框内容
    modalContent.innerHTML = `
        <span class="close-modal">&times;</span>
        <div class="book-detail">
            <div class="book-cover">
                <img id="modal-book-cover" src="${book.cover}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h2 id="modal-book-title">${book.title}</h2>
                <p id="modal-book-author">${book.author}</p>
                <div class="book-meta">
                    <span id="modal-book-category">${book.category}</span>
                    <span id="modal-book-date">${book.readDate}</span>
                </div>
                <div class="book-rating">
                    <span>评分：</span>
                    <div id="modal-book-rating">${starsHtml}</div>
                </div>
            </div>
        </div>
        <div class="book-notes">
            <h3>读书笔记</h3>
            <div id="modal-book-content">${book.content}</div>
        </div>
        <div class="book-tags">
            <span>标签：</span>
            <div id="modal-book-tags">${book.tags.map(tag => `<a href="#" class="tag">${tag}</a>`).join('')}</div>
        </div>
    `;
    
    // 显示模态框
    modal.style.display = 'block';
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    
    // 重新绑定关闭模态框事件
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // 为标签添加点击事件
    document.querySelectorAll('.book-tags .tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            // 关闭模态框
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // 筛选标签
            const tagText = this.textContent.trim();
            // 移除所有标签的激活状态
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            // 为当前标签添加激活状态
            const matchingTags = Array.from(document.querySelectorAll('.tag')).filter(t => t.textContent.trim() === tagText);
            matchingTags.forEach(t => t.classList.add('active'));
            // 筛选书籍
            const filteredBooks = booksData.filter(book => book.tags.includes(tagText));
            renderBooksList(filteredBooks);
        });
    });
}

// 生成星级评分
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // 添加实心星星
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '★';
    }
    
    // 添加半星
    if (halfStar) {
        starsHtml += '★½';
    }
    
    // 添加空心星星
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '☆';
    }
    
    return starsHtml;
}

// 设置无限滚动加载更多
function setupInfiniteScroll() {
    const loadingMore = document.querySelector('.loading-more');
    
    if (!loadingMore) return;
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // 当滚动到距离底部100px时，显示加载更多
        if (scrollPosition >= documentHeight - 100 && !loadingMore.classList.contains('show')) {
            // 显示加载更多
            loadingMore.classList.add('show');
            
            // 模拟加载延迟
            setTimeout(() => {
                // 这里可以添加加载更多书籍的逻辑
                // 为了演示，我们只是隐藏加载更多提示
                loadingMore.classList.remove('show');
            }, 2000);
        }
    });
}

// 扩展String.prototype添加contains方法
if (!String.prototype.contains) {
    String.prototype.contains = function(search) {
        return this.indexOf(search) !== -1;
    };
}