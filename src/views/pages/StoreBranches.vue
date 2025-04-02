<template>
    <section class="branch-list container mx-auto">
        <h2 class="branch-title">Danh Sách Chi Nhánh</h2>

        <!-- Search Input -->
        <div class="search-container">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Tìm kiếm chi nhánh (theo tên hoặc địa chỉ)..."
                class="search-input"
                @input="debounceSearch"
            />
            <i class="pi pi-search search-icon"></i>
        </div>

        <!-- Branch List -->
        <div class="branch-grid">
            <div v-for="branch in paginatedBranches" :key="branch.id" class="branch-card">
                <h3 class="branch-name">{{ branch.name }}</h3>
                <p class="branch-address">{{ branch.address }}</p>
                <p class="branch-phone" v-if="branch.phone"><i class="pi pi-phone"></i> {{ branch.phone }}</p>
            </div>
            <p v-if="!paginatedBranches.length" class="no-results">Không tìm thấy chi nhánh nào phù hợp.</p>
        </div>

        <!-- Load More / Collapse Buttons -->
        <div class="button-group">
            <button v-if="hasMoreBranches" @click="loadMore" class="load-more-btn">Xem thêm</button>
            <button v-if="visibleCount > initialCount" @click="collapse" class="collapse-btn">Thu gọn</button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Branch interface
interface Branch {
    id: number;
    name: string;
    address: string;
    phone?: string;
}

// Sample data
const branches = ref<Branch[]>([
    { id: 1, name: 'Chi nhánh Hà Nội', address: '123 Đường Láng, Đống Đa, Hà Nội', phone: '0123 456 789' },
    { id: 2, name: 'Chi nhánh TP.HCM', address: '456 Lê Lợi, Quận 1, TP.HCM', phone: '0987 654 321' },
    { id: 3, name: 'Chi nhánh Đà Nẵng', address: '789 Nguyễn Văn Linh, Hải Châu, Đà Nẵng' },
    { id: 4, name: 'Chi nhánh Cần Thơ', address: '321 Ninh Kiều, Cần Thơ', phone: '0912 345 678' },
    { id: 5, name: 'Chi nhánh Hải Phòng', address: '147 Lạch Tray, Hải Phòng', phone: '0313 456 789' },
    { id: 6, name: 'Chi nhánh Nha Trang', address: '258 Trần Phú, Nha Trang' },
    { id: 7, name: 'Chi nhánh Huế', address: '369 Lê Duẩn, Huế', phone: '0234 567 890' },
    { id: 8, name: 'Chi nhánh Vinh', address: '741 Nguyễn Trãi, Vinh' },
    { id: 9, name: 'Chi nhánh Quy Nhơn', address: '852 Nguyễn Huệ, Quy Nhơn', phone: '0256 789 123' },
    { id: 10, name: 'Chi nhánh Biên Hòa', address: '963 Phạm Văn Thuận, Biên Hòa' },
    { id: 11, name: 'Chi nhánh Vũng Tàu', address: '147 Ba Tháng Hai, Vũng Tàu' },
    { id: 12, name: 'Chi nhánh Thủ Đức', address: '258 Võ Văn Ngân, Thủ Đức' },
    { id: 13, name: 'Chi nhánh Quy Nhơn', address: '852 Nguyễn Huệ, Quy Nhơn', phone: '0256 789 123' },
    { id: 14, name: 'Chi nhánh Biên Hòa', address: '963 Phạm Văn Thuận, Biên Hòa' },
    { id: 15, name: 'Chi nhánh Vũng Tàu', address: '147 Ba Tháng Hai, Vũng Tàu' },
    { id: 16, name: 'Chi nhánh Thủ Đức', address: '258 Võ Văn Ngân, Thủ Đức' }
]);

const searchQuery = ref('');
const visibleCount = ref(10);
const initialCount = 10; // Số lượng ban đầu
const itemsPerLoad = 5;

// Hàm chuẩn hóa chuỗi tiếng Việt
const normalizeVietnamese = (str: string): string => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, (match) => (match === 'đ' ? 'd' : 'D'))
        .toLowerCase()
        .trim();
};

// Hàm tìm kiếm tiếng Việt
const filteredBranches = computed(() => {
    if (!searchQuery.value.trim()) return branches.value;

    const normalizedQuery = normalizeVietnamese(searchQuery.value);
    const searchTerms = normalizedQuery.split(/\s+/).filter((term) => term.length > 0);

    return branches.value.filter((branch) => {
        const normalizedName = normalizeVietnamese(branch.name);
        const normalizedAddress = normalizeVietnamese(branch.address);

        return searchTerms.every((term) => normalizedName.includes(term) || normalizedAddress.includes(term));
    });
});

const paginatedBranches = computed(() => filteredBranches.value.slice(0, visibleCount.value));
const hasMoreBranches = computed(() => filteredBranches.value.length > visibleCount.value);

// Debounce function
const debounce = (fn: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const debounceSearch = debounce(() => {
    visibleCount.value = initialCount; // Reset về số lượng ban đầu khi tìm kiếm
}, 300);

const loadMore = () => {
    visibleCount.value += itemsPerLoad;
};

const collapse = () => {
    visibleCount.value = initialCount; // Thu gọn về số lượng ban đầu
};
</script>

<style lang="scss" scoped>
.branch-list {
    padding: 2rem;
    margin: 0 auto;
}

.branch-title {
    font-size: 2rem;
    font-weight: 700;
    color: #28a745;
    text-align: center;
    margin-bottom: 1.5rem;
}

/* Search Styles */
.search-container {
    position: relative;
    max-width: 500px;
    margin: 0 auto 2rem;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    font-size: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #28a745;
    }
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    font-size: 1.25rem;
}

/* Branch Grid */
.branch-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
}

.branch-card {
    background: #fff;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
    }
}

.branch-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: darken(#28a745, 10%);
    margin-bottom: 0.5rem;
}

.branch-address {
    font-size: 0.85rem;
    color: #4b5563;
    margin-bottom: 0.5rem;
}

.branch-phone {
    font-size: 0.85rem;
    color: #6b7280;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.no-results {
    grid-column: 1 / -1;
    text-align: center;
    color: #6b7280;
    font-size: 1rem;
    margin-top: 1rem;
}

/* Button Group */
.button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto 0;
}

.load-more-btn,
.collapse-btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
}

.load-more-btn {
    background: #28a745;
    color: white;

    &:hover {
        background: darken(#28a745, 10%);
    }
}

.collapse-btn {
    background: #6b7280;
    color: white;

    &:hover {
        background: darken(#6b7280, 10%);
    }
}

/* Responsive */
@media (max-width: 1200px) {
    .branch-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .branch-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .branch-list {
        padding: 1rem;
    }
    .branch-title {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .branch-grid {
        grid-template-columns: 1fr;
    }
    .button-group {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>
