import React, { useState, useRef, useEffect } from "react";

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
import { capitalizedWords } from "@ruijadom/utils";
import { PencilIcon } from "../../lib/icons";

interface SheetColumnProps {
  key: string;
  value: string;
}

interface SheetProps {
  title?: React.ReactNode;
  searchInput?: React.ReactNode;
  columns: SheetColumnProps[];
  rows: Stakings;
  currency?: string;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isEditable?: boolean;
  updateStore: (
    id: UpdateStakingInput["id"],
    staking: UpdateStakingInput
  ) => void;
  mutateStaking: (
    id: UpdateStakingInput["id"],
    staking: UpdateStakingInput
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
  isEditable = true,
  updateStore,
  mutateStaking,
}: SheetProps): React.ReactElement => {
  const [editingCell, setEditingCell] = useState<{
    rowId: string;
    key: string;
  } | null>(null);

  // Ref to store the input element reference
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Focus the input when the editing mode is activated
    if (editingCell !== null) {
      inputRef.current?.focus();
    }
  }, [editingCell]);

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
        <TableRow className="text-sm text-center font-medium bg-darker text-darker-foreground">
          {columns.map(({ key, value }) => (
            <TableHead
              key={key}
              className={`w-1/3 text-center first:rounded-l-sm last:rounded-r-sm h-[32px]`}
            >
              {` ${capitalizedWords(!!editingCell ? key : value)} ${
                value === "annualReward" && !editingCell ? `in ${currency}` : ""
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
              className="group bg-lightest hover:shadow-focus h-full"
            >
              {Object.entries(staking).map(([key, value], index, entries) => {
                const isEditing =
                  editingCell?.rowId === id && editingCell?.key === key;

                return (
                  <TableCell
                    key={key}
                    className={`border-0 whitespace-nowrap first:rounded-l-sm last:rounded-r-sm h-[32px] ${
                      index !== entries.length - 1
                        ? "border-darker border-r"
                        : ""
                    }`}
                  >
                    {isEditing || !isEditable ? (
                      <div className="flex">
                        <fieldset
                          className="relative w-full"
                          onBlur={(e) => {
                            // Save the edited value to the state when onBlur is triggered
                            mutateStaking?.(id, {
                              id,
                              ...staking,
                              [key]: value,
                            });
                            setEditingCell(null);

                            e.stopPropagation();
                          }}
                        >
                          <Input
                            ref={inputRef} // Assign the input element reference
                            id={id} // Assign the id of the row
                            itemID={key} // Assign the key of the column
                            type="text"
                            className="bg-transparent focus:outline-none focus:shadow-outline text-center text-lightest-foreground py-2 pl-3 pr-6 "
                            placeholder={capitalizedWords(key)}
                            autoComplete="off"
                            value={value || ""}
                            onChange={(e) =>
                              updateStore?.(id, {
                                id,
                                ...staking,
                                [key]: e.target.value,
                              })
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                // Save the edited value to the state when the Enter key is pressed
                                setEditingCell(null);
                                mutateStaking?.(id, {
                                  id,
                                  ...staking,
                                  [key]: value,
                                });

                                e.stopPropagation();
                              }
                            }}
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-0 h-full "
                            onClick={(e) => {
                              setEditingCell(null);
                              e.stopPropagation();
                            }}
                          >
                            {/* Replace PencilIcon with a CancelIcon */} X
                          </button>
                        </fieldset>
                      </div>
                    ) : (
                      <div className="flex">
                        <div className="relative w-full">
                          {/* Display the value when not editing */}
                          <div
                            className={`bg-transparent focus:outline-none focus:shadow-outline text-center text-lightest-foreground py-2 pl-3 pr-${
                              isEditable ? "6" : " 3"
                            }`}
                          >
                            {value}
                          </div>

                          {isEditable && (
                            <button
                              type="button"
                              className="absolute right-2 top-0 h-full "
                              onClick={(e) => {
                                setEditingCell({ rowId: id, key });
                                e.stopPropagation();
                              }}
                            >
                              {/* Use PencilIcon to indicate editing */}
                              <PencilIcon />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}

        {rows.length === 0 && (
          <TableRow>
            <TableCell className="px-3" colSpan={3}>
              ...no data
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
