// 相册页面 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 图片数据
    const imagesData = [
        {
            id: 1,
            src: '../assets/images/photos/travel1.jpg',
            title: '北京故宫',
            description: '故宫博物院，中国明清两代的皇家宫殿，位于北京中轴线的中心。',
            category: 'travel',
            likes: 245
        },
        {
            id: 2,
            src: '../assets/images/photos/travel2.jpg',
            title: '上海外滩',
            description: '外滩是上海的风景线，周围还有位于黄浦江对岸浦东的东方明珠、金茂大厦等地标景观。',
            category: 'travel',
            likes: 189
        },
        {
            id: 3,
            src: '../assets/images/photos/food1.jpg',
            title: '北京烤鸭',
            description: '北京烤鸭是具有世界声誉的北京著名菜式，起源于中国南北朝时期。',
            category: 'food',
            likes: 321
        },
        {
            id: 4,
            src: '../assets/images/photos/food2.jpg',
            title: '四川火锅',
            description: '四川火锅以麻、辣、鲜、香著称，是中国传统饮食方式之一。',
            category: 'food',
            likes: 276
        },
        {
            id: 5,
            src: '../assets/images/photos/nature1.jpg',
            title: '山水风景',
            description: '壮丽的山水风景，大自然的鬼斧神工。',
            category: 'nature',
            likes: 156
        },
        {
            id: 6,
            src: '../assets/images/photos/nature2.jpg',
            title: '海边日落',
            description: '美丽的海边日落，金色的阳光洒在海面上。',
            category: 'nature',
            likes: 234
        },
        {
            id: 7,
            src: '../assets/images/photos/pets1.jpg',
            title: '可爱猫咪',
            description: '我家的猫咪，总是那么可爱和调皮。',
            category: 'pets',
            likes: 456
        },
        {
            id: 8,
            src: '../assets/images/photos/pets2.jpg',
            title: '狗狗日常',
            description: '狗狗的日常生活，充满活力和快乐。',
            category: 'pets',
            likes: 389
        },
        {
            id: 9,
            src: '../assets/images/photos/travel3.jpg',
            title: '杭州西湖',
            description: '西湖，位于浙江省杭州市西湖区龙井路1号，杭州市区西部。',
            category: 'travel',
            likes: 210
        },
        {
            id: 10,
            src: '../assets/images/photos/food3.jpg',
            title: '广东早茶',
            description: '广东早茶是汉族民间饮食风俗，流行于广东、香港和澳门等地。',
            category: 'food',
            likes: 287
        },
        {
            id: 11,
            src: '../assets/images/photos/nature3.jpg',
            title: '森林探险',
            description: '深入森林，探索大自然的奥秘。',
            category: 'nature',
            likes: 178
        },
        {
            id: 12,
            src: '../assets/images/photos/pets3.jpg',
            title: '宠物合照',
            description: '我家的猫咪和狗狗，虽然有时候会打架，但大部分时间还是很和谐的。',
            category: 'pets',
            likes: 521
        }
    ];
    
    // 模拟更多图片数据
    const getMoreImages = (startId, count) => {
        const categories = ['travel', 'food', 'nature', 'pets'];
        const moreImages = [];
        
        for (let i = 0; i < count; i++) {
            const id = startId + i;
            const category = categories[Math.floor(Math.random() * categories.length)];
            
            moreImages.push({
                id: id,
                src: `../assets/images/photos/${category}${Math.floor(Math.random() * 3) + 1}.jpg`,
                title: `${category === 'travel' ? '旅行' : category === 'food' ? '美食' : category === 'nature' ? '自然' : '宠物'}照片 ${id}`,
                description: `这是一张${category === 'travel' ? '旅行' : category === 'food' ? '美食' : category === 'nature' ? '自然' : '宠物'}照片的描述。`,
                category: category,
                likes: Math.floor(Math.random() * 500) + 100
            });
        }
        
        return moreImages;
    };
    
    // DOM元素
    const galleryContainer = document.querySelector('.masonry-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const loadingMore = document.querySelector('.loading-more');
    const imageViewer = document.getElementById('image-viewer');
    const closeViewer = document.querySelector('.close-viewer');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const currentImage = document.getElementById('current-image');
    const imageTitle = document.getElementById('image-title');
    const imageDesc = document.getElementById('image-desc');
    
    // 当前显示的图片
    let currentImages = [...imagesData];
    let currentFilter = 'all';
    let currentImageIndex = 0;
    let isLoading = false;
    let page = 1;
    const pageSize = 12;
    
    // 创建图片元素
    const createImageElement = (image) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = image.category;
        
        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="gallery-item-overlay">
                <h3 class="gallery-item-title">${image.title}</h3>
                <p class="gallery-item-desc">${image.description}</p>
                <div class="gallery-item-actions">
                    <span class="gallery-item-category">${image.category === 'travel' ? '旅行' : image.category === 'food' ? '美食' : image.category === 'nature' ? '自然' : '宠物'}</span>
                    <button class="like-btn" data-id="${image.id}">
                        <i class="far fa-heart"></i>
                        <span>${image.likes}</span>
                    </button>
                </div>
            </div>
        `;
        
        // 添加点击事件
        item.addEventListener('click', (e) => {
            // 如果点击的是点赞按钮，不打开查看器
            if (e.target.closest('.like-btn')) {
                return;
            }
            
            // 打开图片查看器
            openImageViewer(image);
        });
        
        // 添加点赞事件
        const likeBtn = item.querySelector('.like-btn');
        likeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止冒泡，避免打开查看器
            toggleLike(image.id);
        });
        
        return item;
    };
    
    // 渲染图片
    const renderImages = (images) => {
        images.forEach(image => {
            const imageElement = createImageElement(image);
            galleryContainer.appendChild(imageElement);
        });
    };
    
    // 初始化渲染
    renderImages(imagesData);
    
    // 筛选图片
    const filterImages = (category) => {
        currentFilter = category;
        
        // 更新筛选按钮状态
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
        
        // 清空容器
        galleryContainer.innerHTML = '';
        
        // 筛选图片
        let filteredImages;
        if (category === 'all') {
            filteredImages = currentImages;
        } else {
            filteredImages = currentImages.filter(img => img.category === category);
        }
        
        // 重新渲染
        renderImages(filteredImages);
    };
    
    // 筛选按钮事件
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterImages(btn.dataset.filter);
        });
    });
    
    // 滚动加载更多
    const loadMoreImages = () => {
        if (isLoading) return;
        
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        
        // 当滚动到距离底部200px时加载更多
        if (scrollTop + clientHeight >= scrollHeight - 200) {
            loadMore();
        }
    };
    
    const loadMore = async () => {
        isLoading = true;
        loadingMore.classList.add('show');
        
        // 模拟加载延迟
        setTimeout(() => {
            page++;
            const newImages = getMoreImages(imagesData.length + 1, pageSize);
            currentImages = [...currentImages, ...newImages];
            
            // 只渲染符合当前筛选条件的图片
            let imagesToRender = newImages;
            if (currentFilter !== 'all') {
                imagesToRender = newImages.filter(img => img.category === currentFilter);
            }
            
            renderImages(imagesToRender);
            
            isLoading = false;
            loadingMore.classList.remove('show');
        }, 1500);
    };
    
    // 添加滚动事件监听
    window.addEventListener('scroll', loadMoreImages);
    
    // 点赞功能
    const toggleLike = (imageId) => {
        const image = currentImages.find(img => img.id === imageId);
        if (!image) return;
        
        // 检查是否已经点赞
        const likeBtn = document.querySelector(`.like-btn[data-id="${imageId}"]`);
        const isLiked = likeBtn.classList.contains('liked');
        
        if (isLiked) {
            // 取消点赞
            image.likes--;
            likeBtn.classList.remove('liked');
            likeBtn.querySelector('i').className = 'far fa-heart';
        } else {
            // 点赞
            image.likes++;
            likeBtn.classList.add('liked');
            likeBtn.querySelector('i').className = 'fas fa-heart';
            
            // 添加点赞动画
            likeBtn.querySelector('i').style.animation = 'likeAnimation 0.3s ease';
            setTimeout(() => {
                likeBtn.querySelector('i').style.animation = '';
            }, 300);
        }
        
        // 更新点赞数
        likeBtn.querySelector('span').textContent = image.likes;
    };
    
    // 打开图片查看器
    const openImageViewer = (image) => {
        currentImageIndex = currentImages.findIndex(img => img.id === image.id);
        
        currentImage.src = image.src;
        imageTitle.textContent = image.title;
        imageDesc.textContent = image.description;
        
        imageViewer.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // 添加淡入动画
        setTimeout(() => {
            imageViewer.querySelector('.viewer-content').style.opacity = '1';
            imageViewer.querySelector('.image-info').style.opacity = '1';
        }, 10);
    };
    
    // 关闭图片查看器
    const closeImageViewer = () => {
        imageViewer.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // 重置动画
        imageViewer.querySelector('.viewer-content').style.opacity = '0';
        imageViewer.querySelector('.image-info').style.opacity = '0';
    };
    
    // 查看下一张图片
    const showNextImage = () => {
        let filteredImages = currentImages;
        if (currentFilter !== 'all') {
            filteredImages = currentImages.filter(img => img.category === currentFilter);
        }
        
        currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
        const nextImage = filteredImages[currentImageIndex];
        
        currentImage.src = nextImage.src;
        imageTitle.textContent = nextImage.title;
        imageDesc.textContent = nextImage.description;
        
        // 添加切换动画
        currentImage.style.opacity = '0';
        setTimeout(() => {
            currentImage.style.opacity = '1';
        }, 100);
    };
    
    // 查看上一张图片
    const showPrevImage = () => {
        let filteredImages = currentImages;
        if (currentFilter !== 'all') {
            filteredImages = currentImages.filter(img => img.category === currentFilter);
        }
        
        currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
        const prevImage = filteredImages[currentImageIndex];
        
        currentImage.src = prevImage.src;
        imageTitle.textContent = prevImage.title;
        imageDesc.textContent = prevImage.description;
        
        // 添加切换动画
        currentImage.style.opacity = '0';
        setTimeout(() => {
            currentImage.style.opacity = '1';
        }, 100);
    };
    
    // 事件监听
    closeViewer.addEventListener('click', closeImageViewer);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // 点击查看器外部关闭
    imageViewer.addEventListener('click', (e) => {
        if (e.target === imageViewer) {
            closeImageViewer();
        }
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
        if (imageViewer.classList.contains('show')) {
            if (e.key === 'Escape') {
                closeImageViewer();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
    
    // 添加点赞动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes likeAnimation {
            0% { transform: scale(1); }
            50% { transform: scale(1.5); }
            100% { transform: scale(1); }
        }
        
        .viewer-content {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .image-info {
            opacity: 0;
            transition: opacity 0.3s ease 0.2s;
        }
        
        #current-image {
            transition: opacity 0.2s ease;
        }
    `;
    document.head.appendChild(style);
    
    // 页面滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.gallery-header, .gallery-filters, .gallery-container').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
});