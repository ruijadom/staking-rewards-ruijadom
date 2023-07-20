import { trpc } from "./utils/trpc";

import { cn } from "@ruijadom/utils" 

function App() {
  const { isError, isLoading, isSuccess, data, error } =
    trpc.getStakings.useQuery();

  return (
    <div className={cn("bg-primary-500")}>
      <h1>Staking Rewards</h1>
      {isLoading ? (
        <p>loading</p>
      ) : isSuccess ? (
        <>
          {data?.map((staking) => (
            <div className="card" key={staking.id}>
              <p>id: {staking.id}</p>
              <p>price: {staking.price}</p>
              <p>rewardRate: {staking.rewardRate}</p>
              <p>annualReward: {staking.annualReward}</p>
            </div>
          ))}
        </>
      ) : isError ? (
        <p>{error.message}</p>
      ) : null}
      <div className="divider" />
    </div>
  );
}

export default App;
