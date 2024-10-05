import {
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material'
import { IngredientHistory } from '../../types'
import { COLORS } from '../../theme'
import dayjs from 'dayjs'

const customTableTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${COLORS.background.default}`,
          color: COLORS.text.primary,
        },
        head: {
          backgroundColor: COLORS.green,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.green,
        },
      },
    },
  },
})

type Props = {
  rows: IngredientHistory[]
}

export const BuysTable = ({ rows }: Props) => {
  return (
    <ThemeProvider theme={customTableTheme}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: 'bold', color: COLORS.text.white }}
              >
                Ingrediente
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', color: COLORS.text.white }}
              >
                Cantidad
              </TableCell>
              <TableCell
                style={{ fontWeight: 'bold', color: COLORS.text.white }}
              >
                Fecha de compra
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
                  <TableCell title={row.name} sx={{ color: COLORS.text.white }}>
                    {row.name}
                  </TableCell>
                  <TableCell
                    title={row.quantity.toString()}
                    sx={{ color: COLORS.text.white }}
                  >
                    {row.quantity}
                  </TableCell>
                  <TableCell
                    title={dayjs(row.createdAt).format('DD/MM/YYYY HH:mm')}
                    sx={{ color: COLORS.text.white }}
                  >
                    {dayjs(row.createdAt).format('HH:mm DD/MM')}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}
