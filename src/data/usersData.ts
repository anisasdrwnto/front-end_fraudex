export interface User {
  id: string;
  nama: string;
  email: string;
  role: 'admin' | 'user';
  tanggal: string;
}

export const mockUsers: User[] = [
  { id: 'U001', nama: 'Budi Santoso', email: 'budi@gmail.com', role: 'user', tanggal: '2026-10-01' },
  { id: 'U002', nama: 'Admin Pusat', email: 'admin@fraudex.com', role: 'admin', tanggal: '2026-10-01' },
];