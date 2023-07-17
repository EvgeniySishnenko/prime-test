"use client";
import React, { useState, MouseEvent } from "react";

import ToggleTables from "./ToggleTables";
import ToggleOptionsTable from "./ToggleOptionsTable";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer as TableContainerMui,
} from "@mui/material";

const commonTableHeaders = [
  "symbol",
  "trading_fee",
  "min_order_size",
  "financing_long",
  "financing_short",
  "max_leverage",
  "trading_hours",
];

const cryptoTableHeaders = [
  "symbol",
  "maker_fee",
  "taker_fee",
  "min_order_size",
  "financing_long",
  "financing_short",
  "max_leverage",
  "trading_hours",
];

export default function TableContainer({ tradeConditions }: any) {
  const [alignment, setAlignment] = useState("MARGIN");
  const [optionsTable, setOptionsTable] = useState("crypto");

  const handleChangeAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const handleChangeOptionsTable = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setOptionsTable(newAlignment);
  };

  const headerRow = optionsTable === "crypto" ? cryptoTableHeaders : commonTableHeaders;

  function generateTableData(data: any) {
    return data?.reduce((acc: any, next: any) => {
      return [
        ...acc,
        {
          symbol: next.symbol,
          maker_fee: tradeConditions[alignment].group.maker_fee,
          taker_fee: tradeConditions[alignment].group.taker_fee,
          trading_fee: tradeConditions[alignment].group.trading_fee,
          min_order_size: next.min_order_size,
          financing_long: next.financing_long,
          financing_short: next.financing_short,
          max_leverage: next.max_leverage,
          trading_hours: next.trading_hours,
          group: next.group,
        },
      ];
    }, []);
  }

  const filterRows = (data: any, optionsTable: any) => {
    return generateTableData(data)?.filter((item: any) => {
      return item.group === optionsTable;
    });
  };

  return (
    <>
      <Box>
        <ToggleTables alignment={alignment} handleChange={handleChangeAlignment} />
      </Box>
      <Box sx={{ marginTop: "12px" }}>
        <ToggleOptionsTable optionsTable={optionsTable} handleChange={handleChangeOptionsTable} />
      </Box>
      <Box>
        <TableContainerMui component={Paper}>
          <Table key={optionsTable} sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headerRow.map((cell) => (
                  <TableCell key={cell}>{cell}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterRows(tradeConditions[alignment]?.symbols, optionsTable)?.map((row: any, index: any) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell key={row.symbol} component="th" scope="row">
                    {row.symbol}
                  </TableCell>
                  {optionsTable === "crypto" ? (
                    <>
                      <TableCell key={row.taker_fee} align="right">
                        {row.taker_fee}
                      </TableCell>
                      <TableCell key={row.maker_fee} align="right">
                        {row.maker_fee}
                      </TableCell>
                    </>
                  ) : (
                    <TableCell key={row.trading_fee} align="right">
                      {row.trading_fee}
                    </TableCell>
                  )}

                  <TableCell data-attr={row.min_order_size} key={row.min_order_size} align="right">
                    {row.min_order_size}
                  </TableCell>
                  <TableCell key={row.financing_long} align="right">
                    {row.financing_long}
                  </TableCell>
                  <TableCell key={row.financing_short} align="right">
                    {row.financing_short}
                  </TableCell>
                  <TableCell key={row.max_leverage} align="right">
                    {row.max_leverage}
                  </TableCell>

                  <TableCell key={row.trading_hours} align="right">
                    {row.trading_hours}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerMui>
      </Box>
    </>
  );
}
