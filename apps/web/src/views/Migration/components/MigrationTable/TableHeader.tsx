import React from 'react'
import { Text, CardHeader } from '@pancakeswap/uikit'

export interface TableHeaderProps {
  title: string
}

const TableHeader: React.FC<React.PropsWithChildren<TableHeaderProps>> = ({ title }) => {
  return (
    <CardHeader>
