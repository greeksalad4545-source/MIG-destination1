export interface User {
    id: number;
    name: string;
    email: string;
}

export class ApiService {
    static async login(email: string, password: string): Promise<User> {
        const ADMIN_EMAIL = 'admin@example.com';
        const ADMIN_PASSWORD = 'password123';
        const adminUser: User = {
            id: 1,
            name: 'Admin',
            email: ADMIN_EMAIL,
        };
        return new Promise<User>((resolve, reject) => {
            setTimeout(() => {
                if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                    resolve(adminUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    }
}