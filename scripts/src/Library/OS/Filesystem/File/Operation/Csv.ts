import { csv2json } from 'json-2-csv';
import read from './Read';

export default <T>(
  path: string,
  onComplete: (csv: T[]) => void
) => read(
  path,
  data => csv2json(data as string, (error, data) => {
    if (error) {
      throw error;
    }
    else {
      onComplete(data as T[]);
    }
  })
);
