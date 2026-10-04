// ===== FORMAT.JS - Formatting Utilities =====

export function formatPrice(price) {
  if (price == null || isNaN(price)) return '0₫';
  return new Intl.NumberFormat('vi-VN').format(price) + '₫';
}

export function formatPriceCompact(price) {
  if (price >= 1000000) {
    return (price / 1000000).toFixed(1).replace('.0', '') + 'tr';
  }
  if (price >= 1000) {
    return (price / 1000).toFixed(0) + 'k';
  }
  return formatPrice(price);
}

export function calcDiscount(original, sale) {
  if (!original || !sale || sale >= original) return 0;
  return Math.round(((original - sale) / original) * 100);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('vi-VN', { 
    day: '2-digit', month: '2-digit', year: 'numeric' 
  }).format(date);
}

export function formatDateRelative(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  
  if (diff < 60) return 'Vừa xong';
  if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} ngày trước`;
  return formatDate(dateStr);
}

export function generateSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function truncate(str, maxLength = 100) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '...';
}

export function generateStars(rating, maxStars = 5) {
  let html = '<div class="rating">';
  for (let i = 1; i <= maxStars; i++) {
    html += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
  }
  html += '</div>';
  return html;
}

export function generateStarsWithCount(rating, count, maxStars = 5) {
  let html = '<div class="rating">';
  for (let i = 1; i <= maxStars; i++) {
    html += `<span class="star ${i <= Math.round(rating) ? 'filled' : ''}">★</span>`;
  }
  html += `<span class="count">(${count})</span>`;
  html += '</div>';
  return html;
}

export function generateId() {
  return 'id_' + Math.random().toString(36).substr(2, 9);
}
