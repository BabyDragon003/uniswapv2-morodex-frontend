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

/**
 * Return the upgrade type from the base version to the update version.
 * Note that downgrades and equivalent versions are both treated as `NONE`.
 * @param base base list
 * @param update update to the list
 */
export function getVersionUpgrade(base: Version, update: Version): VersionUpgrade {
  if (update.major > base.major) {
    return VersionUpgrade.MAJOR
  }
  if (update.major < base.major) {
    return VersionUpgrade.NONE
  }
