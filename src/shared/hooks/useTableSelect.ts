/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

function useTableSelect<DataTableBody>(rows: DataTableBody[], key: string) {
  const [selected, setSelected] = useState<readonly string[]>([]);

  const numSelected = selected.length > 0;

  const isSelected = (name: string) => selected.includes(name);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n[key]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const resetSelected = useCallback(() => {
    setSelected([]);
  }, []);

  return {
    selected,
    numSelected,
    isSelected,
    handleClick,
    handleSelectAllClick,
    resetSelected,
  };
}

export default useTableSelect;
