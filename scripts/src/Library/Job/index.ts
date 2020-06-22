import { greenBright, redBright } from 'ansi-colors';
const missingSpaceAmount = (text: string, width: number) => (
  text.length <= width
    ? width- text.length
    : 0
);
const whitespaces = (amount: number) => Array(amount).fill(' ').join('');
const centerText = (text: string, width: number) => {
  const space = whitespaces(
    Math.floor(
      missingSpaceAmount(text, width) / 2
    )
  );
  return `${space}${text}${space}`
}

class Notify {
  static printCheck = ({
    status,
    checkName,
    description
  }: {
    status: 'OK' | 'NOT_OK';
    checkName: string;
    description?: string;
  }) => {
    const color = (
      status === 'OK'
        ? greenBright
        : redBright
    );
    const text = centerText(
      status,
      'NOT_OK'.length +1
    );
    const details = (
      description
        ? [description]
        : []
    );

    console.log([
      ' ' + color(text),
      checkName,
      ...details
    ].join(' | '))
  }
}

class Job<Payload> {
  public readonly name: string;
  private readonly onComplete: (
    payload: Payload,
    status: (
      text: 'OK' | 'NOT_OK',
      description?: string
    ) => void
  ) => void;
  private readonly task: (onComplete: (
    payload: Payload
  ) => void) => void;
  constructor({
    name, task, onComplete
  }: {
    name: string;
    task: (onComplete: (payload: Payload) => void) => void;
    onComplete: (payload: Payload, status: (text: 'OK' | 'NOT_OK', description?: string) => void) => void
  }) {
    this.name = name;
    this.task = task;
    this.onComplete = onComplete;
  }

  public status = (status: 'OK' | 'NOT_OK', description?: string) => {
    Notify.printCheck({
      checkName: this.name,
      status,
      description
    })
  }

  public run = () => this.task((payload) =>
    this.onComplete(
      payload,
      (text: 'OK' | 'NOT_OK', description?: string) => this.status(text, description)
    )
  );
}

export default Job;
