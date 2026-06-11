# Session 2 — Bootstrap 5

## 🎯 Mục tiêu

- Chuyển đổi Portfolio từ HTML/CSS thuần sang Bootstrap 5
- Nắm vững Bootstrap grid system và components
- Tùy biến Bootstrap theme (colors, spacing, typography)
- Hiểu cách override Bootstrap variables

---

## 📁 Cấu trúc thư mục

```
session_02_bootstrap/
├── README.md              ← File này
├── exercises/             ← Đề bài
│   ├── 01_bootstrap_conversion/
│   ├── 02_blog_layout/
│   ├── 03_comment_section/
│   └── 04_theme_customize/
├── solutions/            ← Solution
└── projects/
    └── portfolio_bootstrap/
        ├── index.html
        ├── blog.html
        ├── css/
        │   ├── custom-theme.css
        │   ├── blog.css
        │   └── comments.css
        └── js/
            └── main.js
```

---

## 🔧 Hướng dẫn Git Commit Convention

### Quy tắc đặt tên commit

```
[TYPE] Mô tả ngắn gọn

- TYPE: viết HOA, đặt trong ngoặc vuông
- Mô tả: max 50 ký tự, bắt đầu bằng động từ
- Không dùng dấu chấm ở cuối
```

### Các loại commit TYPE cho Session 2

| TYPE | Ý nghĩa | Khi nào dùng |
|------|---------|--------------|
| `[BOOTSTRAP]` | Bootstrap setup | Thêm CDN, cấu hình Bootstrap |
| `[FEATURE]` | Thêm tính năng | Components, layouts |
| `[STYLE]` | Styling | Typography, spacing |
| `[UI]` | Giao diện | Hover effects, animations |
| `[CUSTOMIZE]` | Tùy biến theme | Override Bootstrap variables |
| `[THEME]` | Theme styling | Color palette, dark mode |
| `[REFACTOR]` | Cấu trúc lại | Tối ưu code |

### Ví dụ commit messages

```bash
# ✅ Đúng
git commit -m "[BOOTSTRAP] Add Bootstrap CDN and initial setup"
git commit -m "[FEATURE] Convert grid to Bootstrap columns"
git commit -m "[STYLE] Apply Bootstrap typography utilities"
git commit -m "[CUSTOMIZE] Override Bootstrap primary color"
git commit -m "[THEME] Apply complete new color palette"

# ❌ Sai
git commit -m "added bootstrap"                 # thiếu TYPE
git commit -m "[FEATURE] did something"         # không rõ ràng
git commit -m "fix"                              # quá ngắn
```
---