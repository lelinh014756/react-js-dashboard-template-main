import MainCard from '@components/Cards/MainCard';
import SearchInput from '@components/Input/SearchInput';
import { DeleteTwoTone } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Table,
  TableContainer,
  TablePagination,
  Tooltip,
} from '@mui/material';
import useTablePage from '@shared/hooks/useTablePage';
import useTableSelect from '@shared/hooks/useTableSelect';
import { type Order } from '@shared/utils/handlerComparator';
import EnhancedTableHead from '@views/user/list/listStyle1/EnhancedTableHead';
import TableBodyView from '@views/user/list/listStyle1/TableBodyView';
import React, { useState } from 'react';

import { rows } from '../data/listData1';
import { type ListStyle1Data } from '../type';

function ListStyle1() {
  const [searchText, setSearchText] = useState('');

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ListStyle1Data>('Id');

  // use hook
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    useTablePage({
      perPage: 8,
    });

  const {
    numSelected,
    selected,
    isSelected,
    handleClick,
    handleSelectAllClick,
  } = useTableSelect<ListStyle1Data>(rows, 'Id');

  // function
  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof ListStyle1Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <MainCard
      title={numSelected ? `${selected.length} selected` : 'List'}
      headerSX={{
        ...(numSelected && {
          backgroundColor: '#eef7fe',
        }),
      }}
      customTitle={numSelected}
      customTitleVariant="h6"
      customTitleSx={{ fontSize: 16, fontWeight: 400 }}
      contentSX={{ padding: 0 }}
      secondary={
        numSelected ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteTwoTone fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <SearchInput
            size="small"
            id="searchList"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            spacingY={false}
          />
        )
      }
    >
      <Box>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBodyView
              rows={rows}
              rowsPerPage={rowsPerPage}
              order={order}
              orderBy={orderBy}
              handleClick={handleClick}
              isSelected={isSelected}
              page={page}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </MainCard>
  );
}

export default ListStyle1;
