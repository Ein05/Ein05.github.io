# 🧑‍💻 Portfolio

Portfolio cá nhân xây dựng bằng **React + Vite**, tự động deploy lên **GitHub Pages** qua CI/CD.

## 🚀 Chạy local

```bash
npm install
npm run dev
```

## 🛠️ Cần sửa gì?

| File | Nội dung cần sửa |
|------|-----------------|
| `src/components/Hero.jsx` | Tên, mô tả, roles |
| `src/components/About.jsx` | Bio, stats |
| `src/components/Projects.jsx` | Danh sách projects |
| `src/components/Skills.jsx` | Danh sách skills |
| `src/components/Contact.jsx` | Email, social links |
| `src/components/Footer.jsx` | Tên, thành phố |
| `vite.config.js` | `base` path (tên repo) |

## ⚙️ Setup GitHub Pages

1. Push code lên GitHub
2. Vào **Settings → Pages → Source → GitHub Actions**
3. Mỗi lần push lên `main` sẽ tự động deploy!

## 🎨 Màu sắc

Sửa CSS variables trong `src/index.css`:

```css
--accent:  #c8f135;  /* Màu chính (xanh lá) */
--accent2: #3b82f6;  /* Màu phụ (xanh dương) */
```
