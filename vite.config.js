import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ Đổi 'portfolio' thành tên repo GitHub của bạn
  // Ví dụ repo là "my-portfolio" thì sửa thành: base: '/my-portfolio/'
  // Nếu dùng username.github.io (không có sub-path) thì: base: '/'
  base: '/portfolio/',
})
