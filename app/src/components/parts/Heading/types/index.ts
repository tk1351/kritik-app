import type { BaseSize } from "~/types";

export type Props = {
  size?: Extract<BaseSize, "xsmall" | "small" | "medium" | "large" | "xlarge">;
};
