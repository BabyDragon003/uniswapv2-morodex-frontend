/**
 * Enum describing types of version differences
 */
import { Version } from './types'

export enum VersionUpgrade {
  NONE,
  PATCH,
  MINOR,
  MAJOR,
  }
  if (update.major < base.major) {
    return VersionUpgrade.NONE
  }
  if (update.minor > base.minor) {
    return VersionUpgrade.MINOR
  }
  if (update.minor < base.minor) {
    return VersionUpgrade.NONE
  }
  return update.patch > base.patch ? VersionUpgrade.PATCH : VersionUpgrade.NONE
}
