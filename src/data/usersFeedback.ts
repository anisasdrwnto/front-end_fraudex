export interface FeedbackItem {
  id: string;
  user: string;
  rating: number;
  catatan: string;
  tanggapan: string;
  status: 'Menunggu' | 'Ditinjau' | 'Ditindaklanjuti';
}

export const mockFeedbacks: FeedbackItem[] = [
  { 
    id: 'F001', 
    user: 'Budi Santoso', 
    rating: 4, 
    catatan: 'Cukup akurat.', 
    tanggapan: 'Terima kasih atas masukannya. Kami akan terus meningkatkan akurasi sistem.',
    status: 'Menunggu' 
  },
  { 
    id: 'F002', 
    user: 'Siti Aminah', 
    rating: 2, 
    catatan: 'Salah deteksi.', 
    tanggapan: '', 
    status: 'Ditinjau' 
  },
];