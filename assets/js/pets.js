// 宠物页面JavaScript

// 示例宠物数据
const petsData = [
    {
        id: 1,
        name: '小白',
        type: '柯基犬',
        gender: '公',
        birthday: '2020-05-15',
        age: '3岁',
        image: 'https://picsum.photos/id/237/600/800',
        personality: '活泼、聪明、粘人',
        favoriteFood: '鸡肉、胡萝卜',
        favoriteActivity: '玩球、散步',
        description: '小白是一只可爱的柯基犬，有着标志性的短腿和大屁股。性格非常活泼，喜欢和人互动，特别粘人。',
        fullDescription: `
            <p>小白是我在2020年6月领养的一只柯基犬，当时它只有一个多月大，小小的一团特别可爱。刚开始的时候，它还有点认生，总是躲在角落里不敢出来。</p>
            <p>经过一段时间的相处，小白逐渐变得活泼开朗起来。它非常聪明，很快就学会了各种指令，如坐下、握手、趴下等。每天下班回家，它都会在门口迎接我，摇着尾巴转圈，让我感到特别温暖。</p>
            <p>小白特别喜欢出去玩，尤其是喜欢玩球。每次带它去公园，它都会追着球跑个不停，直到累得气喘吁吁才肯回家。它也很喜欢和其他狗狗一起玩，总是能很快和其他狗狗成为朋友。</p>
            <p>虽然小白有时候也会调皮捣蛋，比如咬坏我的鞋子、偷吃我的零食，但它给我的生活带来了很多欢乐和陪伴。我很庆幸能够遇到它，成为它的主人。</p>
        `,
        highlights: [
            {
                title: '聪明伶俐',
                description: '很快就能学会各种指令，非常有灵性。'
            },
            {
                title: '友好亲人',
                description: '对人非常友好，特别喜欢和小朋友玩耍。'
            },
            {
                title: '活泼好动',
                description: '精力充沛，喜欢各种户外活动。'
            }
        ],
        growthRecords: [
            {
                date: '2020-06-01',
                title: '来到新家',
                description: '小白第一次来到家里，还有点害怕，躲在角落里不敢出来。',
                image: 'https://picsum.photos/id/169/600/400'
            },
            {
                date: '2020-07-15',
                title: '学会了坐下',
                description: '经过两周的训练，小白终于学会了"坐下"的指令。',
                image: 'https://picsum.photos/id/169/600/400'
            },
            {
                date: '2021-05-15',
                title: '一周岁生日',
                description: '小白的第一个生日，我们为它准备了特别的生日蛋糕。',
                image: 'https://picsum.photos/id/169/600/400'
            },
            {
                date: '2022-03-10',
                title: '第一次去海边',
                description: '带小白去海边玩，它第一次见到大海，非常兴奋。',
                image: 'https://picsum.photos/id/169/600/400'
            },
            {
                date: '2023-05-15',
                title: '三周岁生日',
                description: '小白已经三岁了，是一只成熟的狗狗了。',
                image: 'https://picsum.photos/id/169/600/400'
            }
        ],
        photos: [
            { id: 1, src: 'https://picsum.photos/id/237/400/300', category: '日常' },
            { id: 2, src: 'https://picsum.photos/id/237/400/300', category: '户外' },
            { id: 3, src: 'https://picsum.photos/id/237/400/300', category: '玩耍' },
            { id: 4, src: 'https://picsum.photos/id/237/400/300', category: '日常' },
            { id: 5, src: 'https://picsum.photos/id/237/400/300', category: '户外' },
            { id: 6, src: 'https://picsum.photos/id/237/400/300', category: '玩耍' },
            { id: 7, src: 'https://picsum.photos/id/237/400/300', category: '日常' },
            { id: 8, src: 'https://picsum.photos/id/237/400/300', category: '户外' },
            { id: 9, src: 'https://picsum.photos/id/237/400/300', category: '玩耍' }
        ],
        moments: [
            {
                id: 1,
                date: '2023-06-10',
                text: '今天带小白去公园玩，它遇到了一只小伙伴，两个家伙玩得特别开心，都不想回家了。',
                image: 'https://picsum.photos/id/237/600/400',
                likes: 42
            },
            {
                id: 2,
                date: '2023-06-05',
                text: '小白最近学会了一项新技能，就是用鼻子顶球，特别可爱！看来平时的训练没有白费。',
                image: 'https://picsum.photos/id/237/600/400',
                likes: 38
            },
            {
                id: 3,
                date: '2023-05-28',
                text: '今天给小白做了它最喜欢的鸡肉胡萝卜饭，吃得可香了，一下子就光盘了。',
                image: 'https://picsum.photos/id/237/600/400',
                likes: 29
            }
        ]
    },
    {
        id: 2,
        name: '花花',
        type: '英短猫',
        gender: '母',
        birthday: '2021-08-08',
        age: '2岁',
        image: 'https://picsum.photos/id/40/600/800',
        personality: '优雅、安静、独立',
        favoriteFood: '猫粮、罐头',
        favoriteActivity: '睡觉、晒太阳',
        description: '花花是一只漂亮的英短猫，有着圆润的脸庞和蓝眼睛。性格比较安静，喜欢独处，但是偶尔也会撒娇。',
        fullDescription: `
            <p>花花是我在2021年9月领养的一只英短猫，当时它只有一个月大，小小的一只特别可爱。花花的性格比较安静，不像其他小猫那样调皮捣蛋。</p>
            <p>花花特别喜欢睡觉，一天要睡十几个小时，而且总是能找到家里最舒服的地方睡觉。它也很喜欢晒太阳，每当阳光照进房间，它就会跑到窗台上去晒太阳，眯着眼睛特别享受的样子。</p>
            <p>虽然花花平时比较独立，不太粘人，但是偶尔也会撒娇。比如当它想要吃东西的时候，就会用头蹭我的手，或者在我脚边打转，用这种方式来表达它的需求。</p>
            <p>花花是一只非常有个性的猫，它有着自己的想法和脾气，但是这正是我喜欢它的地方。它给我的生活带来了很多乐趣和温暖。</p>
        `,
        highlights: [
            {
                title: '安静优雅',
                description: '举止优雅，性格安静，不喜欢吵闹。'
            },
            {
                title: '独立自强',
                description: '不需要过多的关注，能够自己找乐子。'
            },
            {
                title: '爱干净',
                description: '非常注重卫生，总是把自己收拾得干干净净。'
            }
        ],
        growthRecords: [
            {
                date: '2021-09-01',
                title: '来到新家',
                description: '花花第一次来到家里，对一切都很好奇，到处探索。',
                image: 'https://picsum.photos/id/40/600/400'
            },
            {
                title: '2021-10-15',
                title: '第一次洗澡',
                description: '花花第一次洗澡，虽然很害怕，但是表现得很勇敢。',
                image: 'https://picsum.photos/id/40/600/400'
            },
            {
                title: '2022-08-08',
                title: '一周岁生日',
                description: '花花的第一个生日，我们为它准备了特别的猫蛋糕。',
                image: 'https://picsum.photos/id/40/600/400'
            },
            {
                title: '2023-02-20',
                title: '学会了用猫抓板',
                description: '经过一段时间的训练，花花终于学会了用猫抓板，不再抓沙发了。',
                image: 'https://picsum.photos/id/40/600/400'
            },
            {
                title: '2023-08-08',
                title: '两周岁生日',
                description: '花花已经两岁了，越来越漂亮了。',
                image: 'https://picsum.photos/id/40/600/400'
            }
        ],
        photos: [
            { id: 1, src: 'https://picsum.photos/id/40/400/300', category: '日常' },
            { id: 2, src: 'https://picsum.photos/id/40/400/300', category: '睡觉' },
            { id: 3, src: 'https://picsum.photos/id/40/400/300', category: '玩耍' },
            { id: 4, src: 'https://picsum.photos/id/40/400/300', category: '日常' },
            { id: 5, src: 'https://picsum.photos/id/40/400/300', category: '睡觉' },
            { id: 6, src: 'https://picsum.photos/id/40/400/300', category: '玩耍' },
            { id: 7, src: 'https://picsum.photos/id/40/400/300', category: '日常' },
            { id: 8, src: 'https://picsum.photos/id/40/400/300', category: '睡觉' },
            { id: 9, src: 'https://picsum.photos/id/40/400/300', category: '玩耍' }
        ],
        moments: [
            {
                id: 1,
                date: '2023-06-12',
                text: '今天发现花花居然会自己开抽屉，太聪明了！看来以后要把零食藏好了。',
                image: 'https://picsum.photos/id/40/600/400',
                likes: 56
            },
            {
                id: 2,
                date: '2023-06-08',
                text: '花花最近迷上了看窗外，一坐就是几个小时，不知道在想什么。',
                image: 'https://picsum.photos/id/40/600/400',
                likes: 42
            },
            {
                id: 3,
                date: '2023-06-01',
                text: '给花花买了新的猫窝，它很喜欢，一进去就不愿意出来了。',
                image: 'https://picsum.photos/id/40/600/400',
                likes: 38
            }
        ]
    }
];

