# Nike Shoes Showcase

React + TypeScript + Tailwind kullanılarak geliştirilmiş **Nike ayakkabı vitrin uygulaması**.  
Kullanıcılar farklı modelleri **yatay kaydırma (scroll)** ile gezebilir, fiyat ve model bilgilerini görebilir.

## Özellikler

- **React + TypeScript** tabanlı modern yapı
- **TailwindCSS** ile responsive ve hızlı stil yönetimi
- **Intersection Observer** kullanarak kartların ekranda görünme durumuna göre **dinamik rotate animasyonu**
- Model ve fiyat bilgilerinin şık gösterimi
- **lucide-react** ikon kütüphanesi entegrasyonu
- Scrollable kategori listesi (`Hero` bileşeni)
- Farklı Nike modelleri (Air Max, Dunk, Monarch, Pegasus vs.)

## Proje Yapısı


```bash
src/
│── assets/              # Ayakkabı görselleri
│── components/
│   ├── Header.tsx       # Üst bar (geri butonu & arama)
│   ├── Hero.tsx         # Kategoriler yatay scroll
│   ├── Options.tsx      # "243 OPTIONS" listeleme
│   ├── OptionsCard.tsx  # Dikey ürün kartı
│   ├── ShoesContainer.tsx # Ana yatay kaydırmalı alan
│   ├── ShoesCard.tsx    # Tek ayakkabı kartı (rotate animasyonlu)
│── App.tsx              # Uygulama girişi
```


## Kullanılan Teknolojiler

- React
- Vite
- Tailwind CSS
- TypeScript
- ESLint
- Lucide React (iconlar)
## Gereksinimler

- Node.js 18+
- npm (veya yarn)

## Kurulum

```bash

# Projeyi klonla
git clone https://github.com/ibrahimhalilalpa/nike-shoes-showcase.git
# Projeyi aç
cd nike-shoes-showcase
# Bağımlılıkları yükle
npm install
# Geliştirme ortamını çalıştır
npm run dev

```