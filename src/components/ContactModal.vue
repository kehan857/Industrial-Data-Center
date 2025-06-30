<template>
  <div v-if="visible" class="modal-overlay" @click="handleClose">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3 class="modal-title">{{ title }}</h3>
        <button class="close-btn" @click="handleClose">×</button>
      </div>
      
      <div class="modal-body">
        <p class="modal-description">{{ description }}</p>
        
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label class="form-label">姓名 *</label>
            <input 
              v-model="formData.name" 
              type="text" 
              class="form-input" 
              placeholder="请输入您的姓名"
              required
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">手机号 *</label>
            <input 
              v-model="formData.phone" 
              type="tel" 
              class="form-input" 
              placeholder="请输入您的手机号"
              pattern="[0-9]{11}"
              required
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">公司名称</label>
            <input 
              v-model="formData.company" 
              type="text" 
              class="form-input" 
              placeholder="请输入您的公司名称"
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">邮箱</label>
            <input 
              v-model="formData.email" 
              type="email" 
              class="form-input" 
              placeholder="请输入您的邮箱"
            >
          </div>
          
          <div class="form-group">
            <label class="form-label">需求描述</label>
            <textarea 
              v-model="formData.description" 
              class="form-textarea" 
              placeholder="请简单描述您的需求..."
              rows="3"
            ></textarea>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn-cancel" @click="handleClose">取消</button>
            <button type="submit" class="btn-submit" :disabled="!isFormValid">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ContactForm {
  name: string
  phone: string
  company: string
  email: string
  description: string
}

interface Props {
  visible: boolean
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '获取详细信息',
  description: '请留下您的联系方式，我们将为您提供更详细的资料和专业咨询服务。'
})

const emit = defineEmits<{
  close: []
  submit: [data: ContactForm]
}>()

const formData = ref<ContactForm>({
  name: '',
  phone: '',
  company: '',
  email: '',
  description: ''
})

const isFormValid = computed(() => {
  return formData.value.name.trim() && formData.value.phone.trim()
})

const handleClose = () => {
  // 重置表单
  formData.value = {
    name: '',
    phone: '',
    company: '',
    email: '',
    description: ''
  }
  emit('close')
}

const handleSubmit = () => {
  if (isFormValid.value) {
    emit('submit', { ...formData.value })
    handleClose()
    // 显示成功提示
    alert('提交成功！我们将尽快与您联系。')
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-container {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #666;
}

.modal-body {
  padding: 24px;
}

.modal-description {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
  font-size: 14px;
}

.form-input, .form-textarea {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  border-color: #3498db;
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 8px;
}

.btn-cancel, .btn-submit {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-cancel {
  background: #f8f9fa;
  color: #666;
  border: 1px solid #ddd;
}

.btn-cancel:hover {
  background: #e9ecef;
}

.btn-submit {
  background: #3498db;
  color: white;
}

.btn-submit:hover:not(:disabled) {
  background: #2980b9;
}

.btn-submit:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

/* 响应式设计 */
@media (max-width: 576px) {
  .modal-container {
    width: 95%;
    margin: 20px;
  }
  
  .modal-header {
    padding: 16px 20px;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn-cancel, .btn-submit {
    width: 100%;
  }
}
</style> 