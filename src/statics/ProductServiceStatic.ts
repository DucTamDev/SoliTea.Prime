export const ProductServiceStatic = {
    traDaoCamDau: new URL('@/assets/images/products/best-sellers-tea/tra-dao-cam-dau.jpg', import.meta.url).href,

    productsData() {
        return [
            {
                id: '1000',
                name: 'Matcha Latte Kem Cheese',
                description: 'Thức uống trà xanh với kem cheese béo ngậy.',
                image: this.traDaoCamDau,
                price: 50000,
                rating: 5,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '1001',
                name: 'Trà Sữa Trân Châu Đường Đen',
                description: 'Trà sữa hảo hạng kết hợp với trân châu đường đen thơm ngon.',
                image: this.traDaoCamDau,
                price: 45000,
                rating: 4,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '1002',
                name: 'Hồng Trà Sữa',
                description: 'Hồng trà kết hợp cùng sữa tươi, vị thanh mát.',
                image: this.traDaoCamDau,
                price: 40000,
                rating: 4,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '1003',
                name: 'Trà Xanh Latte',
                description: 'Sự hòa quyện giữa trà xanh Nhật Bản và sữa tươi.',
                image: this.traDaoCamDau,
                price: 50000,
                rating: 5,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '1004',
                name: 'Oolong Sữa Tươi',
                description: 'Trà Oolong kết hợp với sữa tươi thanh mát.',
                image: this.traDaoCamDau,
                price: 42000,
                rating: 5,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '1005',
                name: 'Oolong Sữa Tươi 2',
                description: 'Trà Oolong kết hợp với sữa tươi thanh mát.',
                image: this.traDaoCamDau,
                price: 42000,
                rating: 5,
                category: 'milk-tea',
                isBestSeller: true
            },
            {
                id: '2000',
                name: 'Trà Đào Cam Dâu',
                description: 'Sự kết hợp hoàn hảo giữa trà đào, cam và dâu tươi.',
                image: this.traDaoCamDau,
                price: 55000,
                rating: 5,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '2001',
                name: 'Trà Oolong Nướng',
                description: 'Trà Oolong với hương vị nướng thơm đặc trưng.',
                image: this.traDaoCamDau,
                price: 60000,
                rating: 4,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '2002',
                name: 'Trà Sen Vàng',
                description: 'Trà sen thơm dịu cùng hạt sen vàng giòn ngon.',
                image: this.traDaoCamDau,
                price: 50000,
                rating: 5,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '2003',
                name: 'Trà Xanh Tắc Mật Ong',
                description: 'Trà xanh thanh mát hòa quyện cùng tắc và mật ong.',
                image: this.traDaoCamDau,
                price: 48000,
                rating: 4,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '2004',
                name: 'Trà Hoa Hồng',
                description: 'Hương vị tinh tế từ trà hoa hồng thơm nhẹ.',
                image: this.traDaoCamDau,
                price: 52000,
                rating: 5,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '2005',
                name: 'Trà Hoa Hồng 2',
                description: 'Hương vị tinh tế từ trà hoa hồng thơm nhẹ.',
                image: this.traDaoCamDau,
                price: 55000,
                rating: 5,
                category: 'tea',
                isBestSeller: true
            },
            {
                id: '3000',
                name: 'Trà Đào Cam Dâu',
                description: 'Sự kết hợp hoàn hảo giữa trà đào, cam và dâu tươi.',
                image: this.traDaoCamDau,
                price: 55000,
                rating: 5,
                category: 'tea',
                isBestSeller: false
            },
            {
                id: '3001',
                name: 'Trà Oolong Nướng',
                description: 'Trà Oolong với hương vị nướng thơm đặc trưng.',
                image: this.traDaoCamDau,
                price: 60000,
                rating: 4,
                category: 'tea',
                isBestSeller: false
            },
            {
                id: '3002',
                name: 'Trà Sen Vàng',
                description: 'Trà sen thơm dịu cùng hạt sen vàng giòn ngon.',
                image: this.traDaoCamDau,
                price: 50000,
                rating: 5,
                category: 'tea',
                isBestSeller: false
            },
            {
                id: '3003',
                name: 'Trà Xanh Tắc Mật Ong',
                description: 'Trà xanh thanh mát hòa quyện cùng tắc và mật ong.',
                image: this.traDaoCamDau,
                price: 48000,
                rating: 4,
                category: 'tea',
                isBestSeller: false
            },
            {
                id: '3004',
                name: 'Trà Hoa Hồng',
                description: 'Hương vị tinh tế từ trà hoa hồng thơm nhẹ.',
                image: this.traDaoCamDau,
                price: 52000,
                rating: 5,
                category: 'tea',
                isBestSeller: false
            }
        ];
    },

    // Get milk tea best sellers
    getMilkTeaBestSellers() {
        return Promise.resolve(
            this.productsData().filter((product) => product.category === 'milk-tea' && product.isBestSeller)
        );
    },

    // Get tea best sellers
    getTeaBestSellers() {
        return Promise.resolve(
            this.productsData().filter((product) => product.category === 'tea' && product.isBestSeller)
        );
    },

    // Get regular tea products
    getRegularProducts() {
        return Promise.resolve(
            this.productsData().filter((product) => product.category === 'tea' && !product.isBestSeller)
        );
    },

    // Get product by ID
    getProductById(id: string) {
        return Promise.resolve(this.productsData().find((product) => product.id === id));
    }
};
