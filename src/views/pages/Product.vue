<!-- src/views/Products.vue -->
<template>
    <div class="min-h-screen overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <main class="container mx-auto px-4 py-16">
            <ProductList title="Trà Best Sellers" :products="teaBestSellers" />
            <ProductList
                title="Trà Sữa Best Sellers (Đặc Biệt Matcha Latte)"
                :products="milkTeaBestSellers"
                :delay="200"
            />
            <ProductList title="Sản Phẩm Bình Thường" :products="regularProducts" :delay="400" />
        </main>
    </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/product/ProductList.vue';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

const tempImage = new URL('@/assets/images/products/best-sellers-tea/tra-dao-cam-dau.jpg', import.meta.url).href;

const teaBestSellers: Product[] = [
    {
        name: 'Trà Đào Cam Sả',
        description: 'Hương vị đào tươi mát kết hợp với cam và sả thơm lừng.',
        price: 35000,
        image: tempImage
    },
    {
        name: 'Trà Sen Vàng',
        description: 'Trà sen thanh tao với chút ngọt dịu từ mật ong.',
        price: 40000,
        image: tempImage
    },
    {
        name: 'Trà Lài Tươi',
        description: 'Trà lài thơm ngát, vị đậm đà tự nhiên.',
        price: 30000,
        image: tempImage
    },
    {
        name: 'Trà Ô Long',
        description: 'Trà ô long thơm nhẹ, vị hậu ngọt.',
        price: 38000,
        image: tempImage
    },
    {
        name: 'Trà Nhài',
        description: 'Trà nhài tinh tế, hương thơm quyến rũ.',
        price: 32000,
        image: tempImage
    }
];

const milkTeaBestSellers: Product[] = [
    {
        name: 'Matcha Latte',
        description: 'Matcha nguyên chất hòa quyện với sữa béo ngậy, đặc biệt thơm ngon.',
        price: 45000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Trân Châu',
        description: 'Trà sữa truyền thống với trân châu dai giòn.',
        price: 40000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Hồng Trà',
        description: 'Hồng trà đậm vị kết hợp sữa tươi ngọt ngào.',
        price: 42000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Socola',
        description: 'Trà sữa socola ngọt ngào, đậm đà.',
        price: 43000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Matcha Đậu Đỏ',
        description: 'Matcha kết hợp đậu đỏ, lạ miệng và hấp dẫn.',
        price: 46000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Matcha Đậu Đỏ 2',
        description: 'Matcha kết hợp đậu đỏ, lạ miệng và hấp dẫn.',
        price: 47000,
        image: tempImage
    }
];

const regularProducts: Product[] = [
    {
        name: 'Trà Xanh',
        description: 'Trà xanh nguyên chất, đơn giản mà tinh tế.',
        price: 25000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Dâu',
        description: 'Trà sữa vị dâu nhẹ nhàng, dễ uống.',
        price: 38000,
        image: tempImage
    },
    {
        name: 'Nước Ép Cam',
        description: 'Nước ép cam tươi mát, giàu vitamin C.',
        price: 30000,
        image: tempImage
    },
    {
        name: 'Trà Chanh',
        description: 'Trà chanh thanh mát, giải nhiệt ngày hè.',
        price: 28000,
        image: tempImage
    },
    {
        name: 'Trà Sữa Vani',
        description: 'Trà sữa vani thơm nhẹ, ngọt dịu.',
        price: 39000,
        image: tempImage
    }
];
</script>
