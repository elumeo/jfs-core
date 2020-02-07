export interface ISharedStoreProps {
  [reducer: string]: any;

  epic?: any;
}

class SharedStore {
  public reducer = null;
  public epic = null;

  constructor(props: ISharedStoreProps) {
    if (props.epic !== undefined) {
      this.epic = props.epic;
    }

    const reducerName = Object.keys(props).find(key => key !== 'epic');
    this.reducer = {[reducerName]: props[reducerName]};
  }
}

export default SharedStore;
