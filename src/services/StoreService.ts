import BaseService from '@/core/services/base';
import { loadJsonFile } from '@/core/services/JsonLoader';
import type { StoreData } from '@/types/store/store.d.ts';

const STORE_BASE_URL = 'https://localhost:44388';
const STORE_DATA_PATH = `${import.meta.env.BASE_URL}data/store/StoreData.json`;

class StoreService extends BaseService {
    constructor() {
        super(STORE_BASE_URL);
    }

    public async getStoreData(): Promise<StoreData[] | null> {
        try {
            const data = await loadJsonFile<StoreData[]>(STORE_DATA_PATH);
            if (data) {
                return data;
            } else {
                console.error('StoreService: Không thể tải dữ liệu StoreData.');
                return null;
            }
        } catch (error) {
            console.error('StoreService: Lỗi khi tải dữ liệu StoreData:', error);
            return null;
        }
    }
}

export default new StoreService();
