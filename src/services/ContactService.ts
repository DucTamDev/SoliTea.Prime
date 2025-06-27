import BaseService from '@/core/services/base';
import { loadJsonFile } from '@/core/services/JsonLoader';
import type { ContactData } from '@/types/contact/contact.ts';

const CONTACT_BASE_URL = 'https://localhost:44388';
const CONTACT_DATA_PATH = `${import.meta.env.BASE_URL}data/contact/ContactData.json`;

class ContactService extends BaseService {
    constructor() {
        super(CONTACT_BASE_URL);
    }

    public async getContactData(): Promise<ContactData | null> {
        try {
            const data = await loadJsonFile<ContactData>(CONTACT_DATA_PATH);
            if (data) {
                return data;
            } else {
                console.error('ContactService: Không thể tải dữ liệu ContactData.');
                return null;
            }
        } catch (error) {
            console.error('ContactService: Lỗi khi tải dữ liệu ContactData:', error);
            return null;
        }
    }
}

export default new ContactService();
