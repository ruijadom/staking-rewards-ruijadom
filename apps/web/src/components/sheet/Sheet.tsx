import React from "react";

import {
  type Stakings,
  type UpdateStakingInput,
} from "@ruijadom/api/schema/staking";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
} from "@ruijadom/ui";
// Utils
import { capitalizedWords, getUniqueKeys } from "@ruijadom/utils";
import { PencilIcon } from "../../lib/icons";

interface SheetProps {
  title: React.ReactNode;
  searchInput: React.ReactNode;
  columns: string[];
  rows: Stakings;
  currency: string;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  updateStore: (
    id: UpdateStakingInput["id"],
    staking: UpdateStakingInput,
  ) => void;
  mutateStaking: (
    id: UpdateStakingInput["id"],
    staking: UpdateStakingInput,
  ) => void;
}

export const Sheet = ({
  title,
  searchInput,
  columns,
  rows,
  currency,
  isError,
  isLoading,
  isSuccess,
  updateStore,
  mutateStaking,
}: SheetProps): React.ReactElement => {
  return (
    <Table className="border-separate border-spacing-y-1">
      <TableCaption className="mb-3 space-y-1.5 text-left">
        {/* Caption slot for Title */}
        {title && title}
        {/* Caption slot for search functionality */}
        {searchInput && searchInput}
      </TableCaption>
      <TableHeader className="sticky top-0 z-10">
        {/* Header slot for table header */}
        <TableRow className="text-sm font-medium bg-darker text-darker-foreground">
          {columns.map((key) => (
            <TableHead
              key={key}
              className={`w-1/3 text-center first:rounded-l-sm last:rounded-r-sm h-[32px]`}
            >
              {`${capitalizedWords(key)} ${
                key === "annualReward" ? `in ${currency}` : ""
              } `}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="text-xs font-normal before:block before:h-1 before:leading-xl">
        {isError && (
          <TableRow>
            <TableCell className="px-3" colSpan={3}>
              ...something went wrong
            </TableCell>
          </TableRow>
        )}

        {isLoading && (
          <TableRow>
            <TableCell className="px-3" colSpan={3}>
              ...is loading
            </TableCell>
          </TableRow>
        )}

        {isSuccess &&
          rows.map(({ id, ...staking }) => (
            <TableRow
              key={id}
              className="bg-lightest hover:shadow-focus h-full"
            >
              {Object.entries(staking).map(([key, value], index, entries) => (
                <TableCell
                  key={key}
                  className={`whitespace-nowrap first:rounded-l-sm last:rounded-r-sm h-[32px] ${
                    index !== entries.length - 1 ? "border-darker border-r" : ""
                  }`}
                >
                  <div className="flex">
                    <div className="relative w-full">
                      <Input
                        type="text"
                        className="bg-transparent text-center text-lightest-foreground py-2 pl-3 pr-6 "
                        placeholder="Price"
                        value={value || ""}
                        onChange={(e) =>
                          updateStore?.(id, {
                            id,
                            ...staking,
                            [key]: e.target.value,
                          })
                        }
                        onBlur={() => {
                          mutateStaking?.(id, {
                            id,
                            ...staking,
                            [key]: value,
                          });
                        }}
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-0 h-full "
                      >
                        <PencilIcon />
                      </button>
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};
