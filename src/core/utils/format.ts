export function formatPriceVND(price: number): string {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatPrice(amount: number, currency: string = 'VND'): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0
    }).format(amount);
}

export function formatDateTime(isoString: string): string {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);
}
