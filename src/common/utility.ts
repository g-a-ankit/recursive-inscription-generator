import fs from "fs";
import path from "path";

export const getCartesianProduct = <T>(data: T[][]): T[][] => {
  return data.reduce<T[][]>(
    (acc, curr) => acc.flatMap((a) => curr.map((b) => [...a, b])),
    [[]]
  );
};

export const listHtmlFiles = (directory: string) => {
  const files = fs.readdirSync(directory);

  const sortedHtmlFiles = files
    .filter((file) => file.endsWith(".html"))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/g)?.pop() || "0", 10);
      const numB = parseInt(b.match(/\d+/g)?.pop() || "0", 10);

      return numA - numB;
    });

  const absolutePaths = sortedHtmlFiles.map((file) =>
    path.resolve(directory, file)
  );

  return absolutePaths;
};
