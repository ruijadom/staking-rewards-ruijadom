import React, { useEffect } from "react";
import { cn } from "@ruijadom/utils";

import { trpc } from "./utils/trpc";
import useStore from "./store/staking";

import {
  Sheet,
  SheetBody,
  SheetCaption,
  SheetCell,
  SheetHead,
  SheetHeader,
  SheetRow,
  Input,
} from "@ruijadom/ui";

// Assets
import { PencilIcon, SearchIcon } from "./lib/icons";
// Utils
import { capitalizedWords, getUniqueKeys } from "@ruijadom/utils";

export default function App() {
  const { updateStakingStore, stakingsStore, currencyStore } = useStore();
  const mutation = trpc.updateStaking.useMutation();

  const {
    data: stakingList,
    error,
    isError,
    isLoading,
    isSuccess,
  } = trpc.getStakings.useQuery();

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

  return (
    <div className="mx-auto mt-[68px] max-w-[615px] overflow-hidden">
      <Sheet>
        <SheetCaption className="mb-3 space-y-1 text-left">
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
                className="bg-lighter text-lighter-foreground block w-full pl-10 pr-3 h-[32px] rounded-md"
                placeholder="Search"
                type="search"
                autoComplete="off"
              />
            </div>
          </form>
        </SheetCaption>
        <SheetHeader className="sticky top-0 z-10">
          <SheetRow className="text-sm font-medium bg-darker text-darker-foreground">
            {stakingKeys.map((key) => (
              <SheetHead
                key={key}
                className={`w-1/3 text-center first:rounded-l last:rounded-r h-[32px]`}
              >
                {`${capitalizedWords(key)} ${
                  key === "annualReward" ? `in ${currencyStore}` : ""
                } `}
              </SheetHead>
            ))}
          </SheetRow>
        </SheetHeader>

        <SheetBody className="text-xs font-normal before:leading-xl ">
          {!isLoading &&
            stakingsStore.map(({ id, ...staking }) => (
              <SheetRow key={id}>
                {Object.entries(staking).map(([key, value], index, entries) => (
                  <SheetCell
                    key={key}
                    className={`whitespace-nowrap first:rounded-l last:rounded-r h-[32px] ${
                      index !== entries.length - 1
                        ? "border-accent border-r"
                        : ""
                    }`}
                  >
                    <div className="flex ">
                      <div className="relative w-full">
                        <Input
                          type="text"
                          className="bg-lightest text-lightest-foreground py-2 pl-3 pr-6 "
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
                  </SheetCell>
                ))}
              </SheetRow>
            ))}
          : (
          <SheetRow>
            <SheetCell className="px-3" colSpan={3}>
              ...is loading
            </SheetCell>
          </SheetRow>
          )
        </SheetBody>
      </Sheet>
    </div>
  );
}
