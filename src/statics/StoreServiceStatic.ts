// src/statics/StoreServiceStatic.ts
export interface Branch {
    id: number;
    name: string;
    address: string;
    phone?: string;
}

export class StoreServiceStatic {
    private static branches: Branch[] = [
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
        { id: 13, name: 'Chi nhánh Quy Nhơn 2', address: '852 Nguyễn Huệ, Quy Nhơn', phone: '0256 789 123' },
        { id: 14, name: 'Chi nhánh Biên Hòa 2', address: '963 Phạm Văn Thuận, Biên Hòa' },
        { id: 15, name: 'Chi nhánh Vũng Tàu 2', address: '147 Ba Tháng Hai, Vũng Tàu' },
        { id: 16, name: 'Chi nhánh Thủ Đức 2', address: '258 Võ Văn Ngân, Thủ Đức' }
    ];

    static getBranches(): Branch[] {
        return [...this.branches]; // Return a copy to prevent direct manipulation
    }

    static getBranchById(id: number): Branch | undefined {
        return this.branches.find((branch) => branch.id === id);
    }

    static getBranchesByCity(city: string): Branch[] {
        const normalizedCity = this.normalizeVietnamese(city);
        return this.branches.filter((branch) => this.normalizeVietnamese(branch.address).includes(normalizedCity));
    }

    private static normalizeVietnamese(str: string): string {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, (match) => (match === 'đ' ? 'd' : 'D'))
            .toLowerCase()
            .trim();
    }
}
