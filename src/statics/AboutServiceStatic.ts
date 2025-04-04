// Dữ liệu cho trang About
export interface Item {
    title?: string;
    description: string;
    icon?: string;
}

export interface MissionItem {
    icon: string;
    text: string;
}

export interface Mission {
    intro: string;
    items: MissionItem[];
}

export const INTRODUCTION: Item[] = [
    {
        title: 'Công ty TNHH Soli',
        description:
            'Thành lập vào năm <span class="highlight">2020</span>, Soli ra đời từ ước mơ mang đến những ly trà sữa không chỉ ngon mà còn là <span class="italic">tác phẩm nghệ thuật</span>. Chúng tôi tự hào kết hợp trà thượng hạng từ cao nguyên Việt Nam, sữa tươi nguyên chất và topping homemade để tạo nên dấu ấn riêng biệt. Với hơn <span class="highlight">50 chi nhánh</span> trải dài khắp Việt Nam cùng hàng ngàn khách hàng trung thành, Soli đang từng bước khẳng định vị thế trong lòng những người yêu trà sữa qua chất lượng và sự tận tâm.',
        icon: '☕'
    }
];

export const VISION: Item[] = [
    {
        title: '',
        description:
            'Đến năm <span class="highlight">2030</span>, Soli hướng tới trở thành thương hiệu trà sữa Việt Nam đầu tiên hiện diện tại <span class="highlight">20 quốc gia</span>, mang hương vị quê hương vươn xa thế giới. Mỗi ly trà sữa là một câu chuyện, một trải nghiệm đáng nhớ.',
        icon: '🌍'
    }
];

export const MISSION: Mission = {
    intro: 'Tại Soli, chúng tôi cam kết <span class="highlight teal">lan tỏa niềm vui</span> qua từng ly trà sữa với:',
    items: [
        { icon: '✔', text: 'Sản phẩm chất lượng cao, an toàn và tốt cho sức khỏe' },
        { icon: '🤝', text: 'Cộng đồng yêu trà sữa gắn kết, chia sẻ niềm hạnh phúc' },
        { icon: '🇻🇳', text: 'Quảng bá văn hóa trà Việt Nam ra thế giới' }
    ]
};

export const CORE_VALUES: Item[] = [
    {
        title: 'Chất lượng',
        description: 'Nguyên liệu tuyển chọn từ thiên nhiên, quy trình sản xuất khép kín.',
        icon: '🌿'
    },
    { title: 'Sáng tạo', description: 'Đột phá trong công thức, mang đến hương vị độc đáo.', icon: '💡' },
    { title: 'Khách hàng', description: 'Lắng nghe và phục vụ tận tâm vì nụ cười của bạn.', icon: '❤️' },
    { title: 'Bền vững', description: 'Sử dụng bao bì thân thiện, bảo vệ môi trường xanh.', icon: '♻️' }
];

export const BUSINESS_AREAS: Item[] = [
    {
        title: 'Sản xuất & Phân phối',
        description:
            'Soli sở hữu nhà máy sản xuất hiện đại tại Đà Lạt, chuyên cung cấp trà sữa và nguyên liệu cho hệ thống chi nhánh và đối tác nhượng quyền.'
    },
    {
        title: 'Hệ thống cửa hàng',
        description:
            'Chuỗi cửa hàng Soli phủ sóng khắp các thành phố lớn với không gian ấm cúng, hiện đại, là điểm đến yêu thích của giới trẻ.'
    },
    {
        title: 'Nhượng quyền',
        description:
            'Mô hình nhượng quyền linh hoạt, hỗ trợ đối tác khởi nghiệp với thương hiệu Soli trên toàn quốc và quốc tế.'
    }
];
