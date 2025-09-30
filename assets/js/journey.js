// 旅程页面 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 初始化地图
    const map = L.map('map').setView([35.8617, 104.1954], 4); // 中国中心点
    
    // 添加底图图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);
    
    // 自定义标记样式
    const visitedIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: var(--primary-color); border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; color: white;"><i class="fas fa-map-marker-alt"></i></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    const planIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: var(--secondary-color); border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; color: white;"><i class="fas fa-flag"></i></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    // 旅行地点数据
    const travelLocations = [
        {
            name: '北京',
            coordinates: [39.9042, 116.4074],
            type: 'visited',
            date: '2023年5月',
            description: '游览了故宫、长城、颐和园等著名景点，感受了北京的历史文化底蕴。'
        },
        {
            name: '上海',
            coordinates: [31.2304, 121.4737],
            type: 'visited',
            date: '2022年10月',
            description: '参观了外滩、东方明珠，体验了上海的现代都市魅力。'
        },
        {
            name: '杭州',
            coordinates: [30.2741, 120.1551],
            type: 'visited',
            date: '2021年7月',
            description: '欣赏了西湖美景，品尝了当地美食，感受了江南水乡的韵味。'
        },
        {
            name: '成都',
            coordinates: [30.5728, 104.0668],
            type: 'visited',
            date: '2020年8月',
            description: '品尝了正宗川菜，参观了大熊猫基地，体验了悠闲的生活节奏。'
        },
        {
            name: '西安',
            coordinates: [34.3416, 108.9398],
            type: 'visited',
            date: '2019年10月',
            description: '参观了兵马俑、大雁塔，感受了古都的历史文化魅力。'
        },
        {
            name: '拉萨',
            coordinates: [29.6500, 91.1000],
            type: 'plan',
            date: '计划中',
            description: '计划前往布达拉宫、纳木错等景点，体验高原风情。'
        },
        {
            name: '三亚',
            coordinates: [18.1803, 109.5000],
            type: 'plan',
            date: '计划中',
            description: '计划前往三亚湾、亚龙湾，享受阳光沙滩和碧海蓝天。'
        }
    ];
    
    // 在地图上添加标记
    const markers = [];
    
    travelLocations.forEach(location => {
        const icon = location.type === 'visited' ? visitedIcon : planIcon;
        const marker = L.marker(location.coordinates, { icon: icon }).addTo(map);
        
        marker.bindPopup(`
            <div class="popup-content">
                <h3>${location.name}</h3>
                <p><strong>时间：</strong>${location.date}</p>
                <p><strong>描述：</strong>${location.description}</p>
            </div>
        `);
        
        markers.push(marker);
    });
    
    // 创建旅行路线
    const visitedCoordinates = travelLocations
        .filter(location => location.type === 'visited')
        .map(location => location.coordinates);
    
    if (visitedCoordinates.length > 1) {
        const polyline = L.polyline(visitedCoordinates, {
            color: '#3498db',
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10'
        }).addTo(map);
        
        // 添加路线动画效果
        setTimeout(() => {
            polyline.setStyle({ opacity: 1, dashArray: '5, 5' });
        }, 1000);
    }
    
    // 模态框交互
    const modal = document.getElementById('journey-modal');
    const addJourneyBtn = document.getElementById('add-journey-btn');
    const closeModal = document.getElementsByClassName('close-modal')[0];
    const journeyForm = document.getElementById('journey-form');
    
    // 打开模态框
    addJourneyBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 表单提交
    journeyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('journey-title').value;
        const location = document.getElementById('journey-location').value;
        const date = document.getElementById('journey-date').value;
        const desc = document.getElementById('journey-desc').value;
        const lat = parseFloat(document.getElementById('journey-lat').value);
        const lng = parseFloat(document.getElementById('journey-lng').value);
        
        // 添加新的旅行地点
        const newLocation = {
            name: location,
            coordinates: [lat, lng],
            type: 'visited',
            date: date,
            description: desc
        };
        
        travelLocations.push(newLocation);
        
        // 在地图上添加新标记
        const marker = L.marker([lat, lng], { icon: visitedIcon }).addTo(map);
        marker.bindPopup(`
            <div class="popup-content">
                <h3>${location}</h3>
                <p><strong>时间：</strong>${date}</p>
                <p><strong>描述：</strong>${desc}</p>
            </div>
        `);
        
        // 重新创建路线
        const updatedVisitedCoordinates = travelLocations
            .filter(loc => loc.type === 'visited')
            .map(loc => loc.coordinates);
        
        // 清除旧路线
        map.eachLayer(layer => {
            if (layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });
        
        // 添加新路线
        if (updatedVisitedCoordinates.length > 1) {
            L.polyline(updatedVisitedCoordinates, {
                color: '#3498db',
                weight: 3,
                opacity: 0.7,
                dashArray: '10, 10'
            }).addTo(map);
        }
        
        // 添加新的旅程列表项
        const journeyItems = document.querySelector('.journey-items');
        const newJourneyItem = document.createElement('div');
        newJourneyItem.className = 'journey-item';
        newJourneyItem.innerHTML = `
            <div class="journey-image">
                <img src="../assets/images/default.jpg" alt="${location}">
            </div>
            <div class="journey-info">
                <h3>${title}</h3>
                <p class="journey-date">${date}</p>
                <p class="journey-desc">${desc}</p>
            </div>
        `;
        
        journeyItems.insertBefore(newJourneyItem, journeyItems.firstChild);
        
        // 添加动画效果
        newJourneyItem.style.opacity = '0';
        newJourneyItem.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            newJourneyItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            newJourneyItem.style.opacity = '1';
            newJourneyItem.style.transform = 'translateX(0)';
        }, 10);
        
        // 关闭模态框并重置表单
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        journeyForm.reset();
        
        // 地图居中到新添加的位置
        map.setView([lat, lng], 8);
    });
    
    // 旅程列表项交互
    const journeyItems = document.querySelectorAll('.journey-item');
    
    journeyItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const location = travelLocations[index];
            if (location) {
                map.setView(location.coordinates, 8);
                // 触发标记的弹出窗口
                markers[index]?.openPopup();
            }
        });
    });
    
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
    
    document.querySelectorAll('.journey-header, .map-container, .journey-list').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
    
    // 响应式处理
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            map.setView([35.8617, 104.1954], 3);
        } else {
            map.setView([35.8617, 104.1954], 4);
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
});