// 当前选中的宠物ID
let currentPetId = 1;
// 当前选中的标签页
let currentTab = 'profile';

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPetsPage();
});

// 初始化宠物页面
function initPetsPage() {
    // 渲染宠物卡片
    renderPetCards(petsData);
    
    // 渲染宠物详情（默认显示第一只宠物的档案）
    renderPetDetails(currentPetId, currentTab);
    
    // 设置宠物卡片点击事件
    setupPetCardClick();
    
    // 设置标签页切换
    setupPetTabs();
}

// 渲染宠物卡片
function renderPetCards(pets) {
    const petsGrid = document.getElementById('pets-grid');
    if (!petsGrid) return;
    
    // 清空网格
    petsGrid.innerHTML = '';
    
    // 渲染每张宠物卡片
    pets.forEach(pet => {
        const isActive = pet.id === currentPetId ? 'active' : '';
        const petCard = document.createElement('div');
        petCard.className = `pet-card ${isActive}`;
        petCard.dataset.id = pet.id;
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}" loading="lazy">
            </div>
            <div class="pet-badge">${pet.type}</div>
            <div class="pet-content">
                <h3 class="pet-name">
                    ${pet.name}
                    <i class="fas ${pet.gender === '公' ? 'fa-mars' : 'fa-venus'}" style="color: ${pet.gender === '公' ? '#3498db' : '#e74c3c'}"></i>
                </h3>
                <p class="pet-type">${pet.type}</p>
                <div class="pet-stats">
                    <div class="pet-stat">
                        <i class="fas fa-calendar"></i>
                        <span>${pet.birthday}</span>
                    </div>
                    <div class="pet-stat">
                        <i class="fas fa-birthday-cake"></i>
                        <span>${pet.age}</span>
                    </div>
                </div>
                <p class="pet-description">${pet.description}</p>
                <a href="#" class="view-details-btn">查看详情</a>
            </div>
        `;
        
        petsGrid.appendChild(petCard);
    });
}

// 渲染宠物详情
function renderPetDetails(petId, tab) {
    const petDetailsContent = document.getElementById('pet-details-content');
    if (!petDetailsContent) return;
    
    // 查找宠物数据
    const pet = petsData.find(p => p.id === petId);
    
    if (!pet) {
        petDetailsContent.innerHTML = '<p class="no-pet">未找到宠物信息</p>';
        return;
    }
    
    // 根据选中的标签页渲染不同的内容
    let contentHtml = '';
    
    switch(tab) {
        case 'profile':
            contentHtml = renderPetProfile(pet);
            break;
        case 'growth':
            contentHtml = renderPetGrowth(pet);
            break;
        case 'photos':
            contentHtml = renderPetPhotos(pet);
            break;
        case 'moments':
            contentHtml = renderPetMoments(pet);
            break;
        default:
            contentHtml = renderPetProfile(pet);
    }
    
    // 更新详情内容
    petDetailsContent.innerHTML = contentHtml;
    
    // 如果是照片页面，设置照片筛选功能
    if (tab === 'photos') {
        setupPhotoFilter(pet);
    }
    
    // 如果是日常点滴页面，设置点赞功能
    if (tab === 'moments') {
        setupLikeButtons();
    }
}

// 渲染宠物档案
function renderPetProfile(pet) {
    // 生成亮点内容
    const highlightsHtml = pet.highlights.map(highlight => `
        <div class="pet-highlight">
            <h4>
                <i class="fas fa-star"></i>
                ${highlight.title}
            </h4>
            <p>${highlight.description}</p>
        </div>
    `).join('');
    
    return `
        <div class="pet-profile-content">
            <div class="pet-profile-image">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <div class="pet-profile-info">
                <h2 class="pet-profile-name">
                    ${pet.name}
                    <i class="fas ${pet.gender === '公' ? 'fa-mars' : 'fa-venus'}" style="color: ${pet.gender === '公' ? '#3498db' : '#e74c3c'}"></i>
                </h2>
                <p class="pet-profile-type">${pet.type}</p>
                
                <div class="pet-profile-stats">
                    <div class="pet-profile-stat">
                        <i class="fas fa-calendar"></i>
                        <div class="pet-profile-stat-info">
                            <h4>出生日期</h4>
                            <p>${pet.birthday}</p>
                        </div>
                    </div>
                    <div class="pet-profile-stat">
                        <i class="fas fa-birthday-cake"></i>
                        <div class="pet-profile-stat-info">
                            <h4>年龄</h4>
                            <p>${pet.age}</p>
                        </div>
                    </div>
                    <div class="pet-profile-stat">
                        <i class="fas fa-heart"></i>
                        <div class="pet-profile-stat-info">
                            <h4>性格</h4>
                            <p>${pet.personality}</p>
                        </div>
                    </div>
                    <div class="pet-profile-stat">
                        <i class="fas fa-utensils"></i>
                        <div class="pet-profile-stat-info">
                            <h4>喜欢的食物</h4>
                            <p>${pet.favoriteFood}</p>
                        </div>
                    </div>
                </div>
                
                <div class="pet-profile-description">
                    ${pet.fullDescription}
                </div>
                
                <div class="pet-profile-highlights">
                    ${highlightsHtml}
                </div>
            </div>
        </div>
    `;
}

// 渲染成长记录
function renderPetGrowth(pet) {
    const growthHtml = pet.growthRecords.map(record => `
        <div class="growth-item">
            <div class="growth-date">${record.date}</div>
            <h3 class="growth-title">${record.title}</h3>
            <p class="growth-description">${record.description}</p>
            <div class="growth-image">
                <img src="${record.image}" alt="${record.title}">
            </div>
        </div>
    `).join('');
    
    return `
        <div class="pet-growth-content">
            <div class="growth-timeline">
                ${growthHtml}
            </div>
        </div>
    `;
}

// 渲染照片合集
function renderPetPhotos(pet) {
    // 获取所有照片分类
    const categories = ['全部', ...new Set(pet.photos.map(photo => photo.category))];
    
    // 生成分类按钮
    const categoryButtonsHtml = categories.map(category => `
        <button class="photo-filter-btn ${category === '全部' ? 'active' : ''}" data-category="${category}">
            ${category}
        </button>
    `).join('');
    
    // 生成照片网格
    const photosHtml = pet.photos.map(photo => `
        <div class="photo-item" data-category="${photo.category}">
            <img src="${photo.src}" alt="${pet.name}">
        </div>
    `).join('');
    
    return `
        <div class="pet-photos-content">
            <div class="photos-filter">
                ${categoryButtonsHtml}
            </div>
            <div class="photos-grid" id="photos-grid">
                ${photosHtml}
            </div>
        </div>
    `;
}

// 渲染日常点滴
function renderPetMoments(pet) {
    const momentsHtml = pet.moments.map(moment => `
        <div class="moment-card">
            <div class="moment-image">
                <img src="${moment.image}" alt="${moment.date}">
            </div>
            <div class="moment-content">
                <div class="moment-date">${moment.date}</div>
                <p class="moment-text">${moment.text}</p>
                <div class="moment-actions">
                    <div class="moment-likes">
                        <button class="like-btn" data-id="${moment.id}">
                            <i class="far fa-heart"></i>
                        </button>
                        <span class="like-count">${moment.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    return `
        <div class="pet-moments-content">
            <div class="moments-grid">
                ${momentsHtml}
            </div>
        </div>
    `;
}

// 设置宠物卡片点击事件
function setupPetCardClick() {
    const petCards = document.querySelectorAll('.pet-card');
    
    if (!petCards.length) return;
    
    petCards.forEach(card => {
        card.addEventListener('click', function() {
            const petId = parseInt(this.dataset.id);
            
            // 更新当前选中的宠物ID
            currentPetId = petId;
            
            // 更新卡片的激活状态
            petCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // 重新渲染宠物详情
            renderPetDetails(currentPetId, currentTab);
            
            // 滚动到详情区域
            const petDetailsSection = document.getElementById('pet-details-section');
            if (petDetailsSection) {
                petDetailsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 设置标签页切换
function setupPetTabs() {
    const tabBtns = document.querySelectorAll('.pet-tabs .tab-btn');
    
    if (!tabBtns.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            // 更新当前选中的标签页
            currentTab = tab;
            
            // 更新按钮的激活状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 重新渲染宠物详情
            renderPetDetails(currentPetId, currentTab);
        });
    });
}

// 设置照片筛选功能
function setupPhotoFilter(pet) {
    const filterBtns = document.querySelectorAll('.photo-filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');
    
    if (!filterBtns.length || !photoItems.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 更新按钮的激活状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选照片
            photoItems.forEach(item => {
                if (category === '全部' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 添加照片点击放大效果
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            // 这里可以添加照片放大查看功能
            alert('点击了照片，可以实现照片放大查看功能');
        });
    });
}

// 设置点赞功能
function setupLikeButtons() {
    const likeBtns = document.querySelectorAll('.like-btn');
    
    if (!likeBtns.length) return;
    
    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const momentId = parseInt(this.dataset.id);
            const likeCount = this.nextElementSibling;
            const currentLikes = parseInt(likeCount.textContent);
            
            // 切换点赞状态
            this.classList.toggle('liked');
            
            if (this.classList.contains('liked')) {
                // 点赞
                likeCount.textContent = currentLikes + 1;
                this.innerHTML = '<i class="fas fa-heart"></i>';
            } else {
                // 取消点赞
                likeCount.textContent = currentLikes - 1;
                this.innerHTML = '<i class="far fa-heart"></i>';
            }
        });
    });
}

// 添加动画效果
function addAnimation() {
    const petCards = document.querySelectorAll('.pet-card');
    
    petCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });
    });
}