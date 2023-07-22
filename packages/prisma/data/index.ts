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


export const stakings = [
  {
    price: "1000",
    rewardRate: "15",
    annualReward: "150",
    dataItems: {
      create: [
        {
          key: "A1",
          value: "1000",
          expression: "=A1",
          className: "equation",
        },
        {
          key: "B1",
          value: "15",
          expression: "=B1",
        },
        {
          key: "C1",
          value: "150",
          expression: "=C1",
        },
      ],
    },
  },
];