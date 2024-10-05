import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Dish, DISH_STATUS } from '../../types'
import dayjs from 'dayjs'
import { COLORS } from '../../theme'

type Props = {
  rows: Dish[]
}

const getChipStyle = (status: DISH_STATUS) => {
  switch (status) {
    case DISH_STATUS.COOKING:
      return {
        backgroundColor: COLORS.chip.cooking.backgroundColor,
        color: COLORS.chip.cooking.color,
      }
    case DISH_STATUS.SERVED:
      return {
        backgroundColor: COLORS.chip.served.backgroundColor,
        color: COLORS.chip.served.color,
      }
    default:
      return {
        backgroundColor: COLORS.chip.error.backgroundColor,
        color: COLORS.chip.error.color,
      }
  }
}

export const HistoryTable = ({ rows }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Estatus</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>
              Fecha de creación
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .sort(
              (a, b) =>
                dayjs(a.createdAt).valueOf() - dayjs(b.createdAt).valueOf()
            )
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell title={row.dishId}>
                  {row.dishId.substring(0, 8)}...
                </TableCell>
                <TableCell title={row.name || 'Pendiente...'}>
                  {row.name || 'Pendiente...'}
                </TableCell>
                <TableCell title={row.status}>
                  <Chip label={row.status} sx={getChipStyle(row.status)} />
                </TableCell>
                <TableCell
                  title={dayjs(row.createdAt).format('DD/MM/YYYY HH:mm')}
                >
                  {dayjs(row.createdAt).format('HH:mm DD/MM')}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
