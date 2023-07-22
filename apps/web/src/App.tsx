import React, { useEffect } from "react";

import { Stakings } from "@ruijadom/api/schema/staking";
import { trpc } from "./utils/trpc";
import useStore from "./store/staking";

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

// Assets
import { PencilIcon, SearchIcon } from "./lib/icons";
// Utils
import { capitalizedWords, getUniqueKeys } from "@ruijadom/utils";

export default function App() {
  const { updateStakingStore, stakingsStore, currencyStore } = useStore();
  const mutation = trpc.updateStaking.useMutation();

  const [queryFilter, setQueryFilter] = React.useState("");

  const {
    data: stakingList,
    error,
    isError,
    isLoading,
    isSuccess,
  } = trpc.getStakings.useQuery(undefined, {
    select: (stakings: Stakings) =>
      stakings.filter((staking) =>
        Object.values(staking).some((value) =>
          value.toString().toLowerCase().includes(queryFilter.toLowerCase())
        )
      ),
  });

  const mutateStaking = (id: string, staking: any) => {
    mutation.mutate({ id, ...staking });
  };

  useEffect(() => {
    if (stakingList) {
      useStore.setState((state) => ({
        ...state,
        stakingsStore: stakingList,
      }));
    }
  }, [stakingList]);

  if (error) {
    return <p>{error.message}</p>;
  }

  const stakingKeys = getUniqueKeys(stakingsStore);


  const tableData = {
    columns: stakingKeys,
    rows: stakingsStore,
  }


  return (
    <div className="mx-auto mt-[68px] max-w-[615px] ">
      <Table className="border-separate border-spacing-y-1">
        <TableCaption className="mb-3 space-y-1.5 text-left">
          <h1 className="text-xl font-bold text-left">
            Your Personal Staking Calculator
          </h1>

          <form>
            <label
              htmlFor="default-search"
              className="text-sm font-normal sr-only mb-2"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
              </div>

              <Input
                id="search"
                className="appearance-none bg-lighter focus:outline-none focus:ring-1 focus:shadow-outline text-lighter-foreground block w-full pl-10 pr-3 h-[29px] rounded-sm"
                placeholder="Search"
                type="search"
                autoComplete="off"
                value={queryFilter || ""}
                onChange={(e) => setQueryFilter(e.target.value)}
              />
            </div>
          </form>
        </TableCaption>
        <TableHeader className="sticky top-0 z-10">
          <TableRow className="text-sm font-medium bg-darker text-darker-foreground">
            {stakingKeys.map((key) => (
              <TableHead
                key={key}
                className={`w-1/3 text-center first:rounded-l-sm last:rounded-r-sm h-[32px]`}
              >
                {`${capitalizedWords(key)} ${
                  key === "annualReward" ? `in ${currencyStore}` : ""
                } `}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody className="text-xs font-normal before:block before:h-1 before:leading-xl">
          {isError && (
            <TableRow>
              <TableCell className="px-3" colSpan={3}>
                {error}
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
            stakingsStore.map(({ id, ...staking }) => (
              <TableRow
                key={id}
                className="bg-lightest hover:shadow-focus h-full"
              >
                {Object.entries(staking).map(([key, value], index, entries) => (
                  <TableCell
                    key={key}
                    className={`whitespace-nowrap first:rounded-l-sm last:rounded-r-sm h-[32px] ${
                      index !== entries.length - 1
                        ? "border-darker border-r"
                        : ""
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
                            updateStakingStore(id, {
                              id,
                              ...staking,
                              [key]: e.target.value,
                            })
                          }
                          onBlur={() => {
                            mutateStaking(id, {
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
    </div>
  );
}
