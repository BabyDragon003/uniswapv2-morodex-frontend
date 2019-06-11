# Farms documentation

## How to add a new farm

- Add an entry in `packages/farms/constants/[chainId].ts`, below the farm with the pid 0
Data are stored in the global redux state (`/state/farms`).
