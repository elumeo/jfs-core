import { sep } from "path";
import { existsSync } from "fs";
type PathItem = {
  segment: string;
  path: string;
};

class Explorer {
  public readonly start: string;

  constructor(start: string) {
    this.start = start;
  }

  private static createPath = (
    descendants: PathItem[],
    segment: string
  ): string => [
    ...(
      descendants.length
        ? descendants.map(({ segment }) => segment)
        : ['']
    ),
    segment
  ].join(sep);

  private static createPathItem = (
    previous: PathItem[],
    current: string
  ): PathItem => ({
    segment: current,
    path: Explorer.createPath(previous, current)
  });

  private static finalizeList = (
    all: PathItem[],
    newPrevious: PathItem[]
  ): (PathItem | string)[] => (
    all.length === newPrevious.length
      ? newPrevious.map(({ path }) => path)
      : newPrevious
  );

  private pathStack = (): string[] => (
    this.start.split(sep)
      .reduce(
        (previous, current, _index, all) => Explorer.finalizeList(
          ((all as unknown[]) as PathItem[]),
          [...previous, Explorer.createPathItem(previous, current)]
        ),
        []
      )
  );

  public explore = (
    pathPattern: (path: string) => string,
    onComplete: (pathStack: string[]) => void
  ) => onComplete(
    this.pathStack()
      .filter(path => existsSync(pathPattern(path)))
      .reverse()
  );

}

export default Explorer;
