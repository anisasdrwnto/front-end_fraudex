import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { EditUserModal, HapusUserModal } from '@/components/features/admin/UserModals';
import { User } from '@/data/usersData';

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <Table aria-label="Tabel Data Pengguna">
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nama Lengkap</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Terdaftar</TableHead>
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.nama}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
              }`}>
                {user.role}
              </span>
            </TableCell>
            <TableCell>{user.tanggal}</TableCell>
            <TableCell className="text-right space-x-2">
              <EditUserModal user={user} />
              <HapusUserModal user={user} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}