interface StakingListProps {
  price: string;
  rewardRate: string;
  annualReward: string;
}

interface ResponseProps {
  data: StakingListProps[];
  currency: string;
}

export const stackingData: StakingListProps[] = Array.from(
  { length: 4 },
  () => ({
    price: "1000",
    rewardRate: "15",
    annualReward: "150",
  }),
);

