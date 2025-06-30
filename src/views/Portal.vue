<template>
  <div class="portal-container">
    <!-- 联系信息收集模态框 -->
    <ContactModal 
      :visible="contactModal.visible"
      :title="contactModal.title"
      :description="contactModal.description"
      @close="handleCloseContactModal"
      @submit="handleSubmitContact"
    />
    
    <!-- 顶部导航栏 -->
    <header class="portal-header">
      <nav class="nav-container">
        <div class="nav-brand">
          <h1 class="brand-title">防爆产业数据中心</h1>
        </div>
        
        <div class="nav-menu">
          <a href="#resources" class="nav-link">资源库</a>
          <a href="#projects" class="nav-link">招标项目库</a>
          <a href="#solutions" class="nav-link">方案库</a>
          <a href="#experts" class="nav-link">专家库</a>
          <a href="#talents" class="nav-link">人才库</a>
        </div>
        
        <div class="nav-actions">
          <button class="btn-login" @click="handleLogin">登录</button>
          <button class="btn-register" @click="handleRegister">注册</button>
        </div>
      </nav>
    </header>

    <!-- 主横幅区域 -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">工业资源库</h1>
          <p class="hero-subtitle">防爆产业数据中心，数据的海洋，为企业为个人解决问题突破困局</p>
          <p class="hero-description">
            提供制造业、新能源、数字经济、化工、有色金属、加工制造等行业的产品数据<br>
            为企业、个人提供全方位数据，开启机遇挑战、人才储备、助力其快速发展
          </p>
        </div>
      </div>
    </section>

    <!-- 注册会员优享服务 -->
    <section class="member-benefits">
      <div class="section-container">
        <h2 class="section-title">注册会员优享服务</h2>
        <p class="section-subtitle">防爆产业数据中心，注册会员、上传资源，享更多免费、打折优惠服务</p>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <h3 class="benefit-title">首单免费</h3>
            <p class="benefit-desc">新用户注册即享首次查询免费</p>
            <button class="btn-benefit" @click="handleViewMore">查看更多</button>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title">更多限时免费资源</h3>
            <p class="benefit-desc">定期开放免费资源下载</p>
            <button class="btn-benefit" @click="handleViewMore">查看更多</button>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title">更多打折优惠服务</h3>
            <p class="benefit-desc">会员专享折扣优惠</p>
            <button class="btn-benefit" @click="handleViewMore">查看更多</button>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title">上传资源赢免单</h3>
            <p class="benefit-desc">贡献资源获得免费额度</p>
            <button class="btn-benefit" @click="handleViewMore">查看更多</button>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-number">{{ stats.users.toLocaleString() }}位</span>
            <span class="stat-label">注册用户</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ stats.resources.toLocaleString() }}份</span>
            <span class="stat-label">数据资源</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据库分类 -->
    <section class="database-categories">
      <div class="section-container">
        <h2 class="section-title">数据库分类</h2>
        <p class="section-subtitle">防爆产业数据中心提供多种数据分类库，满足企业、个人不同层面，多方位需求</p>
        
        <div class="category-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['tab-button', { active: activeCategory === category.id }]"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div class="category-content">
          <div v-for="category in categories" :key="category.id" v-show="activeCategory === category.id">
            <div class="category-info">
              <h3 class="category-title">{{ category.name }}</h3>
              <p class="category-description">{{ category.description }}</p>
              <button class="btn-learn-more" @click="handleLearnMore(category)">了解更多 >></button>
            </div>
            
            <div class="category-items">
              <div class="items-grid">
                <div 
                  v-for="item in category.items" 
                  :key="item.id"
                  class="item-card"
                  @click="handleItemClick(item)"
                >
                  <div class="item-icon">{{ item.icon }}</div>
                  <h4 class="item-title">{{ item.title }}</h4>
                  <p class="item-desc">{{ item.description }}</p>
                  <button class="btn-item-more">了解更多 >></button>
                </div>
              </div>
            </div>

            <div class="category-stats">
              <div class="category-stat">
                <span class="stat-value">{{ category.stats.total.toLocaleString() }}份</span>
                <span class="stat-name">累计数据资源</span>
              </div>
              <div class="category-stat">
                <span class="stat-value">{{ category.stats.uploaded.toLocaleString() }}份</span>
                <span class="stat-name">用户上传</span>
              </div>
              <div class="category-stat">
                <span class="stat-value">{{ category.stats.companies.toLocaleString() }}家</span>
                <span class="stat-name">累计服务企业</span>
              </div>
              <div class="category-stat">
                <span class="stat-value">{{ category.stats.individuals.toLocaleString() }}位</span>
                <span class="stat-name">累计服务个人</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="partners">
      <div class="section-container">
        <h2 class="section-title">合作伙伴</h2>
        <p class="section-subtitle">致力于帮助合作伙伴构建基于防爆产业数据中心的全套数据方案</p>
        
        <div class="partners-grid">
          <div v-for="partner in partners" :key="partner.id" class="partner-item">
            <div class="partner-logo">{{ partner.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="portal-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4 class="footer-title">咨询热线</h4>
            <p class="footer-phone">电话：400-888-6725</p>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">关于我们</h4>
            <div class="footer-links">
              <a href="#" class="footer-link">企业简介</a>
              <a href="#" class="footer-link">新闻动态</a>
              <a href="#" class="footer-link">品牌实力</a>
              <a href="#" class="footer-link">代理合作</a>
              <a href="#" class="footer-link">诚聘英才</a>
              <a href="#" class="footer-link">联系我们</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">友情链接</h4>
            <div class="footer-links">
              <a href="#" class="footer-link">工业互联网风向标</a>
              <a href="#" class="footer-link">在线咨询</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="copyright">
            Copyright©2008-2025 Industrial Data Center Corporation， All Rights Reserved<br>
            地址：中国·北京市海淀区中关村科技园区 电话：400-888-6725 京ICP备11002812号
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ContactModal from '@/components/ContactModal.vue'

const router = useRouter()

// 响应式数据
const activeCategory = ref(1)

// 联系模态框状态
const contactModal = ref({
  visible: false,
  title: '获取详细信息',
  description: '请留下您的联系方式，我们将为您提供更详细的资料和专业咨询服务。'
})

// 统计数据
const stats = ref({
  users: 1384754,
  resources: 347110
})

// 数据库分类
const categories = ref([
  {
    id: 1,
    name: '工业资源库',
    description: '防爆产业数据中心从不同层级收录不同行业的数据，用户可以了解工业领域的不同场景，以及各个场景下对应的问题及解决方法。为企业解决难题、突破困局，使企业得到飞速发展，为个人提供海量数据，解决工作、学习、生活中遇到的问题。',
    items: [
      { id: 1, title: '安全行业', description: '安全设备与解决方案', icon: '🛡️' },
      { id: 2, title: '电力', description: '电力设备与技术', icon: '⚡' },
      { id: 3, title: '水利', description: '水利工程与设备', icon: '💧' },
      { id: 4, title: '能源', description: '新能源技术与设备', icon: '🔋' },
      { id: 5, title: '通用机械', description: '通用机械设备', icon: '⚙️' },
      { id: 6, title: '建筑材料', description: '建筑材料与技术', icon: '🏗️' },
      { id: 7, title: '泵阀', description: '泵阀设备与技术', icon: '🔧' },
      { id: 8, title: '电气', description: '电气设备与系统', icon: '🔌' }
    ],
    stats: {
      total: 347110,
      uploaded: 115703,
      companies: 38887,
      individuals: 9883
    }
  },
  {
    id: 2,
    name: '招标项目库',
    description: '招标项目库可为企业提供更多的机遇，是带动企业项目实施、促进企业发展的重要载体，关系着企业发展全局。因此，对于实现企业经济发展预期，增强企业发展信心，具有不可估量的重要意义。',
    items: [
      { id: 1, title: '煤炭化工', description: '煤炭化工项目', icon: '⚫' },
      { id: 2, title: '电力', description: '电力工程项目', icon: '⚡' },
      { id: 3, title: '石油化工', description: '石化工程项目', icon: '🛢️' },
      { id: 4, title: '金融', description: '金融服务项目', icon: '💰' },
      { id: 5, title: '航空航天', description: '航空航天项目', icon: '🚀' },
      { id: 6, title: '建筑', description: '建筑工程项目', icon: '🏢' },
      { id: 7, title: '有色', description: '有色金属项目', icon: '🔩' },
      { id: 8, title: '交通', description: '交通运输项目', icon: '🚗' }
    ],
    stats: {
      total: 188234,
      uploaded: 62744,
      companies: 38887,
      individuals: 9883
    }
  },
  {
    id: 3,
    name: '方案库',
    description: '聚焦数字化转型，智能工厂，工业互联网，物联网，大数据，人工智能，生产工艺，机理模型，科技创新，提供海量行业解决方案',
    items: [
      { id: 1, title: 'SAAS软件超市', description: '云端软件解决方案', icon: '☁️' },
      { id: 2, title: 'SCADA系统', description: '工业自动化系统', icon: '📊' },
      { id: 3, title: '安全云平台', description: '工业安全解决方案', icon: '🔒' },
      { id: 4, title: '营销系统', description: '互联网营销解决方案', icon: '📈' },
      { id: 5, title: '制造执行系统', description: 'MES制造执行系统', icon: '🏭' },
      { id: 6, title: '混合云架构', description: '云架构设计方案', icon: '🌐' },
      { id: 7, title: '办公平台', description: '企业办公解决方案', icon: '💼' },
      { id: 8, title: 'GIS软件', description: '地理信息系统', icon: '🗺️' }
    ],
    stats: {
      total: 130452,
      uploaded: 43484,
      companies: 25687,
      individuals: 8832
    }
  },
  {
    id: 4,
    name: '专家库',
    description: '专家库是覆盖高层次、跨行业、跨领域等不同维度的具有权威性和代表性的资源库，包含资深技术专家、资深产品专家、专业咨询顾问、财务顾问等，帮助企业解决研发、管理、推广过程中的问题。',
    items: [
      { id: 1, title: '技术专家', description: '资深技术专家资源', icon: '👨‍💻' },
      { id: 2, title: '产品专家', description: '产品设计专家', icon: '👨‍🔬' },
      { id: 3, title: '咨询顾问', description: '专业咨询顾问', icon: '👨‍💼' },
      { id: 4, title: '财务顾问', description: '财务管理专家', icon: '👨‍💰' }
    ],
    stats: {
      total: 22783,
      uploaded: 7594,
      companies: 5687,
      individuals: 9832
    }
  },
  {
    id: 5,
    name: '人才库',
    description: '人才库是展示企业员工或个人能力的"人才池"，致力于为企业搜寻、招募最优秀的人才，同时帮助个人提供更好的职业发展机会，是招聘发布、人才招聘一站式互联网免费平台。',
    items: [
      { id: 1, title: '市场/销售', description: '市场营销人才', icon: '📊' },
      { id: 2, title: '技术/研发', description: '技术研发人才', icon: '💻' },
      { id: 3, title: '管理/运营', description: '管理运营人才', icon: '👔' },
      { id: 4, title: '生产/制造', description: '生产制造人才', icon: '🏭' }
    ],
    stats: {
      total: 3384,
      uploaded: 1247,
      companies: 36987,
      individuals: 9867
    }
  }
])

// 合作伙伴
const partners = ref([
  { id: 1, name: '中国电信' },
  { id: 2, name: '中国移动' },
  { id: 3, name: '中国联通' },
  { id: 4, name: '中国燃气' },
  { id: 5, name: '中国海油' },
  { id: 6, name: '延长石油' },
  { id: 7, name: '清华大学' },
  { id: 8, name: '北京理工大学' },
  { id: 9, name: '中科院' },
  { id: 10, name: '航天科工' }
])

// 方法
const handleLogin = () => {
  router.push('/login')
}

const handleRegister = () => {
  router.push('/login')
}

const handleViewMore = () => {
  // 显示联系信息收集模态框
  contactModal.value = {
    visible: true,
    title: '获取更多优惠信息',
    description: '请留下您的联系方式，我们将为您提供更多优惠政策和服务详情。'
  }
}

const handleLearnMore = (category: any) => {
  // 显示联系信息收集模态框
  contactModal.value = {
    visible: true,
    title: `了解更多${category.name}信息`,
    description: `您对${category.name}感兴趣，请留下您的联系方式，我们将为您提供更详细的资料和专业咨询服务。`
  }
}

const handleItemClick = (item: any) => {
  // 显示联系信息收集模态框
  contactModal.value = {
    visible: true,
    title: `${item.title} - 详细咨询`,
    description: `您对${item.title}感兴趣，请留下您的联系方式，我们将安排专业顾问为您提供详细的解决方案。`
  }
}

const handleCloseContactModal = () => {
  contactModal.value.visible = false
}

const handleSubmitContact = (data: any) => {
  // 这里可以将联系信息发送到后端
  console.log('收集到的联系信息:', data)
  
  // 可以发送到CRM系统或邮件通知
  // 实际项目中可以调用API接口
  // await submitContactInfo(data)
}
</script>

<style scoped>
.portal-container {
  min-height: 100vh;
  background: #f5f5f5;
}

/* 顶部导航 */
.portal-header {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-brand .brand-title {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

.nav-actions {
  display: flex;
  gap: 10px;
}

.btn-login, .btn-register {
  padding: 8px 20px;
  border: 1px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-register {
  background: #3498db;
  color: white;
}

.btn-login:hover {
  background: #3498db;
  color: white;
}

.btn-register:hover {
  background: #2980b9;
}

/* 主横幅 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 60px;
  margin-top: 60px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-description {
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 800px;
  margin: 0 auto;
}

/* 会员优享服务 */
.member-benefits {
  padding: 60px 0;
  background: white;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;
  color: #2c3e50;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 16px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.benefit-card {
  background: #f8f9fa;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.benefit-desc {
  color: #666;
  margin-bottom: 20px;
}

.btn-benefit {
  background: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-benefit:hover {
  background: #2980b9;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 5px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

/* 数据库分类 */
.database-categories {
  padding: 60px 0;
  background: #f8f9fa;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-button.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.category-content {
  background: white;
  border-radius: 8px;
  padding: 40px;
}

.category-info {
  margin-bottom: 30px;
}

.category-title {
  font-size: 24px;
  color: #2c3e50;
  margin-bottom: 15px;
}

.category-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-learn-more {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 16px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.item-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.item-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.item-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.item-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #2c3e50;
}

.item-desc {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.btn-item-more {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-size: 14px;
}

.category-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding-top: 30px;
  border-top: 1px solid #eee;
}

.category-stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 5px;
}

.stat-name {
  color: #666;
  font-size: 14px;
}

/* 合作伙伴 */
.partners {
  padding: 60px 0;
  background: white;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.partner-item {
  text-align: center;
  padding: 20px;
}

.partner-logo {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  color: #666;
  font-weight: 500;
}

/* 页脚 */
.portal-footer {
  background: #2c3e50;
  color: white;
  padding: 40px 0 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ecf0f1;
}

.footer-phone {
  color: #bdc3c7;
  font-size: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #3498db;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
}

.copyright {
  color: #95a5a6;
  font-size: 14px;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .stats-row {
    gap: 30px;
  }
  
  .category-tabs {
    justify-content: flex-start;
    overflow-x: auto;
  }
  
  .items-grid {
    grid-template-columns: 1fr;
  }
  
  .category-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 