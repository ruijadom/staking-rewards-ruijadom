import { create } from "zustand";
import { type Stakings, type UpdateStakingInput } from "@ruijadom/api/schema/staking";

type StakingState = {
  stakingsStore: Stakings;
  currencyStore: string;
  updateStakingStore: (id: UpdateStakingInput["id"], staking: UpdateStakingInput) => void;
};

const useStore = create<StakingState>((set) => ({
  stakingsStore: [],
  currencyStore: "$",
  updateStakingStore: (id, staking) =>
    set((state) => ({
      stakingsStore: state.stakingsStore.map((obj) =>
        obj.id === id ? { ...obj, ...staking } : obj
      ),
    })),
}));

export default useStore;
