import { create } from "zustand";
import { type Stakings, type UpdateStakingInput } from "@ruijadom/api/schema/staking";

type StakingState = {
  stakings: Stakings;
  updateStaking: (id: UpdateStakingInput["id"], staking: UpdateStakingInput) => void;
};

const useStore = create<StakingState>((set) => ({
  stakings: [],
  updateStaking: (id, staking) =>
    set((state) => ({
      stakings: state.stakings.map((obj) =>
        obj.id === id ? { ...obj, ...staking } : obj
      ),
    })),
}));

export default useStore;
