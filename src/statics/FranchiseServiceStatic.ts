// src/statics/FranchiseServiceStatic.ts

// Định nghĩa interface cho các bước nhượng quyền
export interface FranchiseStep {
    title: string;
    description: string;
}

// Định nghĩa interface cho chi phí đầu tư
export interface InvestmentItem {
    category: string;
    amount: number;
}

// Dữ liệu các bước nhượng quyền
export const FRANCHISE_STEPS: FranchiseStep[] = [
    {
        title: 'Tư vấn ban đầu',
        description: 'Trao đổi thông tin, mô hình kinh doanh và điều khoản để hiểu rõ và đồng thuận.'
    },
    {
        title: 'Hợp đồng cọc',
        description: 'Ký hợp đồng cọc với 50% phí nhượng quyền, bắt đầu quá trình hợp tác.'
    },
    {
        title: 'Đào tạo cơ bản',
        description: 'Hỗ trợ đào tạo và tư vấn chọn địa điểm kinh doanh tối ưu.'
    },
    {
        title: 'Hợp đồng chính thức',
        description: 'Ký hợp đồng và thanh toán 50% phí còn lại sau khi chọn địa điểm.'
    },
    {
        title: 'Thi công cửa hàng',
        description: 'Thiết kế và setup cửa hàng theo tiêu chuẩn Soli.'
    },
    {
        title: 'Đào tạo vận hành',
        description: 'Đào tạo tại chỗ và bán thử để làm quen với quy trình.'
    },
    {
        title: 'Khai trương',
        description: 'Hỗ trợ khai trương và bàn giao để bắt đầu kinh doanh.'
    },
    {
        title: 'Hỗ trợ liên tục',
        description: 'Tư vấn thường xuyên và kiểm soát chất lượng để duy trì tiêu chuẩn.'
    }
];

// Dữ liệu chi phí đầu tư
export const INVESTMENT_COSTS: InvestmentItem[] = [
    { category: 'Công cụ pha chế', amount: 42000000 },
    { category: 'Biển bảng', amount: 35000000 },
    { category: 'Quầy pha chế', amount: 30000000 },
    { category: 'Bàn ghế', amount: 30000000 },
    { category: 'Điện nước + camera', amount: 15000000 },
    { category: 'Sơn sửa + decor', amount: 15000000 },
    { category: 'Thiết kế', amount: 10000000 },
    { category: 'Ô dù', amount: 6000000 },
    { category: 'Phí nhượng quyền', amount: 50000000 }
];

// Hàm tính tổng chi phí (nếu cần)
export const calculateTotalAmount = (costs: InvestmentItem[]): number => {
    return costs.reduce((sum, item) => sum + item.amount, 0);
};
