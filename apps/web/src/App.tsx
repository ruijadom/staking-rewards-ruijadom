import React, { useMemo, useEffect } from "react";

import { Stakings } from "@ruijadom/api/schema/staking";
import { trpc } from "./utils/trpc";
import useStore from "./store/staking";

// UI
import { Input } from "@ruijadom/ui";
// Assets
import { SearchIcon } from "./lib/icons";
// Utils
import { enumerateArrayElements, getColumnKeys } from "@ruijadom/utils";
import { Sheet } from "./components/sheet";

export default function App() {
  const { updateStakingStore, stakingsStore, currencyStore } = useStore();
  const mutation = trpc.updateStaking.useMutation();

  const [queryFilter, setQueryFilter] = React.useState("");

  const {
    data: stakingList,
    refetch: refetchStaking,
    isError: isStakingError,
    isLoading: isStakingLoading,
    isSuccess: isStakingSuccess,
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
    console.log("isStakingSuccess", stakingList);
    if (isStakingSuccess) {
      useStore.setState((state) => ({
        ...state,
        stakingsStore: stakingList,
      }));
    }
  }, [isStakingSuccess]);

  const tableDataMemozied = useMemo(() => {
    return {
      columns: enumerateArrayElements(getColumnKeys(stakingsStore)),
      rows: stakingsStore,
    };
  }, [stakingsStore]);

  

  // const result = tableDataMemozied.rows.reduce((acc, item, index) => {
  //   tableDataMemozied.columns.forEach((column) => {
  //     const id = item.id;
  //     const key = `${column.key}${index + 1}`;
  //     const value = item[column.value];
  //     const expression = key ? `=${key}` : `=${column.key}${index}`;
  //     const className = column.key === "A" ? "equation" : undefined;

  //     acc[key] = {
  //       id,
  //       key,
  //       value,
  //       expression,
  //       className,
  //     };
  //   });

  //   return acc;
  // }, {});

  // console.log(result);

  return (
    <div className="mx-auto my-[68px] max-w-[615px] ">
      <Sheet
        title={
          <h1 className="text-xl font-bold text-left">
            Your Personal Staking Calculator
          </h1>
        }
        columns={tableDataMemozied.columns}
        rows={tableDataMemozied.rows}
        currency={currencyStore}
        isError={isStakingError}
        isLoading={isStakingLoading}
        isSuccess={isStakingSuccess}
        updateStore={updateStakingStore}
        mutateStaking={(_, staking) => {
          const stakingToUpdate = stakingList?.find(
            (s) => s.id === staking.id
          );

          if(JSON.stringify(stakingToUpdate) !== JSON.stringify(staking)) {
            mutateStaking(staking.id, staking);
            refetchStaking();
          };
        }}
        searchInput={
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
        }
      />
    </div>
  );
}
