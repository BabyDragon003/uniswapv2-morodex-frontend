# Documentation: Info

A brief overview how Info part of PancakeSwap website works.

## Code structure

In terms of React components Info section is just another view (located in [apps/web/src/views/Info](../apps/web/src/views/Info)) that is assigned route (in [pages](../apps/web/src/pages)).
There are also some Info-related components inside [apps/web/src/components](../apps/web/src/components) (InfoNav, InfoCharts, InfoTables and InfoSearch at the time of writing).

There are helper functions to handle data formatting and requests - [apps/web/src/views/Info/utils/infoDataHelpers.ts](../apps/web/src/views/Info/utils/infoDataHelpers.ts) and [apps/web/src/views/Info/utils/infoQueryHelpers.ts](../apps/web/src/views/Info/utils/infoQueryHelpers.ts)

Info section has it's own reducer in Redux store - [apps/web/src/state/info](../apps/web/src/state/info). It handles all data about pools, tokens and overall protocol. The only exception is token/pool watchlist that is stored under [src/state/user](../apps/web/src/state/user) reducer.

GraphQL request logic lives under [apps/web/src/state/info/queries](../apps/web/src/state/info/queries) directory. Code over there handles firing requests to StreamingFast subgraph as well as formatting returned values and calculating all the derived data we need.

There are also multiple `blocks` queries to retrieve block numbers at different timestamps.

The flow is controlled by [apps/web/src/state/info/updaters.ts](../apps/web/src/state/info/updaters.ts). When user navigates through the site more pools and tokens are automatically loaded, (e.g. you click on BNB token and pools for BNB are loaded automatically, if you click on BNB-BTCB then BTCB token will be loaded, etc)

There are additional requests for price chart and search that are fired when user uses these features.
