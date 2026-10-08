import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TinjauLaporanModal, HapusLaporanModal } from '@/components/features/admin/LaporanModals';
import { FeedbackItem } from '@/data/usersFeedback'; 

interface FeedbackTableProps {
  feedbacks: FeedbackItem[];
}

export function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  return (
    <Table aria-label="Tabel Laporan Pengguna">
      <TableHeader>
        <TableRow>
          <TableHead>ID Feedback</TableHead>
          <TableHead>Pengguna</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Catatan</TableHead>
          <TableHead>Tanggapan Admin</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {feedbacks.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.user}</TableCell>
            <TableCell aria-label={`Rating ${item.rating} bintang`}>{'⭐'.repeat(item.rating)}</TableCell>
            <TableCell className="max-w-xs truncate">{item.catatan}</TableCell>
            <TableCell className="max-w-xs truncate">
              {item.tanggapan ? (
                <span className="text-slate-700 dark:text-slate-300">{item.tanggapan}</span>
              ) : (
                <span className="text-slate-400 dark:text-slate-500 italic">Belum ada respons</span>
              )}
            </TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                item.status === 'Menunggu' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {item.status}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <TinjauLaporanModal laporan={item} />
                <HapusLaporanModal laporan={item} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}