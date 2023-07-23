import { create } from "zustand";
import {
  type Stakings,
  type UpdateStakingInput,
} from "@ruijadom/api/schema/staking";

type StakingState = {
  stakingsStore: Stakings;
  currencyStore: string;
  matrixStakingStore: object[][];
  updateStakingStore: (
    id: UpdateStakingInput["id"],
    staking: UpdateStakingInput,
  ) => void;
};

const useStore = create<StakingState>((set) => ({
  stakingsStore: [],
  currencyStore: "$",
  matrixStakingStore: [],
  updateStakingStore: (id, staking) =>
    set((state) => ({
      stakingsStore: state.stakingsStore.map((obj) =>
        obj.id === id ? { ...obj, ...staking } : obj,
      ),
    })),
}));

export default useStore;
