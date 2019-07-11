import { BIG_ZERO } from "@pancakeswap/utils/bigNumber";
import { Text, useMatchBreakpoints, Pool } from "@pancakeswap/uikit";
import BigNumber from "bignumber.js";
import { useTranslation } from "@pancakeswap/localization";
import { createElement, FunctionComponent } from "react";

interface AprCellProps<T> {
  pool: Pool.DeserializedPool<T>;
  aprComp: FunctionComponent<{
    pool: Pool.DeserializedPool<T>;
    stakedBalance: BigNumber;
    showIcon: boolean;
  }>;
}

        })}
      </Pool.CellContent>
    </Pool.BaseCell>
  );
}
