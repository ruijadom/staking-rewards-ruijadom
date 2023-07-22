import z from "zod";

export const createStakingSchema = z.object({
  price: z.string(),
  rewardRate: z.string(),
  annualReward: z.string(),
});

export type CreateStakingInput = z.TypeOf<typeof createStakingSchema>;

export const updateStakingSchema = z.object({
  id: z.string().cuid(),
  price: z.string(),
  rewardRate: z.string(),
  annualReward: z.string(),
});

export type UpdateStakingInput = z.TypeOf<typeof updateStakingSchema>;

export const getSingleStakingSchema = z.object({
  id: z.string().cuid(),
});

export const deleteStakingSchema = z.object({
  id: z.string().cuid(),
});

// define array of stakings
export const stakingsSchema = z.array(
  z.object({
    id: z.string().cuid(),
    price: z.string(),
    rewardRate: z.string(),
    annualReward: z.string(),
  }),
);

export type Stakings = z.TypeOf<typeof stakingsSchema>;
