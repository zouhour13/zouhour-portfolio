export type Credential = {
  title: string;
  issuer: string;
  issued: string;
  category: "AI & Generative AI" | "Cloud & Data";
  context: string;
  image: string;
  pdf: string;
};

export const credentials: Credential[] = [
  { title: "Deep Learning with PyTorch", issuer: "365 Data Science", issued: "November 21, 2025", category: "AI & Generative AI", context: "A focused deep-learning learning milestone.", image: "/certificates/deep-learning-pytorch.jpg", pdf: "/certificates/deep-learning-pytorch.pdf" },
  { title: "Machine Learning with Decision Trees and Random Forests", issuer: "365 Data Science", issued: "November 21, 2025", category: "AI & Generative AI", context: "A focused machine-learning learning milestone.", image: "/certificates/machine-learning-trees.jpg", pdf: "/certificates/machine-learning-trees.pdf" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft", issued: "March 6, 2024", category: "AI & Generative AI", context: "A Microsoft fundamentals credential in AI.", image: "/certificates/azure-ai-fundamentals.jpg", pdf: "/certificates/azure-ai-fundamentals.pdf" },
  { title: "Azure Data Fundamentals", issuer: "Microsoft", issued: "April 17, 2024", category: "Cloud & Data", context: "A Microsoft fundamentals credential in data.", image: "/certificates/azure-data-fundamentals.jpg", pdf: "/certificates/azure-data-fundamentals.pdf" },
  { title: "Azure Fundamentals", issuer: "Microsoft", issued: "April 3, 2024", category: "Cloud & Data", context: "A Microsoft fundamentals credential in cloud concepts.", image: "/certificates/azure-fundamentals.jpg", pdf: "/certificates/azure-fundamentals.pdf" },
];
