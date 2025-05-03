export type PolarProduct = {
  id: string;
  polar_id: string;
  name: string;
};

/**
 * Returns the appropriate list of Polar products based on the current stage
 */
export function getPolarProducts(): PolarProduct[] {
  const isProduction = process.env.NEXT_PUBLIC_STAGE === "prod";
  // Sandbox products for non-production environments
  const sandboxProducts: PolarProduct[] = [
    {
      id: "sponsorship",
      polar_id: "c45be93b-0b61-4909-b029-105c8c2531d0",
      name: "Monthly Sponsorship",
    },
    {
      id: "enterprise",
      polar_id: "c45be93b-0b61-4909-b029-105c8c2531d0",
      name: "Enterprise License",
    },
    {
      id: "consultation",
      polar_id: "1f84ce26-8e4b-4970-82c3-67bf962b31a7",
      name: "Expert Consultation",
    },
  ];

  // Production products
  const productionProducts: PolarProduct[] = [
    {
      id: "sponsorship",
      polar_id: "8a68d985-bcf9-4b75-b83f-77fbc9dcd5ea",
      name: "Monthly Sponsorship",
    },
    {
      id: "enterprise",
      polar_id: "b1f707f0-a011-4b55-9552-b6811e5446f5",
      name: "Enterprise License",
    },
    {
      id: "consultation",
      polar_id: "1f84ce26-8e4b-4970-82c3-67bf962b31a7",
      name: "Expert Consultation",
    },
  ];

  return isProduction ? productionProducts : sandboxProducts;
}

/**
 * Gets a specific product by its ID
 */
export function getProductById(productId: string): PolarProduct | undefined {
  return getPolarProducts().find((product) => product.id === productId);
}
