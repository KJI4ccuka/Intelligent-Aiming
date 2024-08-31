"use client"

import Image from 'next/image'

import { MoreHorizontal } from 'lucide-react';

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from '@/components/ui/card';
import { TableRow, Table, TableBody, TableCell } from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';


export default function Component() {
  return (
    <Card>
      <CardContent className={'p-0'}>
        <Table>
          <TableBody className={'flex flex-col'}>
            <TableRow className={'flex justify-between items-center'}>
              <TableCell className="hidden sm:table-cell">
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover bg-white"
                  height="52"
                  src="/placeholder.svg"
                  width="52"
                />
              </TableCell>
              <TableCell className="font-medium">
                Laser Lemonade Machine
              </TableCell>
              <TableCell>
                <Badge variant="outline">Active</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant='ghost' >
                      <MoreHorizontal className="h-4 w-4 " />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
