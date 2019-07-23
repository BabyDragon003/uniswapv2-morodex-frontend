import { atoms } from "@pancakeswap/ui/css/atoms";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const severityVariants = recipe({
  variants: {
      }),
      2: atoms({
        color: "warning",
      }),
      3: atoms({
        color: "failure",
      }),
      4: atoms({
        color: "failure",
      }),
    },
  },
});

export type SeverityVariants = RecipeVariants<typeof severityVariants>;
